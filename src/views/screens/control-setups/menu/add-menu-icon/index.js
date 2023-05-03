import axios from "axios";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import { API_SERVER } from '../../../../../config/constant';
import { MDBIcon } from 'mdb-react-ui-kit';
// import multer from "multer";
export default function AddMenuIcon({ formData, disabled, handleClose, setStateChangeOfMenus }) {
  const [response, setResponse] = useState([]);
  const [icon, setIcon] = useState("logo192.png");
  const [showForm, setShowForm] = useState(false);

  const customTheme = JSON.parse(localStorage.getItem('theme'));

  const headerImage = customTheme.theme.headerImage;

  const bgColor = customTheme.theme.headerImage;

  useEffect(() => {
    axios
      .post(API_SERVER + "/get-menus-by-menu-level", { menu_level: 2 })
      .then((res) => {

        setResponse(res.data);

      });
  }, []);

  function handleFileChange(e) {
    let filesize = (e.target.files[0].size / 1024 / 1024).toFixed(4); // MB
    if (filesize > 1) {
      swal({
        title: "Oops...",
        text: "File size should be less than 1MB",
        icon: "error",
      }).then((res) => {
        // console.log(res);
      });
    } else {
      setIcon(e.target.files[0]);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    document.getElementById("saveBTN").disabled = true;

    const menu_level = 3;
    const menu_name = document.getElementById("menu_name").value.replace(/'/g, "''");
    const menu_id = Math.random().toString(36).slice(9);;
    const parent_menu_id = document.getElementById("parent_menu_id").value.replace(/'/g, "''");
    const menu_groupings = document.getElementById("menu_groupings").value.replace(/'/g, "''");
    const file = icon;
    const file_name = null;
    const menu_url = null;
    const menu_permitted = document.getElementById("menu_permitted").value.replace(/'/g, "''");
    const bank_permission = document.getElementById("bank_permission").value.replace(/'/g, "''");

    if (
      menu_name === "" ||
      file === "" ||
      parent_menu_id === "" ||
      menu_groupings === "" ||
      type_code === "" ||
      menu_url === "" ||
      menu_permitted === "" ||
      bank_permission === ""
    ) {
      swal({
        title: "All Fields Are Required",
        text: "Please fill all the fields",
        icon: "warning",
        button: "Ok",
      }).then((result) => {
        // Do something here..
        document.getElementById("saveBTN").disabled = false;
      });
    } else {
      var property = document.getElementById("icon").files[0];

      // console.log(property, "property");
      if (property) {
        var image_size = property.size;

        var image_name = property.name;
        var image_extension = image_name.split(".").pop().toLowerCase();
        // console.log(image_extension, "gh");
        if (
          ![
            "png",
          ].includes(image_extension)
        ) {
          return swal({
            text: "Invalid File Type. The allowed file (extension) types include; '.png' only.",
            icon: "warning",
            dangerMode: true,
          }).then((result) => {
              if (result) {
                document.getElementById("saveBTN").disabled = false;
              }
          });
        }

        if (image_size > 1000000) {
          // check if image size is less than 1MB
          return swal({
            text: "The file size is too large. The maximum file size should be 1MB!",
            icon: "warning",
            dangerMode: true,
          }).then((result) => {
              if (result) {
                document.getElementById("saveBTN").disabled = false;
              }
          });
        }
      }
      const formData = new FormData();
      formData.append("menu_id", menu_id);
      formData.append("menu_level", menu_level);
      formData.append("menu_name", menu_name);
      formData.append("parent_menu_id", parent_menu_id);
      formData.append("menu_groupings", menu_groupings);
      formData.append("file", icon);
      formData.append("icon", "feather icon-monitor");
      formData.append("color", "#0047ab");
      formData.append("type_code", "item");
      formData.append("file_name", file_name);
      formData.append("menu_url", menu_url);
      formData.append("menu_permitted", menu_permitted);
      formData.append("bank_permission", bank_permission);

      try {
        const response = await axios.post(
          API_SERVER + "/add-menu-icon",
          formData
        );

        if (response) {
          // console.log(response);

          if (response.data[0].responseCode === "000") {
            // return alert("ghagahga");
            swal({
              title: "Added Successfully",
              text: "The menu icon has been added successfully",
              icon: "success",
              button: "Ok",
            }).then((result) => {
              if (result) {
                setStateChangeOfMenus(true);
                document.getElementById("saveBTN").disabled = false;
                document.getElementById("minimizeModal").click();
              }
            });

          }
        } else {
          swal({
            title: "Something went wrong",
            text: "The menu icon could not be added",
            icon: "warning",
            button: "Ok",
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
    return false;
  }

  const arr = [
    "id",
    "menu_id",
    "menu_level",
    "menu_name",
    "parent_menu_id",
    "menu_groupings",
    "icon",
    "color",
    "type_code",
    "file_name",
    "menu_url",
    "menu_permitted",
    "bank_permission",
  ];
  const arr1 = [];
  arr.map((i) => {
    arr1.push(
      <>
        {(() => {
          if (i === "id") {
            return (
              <>
                <div key={i[0]} className="mb-3 flex items-center">
                  <label className="w-[30%] hidden capitalize text-sm font-semibold text-gray-400">
                    {i.replace(/_/g, " ")}
                  </label>
                  <input
                    id={i}
                    className="w-[70%] hidden border text-sm border-gray-400 focus:border-blue-400  focus:outline-none rounded-sm px-2 py-0.5"
                    type="text"
                    disabled={disabled}
                  />
                </div>
              </>
            );
          } else if (i === "file_name") {
            return (
              <>
                <div key={i[0]} className="flex items-center">
                  <label className="w-[30%] hidden capitalize text-sm font-semibold text-gray-400">
                    {i.replace(/_/g, " ")}
                  </label>
                  <input
                    id={i}
                    className="w-[70%] hidden border text-sm border-gray-400 focus:border-blue-400  focus:outline-none rounded-sm px-2 py-0.5"
                    type="text"
                    disabled={disabled}
                  />
                </div>
              </>
            );
          } else if (i === "menu_permitted" || i === "bank_permission") {
            return (
              <>
                <div key={i[0]} className="mb-3 mt-2 flex items-center text-sm">
                  <label className="w-[30%] capitalize  font-semibold text-gray-400">
                    {i.replace(/_/g, " ")}
                  </label>
                  <select
                    id={i}
                    className="w-[70%] border text-sm border-gray-400 focus:border-blue-400  focus:outline-none rounded-sm px-2 py-0.5"
                  >
                    <option value={"Y"}>Yes</option>
                    <option value={"N"} selected>No</option>
                  </select>
                </div>
              </>
            );
          } else if (i === "parent_menu_id") {
            return (
                <>
                  <div key={i[0]} className="flex items-center">
                    <label className="w-[30%] hidden capitalize text-sm font-semibold text-gray-400">
                      {i.replace(/_/g, " ")}
                    </label>
                    <input
                      id={i}
                      className="w-[70%] hidden border text-sm border-gray-400 focus:border-blue-400  focus:outline-none rounded-sm px-2 py-0.5"
                      type="text"
                      disabled={disabled}
                    />
                  </div>
                </>
              );
          } else if (i === "menu_level") {
            return (
              <>
                <div key={i[0]} className="flex items-center">
                  <label className="w-[30%] hidden capitalize text-sm font-semibold text-gray-400">
                    {i.replace(/_/g, " ")}
                  </label>
                  <input
                    id={i}
                    className="w-[70%] hidden border text-sm border-gray-400 focus:border-blue-400  focus:outline-none rounded-sm px-2 py-0.5"
                    type="text"
                    disabled={disabled}
                  />
                </div>
              </>
            );
          } else if (i === "menu_groupings") {
            return (
              <>
                <div key={i[0]} className="mb-3 flex items-center">
                  <label className="w-[30%] capitalize text-sm font-semibold text-gray-400">
                    {i.replace(/_/g, " ")}
                  </label>
                  <input
                    id={i}
                    maxLength={11}
                    className="w-[70%] border text-sm border-gray-400 focus:border-blue-400  focus:outline-none rounded-sm px-2 py-0.5"
                    type="text"
                    disabled={disabled}
                  />
                </div>
              </>
            );
          } else if (i === "color") {
            return (
              <>
                <div key={i[0]} className="flex items-center">
                  <label className="w-[30%] hidden capitalize text-sm font-semibold text-gray-400">
                    {i.replace(/_/g, " ")}
                  </label>
                  <input
                    id={i}
                    className="w-[70%] hidden border text-sm border-gray-400 focus:border-blue-400  focus:outline-none rounded-sm px-2 py-0.5"
                    type="text"
                    value="black"
                    disabled={disabled}
                  />
                </div>
              </>
            );
          } else if (i === "type_code") {
            return (
              <>
                <div key={i[0]} className="hidden flex items-center text-sm">
                  <label className="w-[30%] capitalize  font-semibold text-gray-400">
                    {i.replace(/_/g, " ")}
                  </label>
                  <select
                    id={i}
                    className="w-[70%] hidden border text-sm border-gray-400 focus:border-blue-400  focus:outline-none rounded-sm px-2 py-0.5"
                  >
                    <option value={"Y"}>Yes</option>
                    <option value={"N"} selected>
                      No
                    </option>
                  </select>
                </div>
              </>
            );
          } else if (i === "id") {
            return (
              <>
                <div key={i[0]} className="mb-3 flex items-center">
                  <label className="w-[30%] hidden capitalize text-sm font-semibold text-gray-400">
                    {i.replace(/_/g, " ")}
                  </label>
                  <input
                    id={i}
                    className="w-[70%] hidden border text-sm border-gray-400 focus:border-blue-400  focus:outline-none rounded-sm px-2 py-0.5"
                    type="text"
                    disabled={disabled}
                  />
                </div>
              </>
            );
          } else if (i === "menu_url") {
            return (
              <>
                <div key={i[0]} className="flex items-center">
                  <label className="w-[30%] hidden capitalize text-sm font-semibold text-gray-400">
                    {i.replace(/_/g, " ")}
                  </label>
                  <input
                    id={i}
                    className="w-[70%] hidden border text-sm border-gray-400 focus:border-blue-400  focus:outline-none rounded-sm px-2 py-0.5"
                    type="text"
                    disabled={disabled}
                  />
                </div>
              </>
            );
          } else if (i === "icon") {
            return (
              <>
                <div key={i[0]} className="mb-2 flex items-center">
                  <label className="w-[30%] capitalize text-sm font-semibold text-gray-400">
                    Menu {i.replace(/_/g, " ")}
                  </label>

                  <label
                    style={{ textTransform: "uppercase" }}
                    className="bg-gray-400 w-[70%] font-semibold  text-white text-sm text-center rounded-sm px-2 py-1"
                  >
                    Click To Select Icon
                    <input
                      accept="image/*"
                      type="file"
                      id="icon"
                      hidden
                      onChange={(e) => {
                        handleFileChange(e);
                        // console.log(e.target.files[0]);
                      }}
                    />
                  </label>
                </div>
              </>
            );
          } else if (i === "menu_id") {
            return (
              <>
                <div key={i[0]} className="flex items-center">
                  <label className="w-[30%] hidden capitalize text-sm font-semibold text-gray-400">
                    {i.replace(/_/g, " ")}
                  </label>
                  <input
                    id={i}
                    className="w-[70%] border hidden text-sm border-gray-400 focus:border-blue-400  focus:outline-none rounded-sm px-2 py-0.5"
                    maxLength="4"
                    type="text"
                    disabled={disabled}
                  />
                </div>
              </>
            );
          } else if (i === "icon") {
            return (
              <>
                <div key={i[0]} className="mb-3  flex items-center">
                  <label className="w-[30%] capitalize text-sm font-semibold text-gray-400">
                    {i.replace(/_/g, " ")}
                  </label>

                  <label className="bg-cyan-500 w-[70%] font-semibold  text-white text-sm text-center rounded-sm px-2 py-1">
                    Upload Icon
                    <input
                      accept="image/*"
                      type="file"
                      id="icon"
                      hidden
                      onChange={(e) => {
                        handleFileChange(e);
                        // console.log(e.target.files[0]);
                      }}
                    />
                  </label>
                </div>
              </>
            );
          } else {
            return (
              <>
                <div key={i[0]} className="mb-3 flex items-center">
                  <label className="w-[30%] capitalize text-sm font-semibold text-gray-400">
                    {i.replace(/_/g, " ")}
                  </label>
                  <input
                    id={i}
                    className="w-[70%] border text-sm border-gray-400 focus:border-blue-400  focus:outline-none rounded-sm px-2 py-0.5"
                    type="text"
                    disabled={disabled}
                  />
                </div>
              </>
            );
          }
        })()}
      </>
    );
  });
  // console.log(icon);
  return (
    <>
      <div className="p-3" style={{ zoom: "0.9", marginBottom: "-40px" }}>


        <div style={{ marginTop: "-32px", textAlign: "center", zoom: "0.95" }}>

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button className='btn btn-light' style={{ background: "white" }}><MDBIcon style={{ color: "grey", marginLeft: "10px", paddingBottom: 5, fontSize: 15 }} fas icon="sync" /><br />Refresh</button>
          </span>

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button id="saveBTN" className='btn btn-light' onClick={handleSubmit} style={{ color: "white", background: `url(` + window.location.origin + `/assets/images/headerBackground/` + headerImage + `)` }}><MDBIcon style={{ color: "white", marginLeft: "10px", paddingBottom: 5, fontSize: 15 }} fas icon="save" /><br />Save</button>
          </span>

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button className='btn btn-light' style={{ background: "white" }}><MDBIcon style={{ color: "grey", marginLeft: "10px", paddingBottom: 5, fontSize: 15 }} fas icon="file-alt" /><br />New</button>
          </span>

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button className='btn btn-light' style={{ background: "white" }}><MDBIcon style={{ color: "grey", marginLeft: "10px", paddingBottom: 5, fontSize: 15 }} fas icon="question-circle" /><br />Help</button>
          </span>

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button className='btn btn-light' onClick={() => document.getElementById("closeModalBTN").click()} style={{ color: "white", background: `url(` + window.location.origin + `/assets/images/headerBackground/` + headerImage + `)` }}><MDBIcon style={{ color: "white", marginLeft: "10px", paddingBottom: 5, fontSize: 15 }} fas icon="sign-out-alt" /><br />Exit</button>
          </span>

          </div> 

          <hr style={{ marginTop: "0px", marginBottom: "25px" }} />

          {icon.type?.match(/image.*/) && (
              <>
                {/* <hr style={{ marginTop: "-20px", marginBottom: "15px" }} /> */}
                <div className="w-[100%] -mt-5 flex justify-center mb-4 bg-slate-100 p-1 rounded border-2 border-cyan-500 border-dashed ">
                  <img className="h-28" src={URL.createObjectURL(icon)} />
                </div>
                <hr  style={{ marginBottom: "25px", marginTop: "-20px" }} />
              </>
           )}
           
          <div className="flex w-[100%] -mt-3">
            <label className="w-[30%] whitespace-nowrap capitalize text-sm font-semibold text-gray-400">
              Parent Menu
            </label>
            <select
              id="parent_menu_id"
              onChange={() => {
                setShowForm(true);
              }}
              className=" w-[70%] border text-sm border-gray-400 focus:border-blue-400  focus:outline-none rounded-sm px-2 py-0.5"
            >
                <option selected value="">{`[ Select Parent Menu ]`}</option>
              {response.map((i) => (
                <option key={i.menu_name} value={i.menu_id}>
                  {i.menu_name}
                </option>
              ))}
            </select>
          </div>
        
        
        <form
          className={`${showForm ? "block" : "block"}`}
        >
          {arr1}

          {/* <hr />

          <div className="flex justify-end -mb-7">
            <button
              type="button"
              id="saveBTN"
               onClick={handleSubmit}
              style={{ background: `url(` + window.location.origin + `/assets/images/headerBackground/` + bgColor + `)` }}
              className="text-white text-sm font-medium rounded-sm px-3 py-2"
            >
              Add Menu Icon
            </button>
          </div> */}
        </form>
      </div>


       {/* <div key={i[0]} className="float-right mt-2 -mb-1 pr-3 pl-3 w-[100%]">
        <hr />
        <div key={i[0]} className="float-right -mt-1 mb-1">
        <button
          type="button"
          onClick={()=> document.getElementById("minimizeModal").click() }
          style={{ paddingLeft: "20px", paddingRight: "20px", color: "white" }}
          className="bg-gray-400 text-white text-sm font-medium rounded-sm px-3 py-2"
        >
          Minimize Modal
        </button>

        &nbsp;&nbsp;&nbsp;&nbsp;

        <button
            type="button"
            onClick={()=> document.getElementById("closeModalBTN").click() }
            className="bg-red-500 text-white text-sm font-medium rounded-sm px-3 py-2"
        >
          Close Modal
        </button>
        </div>
      </div> */}
    </>
  );
}
