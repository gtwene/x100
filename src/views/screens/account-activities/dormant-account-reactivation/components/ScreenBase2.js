import React, { useState, useEffect } from "react";
import HeaderComponent from "./HeaderComponent";
import Cards from "../../account-blockage/components/cards/Cards"

function ScreenBase2({
   header_title, header_icon,
    card_div1a, card_div2a , card_div3a, card_title}) {
  return (
    <div>
      <div className="cash__deposit" style={{}}>
        <HeaderComponent icon={header_icon} title={header_title} />
        <div
          style={{
        
          }}
        >
          <Cards
            height="auto"
            width="auto"
            //left side
            div1={
              <div
                style={{ display: "grid", placeItems: "center", width: "100%" }}
              >
                <div
                  style={{
                    display: "grid",
                    placeItems: "center",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    width: "100%",
                    marginTop: "20px",
                  }}
                >
                  <div style={{ width: "100%", display:"flex" }}>
                    <div style={{flex:"70%",  }}>
                        <div style={{width:"100%", display:"grid"}}>

                    {card_div1a}

                    </div>
                    </div>


                    <div style={{flex:"30%", boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px", borderRadius:"5px"}}>
                        <div style={{}}>
                            <HeaderComponent
                             borderTopLeftRadius={"5px"}
                             borderTopRightRadius= {"5px"}
                            
                            title={card_title}
                            
                            />
                            <div style={{}}>
                            {card_div2a}
                            </div>

                        </div>

                  
                    </div>
                  </div>

                  




                </div>
                {/* <div style={{width:"20%",marginLeft:"1%"}}>
                    <ButtonComponent
                      label={"Sig. Ver"}
                      buttonColor={"white"}
                      buttonBackgroundColor="rgb(21 163 183)"
                      onClick={handleClick2}
                    />
                   {diiiv && <div style={{zIndex:'3',position:'absolute',backgroundColor:'blue'}}><ul><li>ddd</li><li>ddd</li><li>ddd</li></ul></div>}
                  </div>
                  <div style={{width:"20%",marginLeft:"1%"}}>
                    <ButtonComponent
                      label={"Sig. Ver"}
                      buttonColor={"white"}
                      buttonBackgroundColor="rgb(21 163 183)"
                      onClick={handleClick2}
                    />
                   {diiiv && <div style={{zIndex:'3',position:'absolute',backgroundColor:'blue'}}><ul><li>ddd</li><li>ddd</li><li>ddd</li></ul></div>}
                  </div> */}
              </div>
            }
          />
        </div>

        <Cards
          // height="auto"
          // width="auto"

          //left side
          div2={
            <div
              style={{ display: "grid", placeItems: "center", width: "100%" }}
            >
              <div style={{ width: "100%" }}>{card_div3a}</div>
            </div>
          }
        />
      </div>
    </div>
  );
}

export default ScreenBase2;
