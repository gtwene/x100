import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { browserName, CustomView } from 'react-device-detect';

const DragNDrop = ({ boxColor, boxNumber, boxIcon, handleDrag, handleDrop }) => {

    const { t } = useTranslation();

    async function handleImageError(ev) {
    ev.target.src = '/assets/menu-icons/no-image.png'
    }

    if(browserName === "Firefox"){

        return (
        
            <div>
                <div
                    draggable={true}
                    id={boxNumber}
                    // onDragOver={(ev) => ev.preventDefault()}
                    onDragStart={handleDrag}
                    onDrop={handleDrop}
                    // backgroundImage={boxColor}
                    className='font-semibold rounded-sm pull-center float-center ring-grey-200 p-20 hover:bg-gray-50 
                    transition ease-in-out delay-150 bg-color(srgb 0.855 0.855 0.855) shadow-2xl hover:-translate-y-1 hover:scale-90 duration-300'
                    style={{
                        backgroundColor: boxColor,
                        borderColor: 'blue',
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "5px",
                        margin: "auto",
                        color: '#FFF',
                        padding: "20px",
                        width: '115px',
                        height: '105px'
                    }}
                >
                    <img src={boxColor} onError={(ev) => handleImageError(ev)} alt="" style={{ width: "70px", height: "auto" }} />
                </div>
                <b style={{ color: 'black', fontSize: "12px", fontWeight: "bolder", overflow: 'hidden', display: 'inline-block', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width:"110px", marginTop: "11px",marginBottom: "-10px", textAlign: "center" }}>{(boxNumber)}</b>
            </div>
        );
    

    } else {

    return (
    
        <div>
            <div
                draggable={true}
                id={boxNumber}
                onDragOver={(ev) => ev.preventDefault()}
                onDragStart={handleDrag}
                onDrop={handleDrop}
                // backgroundImage={boxColor}
                className='font-semibold rounded-sm pull-center float-center ring-grey-200 p-20 hover:bg-gray-50 
                transition ease-in-out delay-150 bg-color(srgb 0.855 0.855 0.855) shadow-2xl hover:-translate-y-1 hover:scale-90 duration-300'
                style={{
                    backgroundColor: boxColor,
                    borderColor: 'blue',
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "auto",
                    color: '#FFF',
                    padding: "20px",
                    borderRadius: "5px",
                    width: '115px',
                    height: '105px'
                }}
            >
                <img src={boxColor} onError={(ev) => handleImageError(ev)} alt="" style={{ width: "70px", height: "auto" }} />
            </div>
            <b style={{ color: 'black', fontSize: "12px", fontWeight: "bolder", overflow: 'hidden', display: 'inline-block', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width:"110px", marginTop: "11px",marginBottom: "-10px", textAlign: "center" }}>{(boxNumber)}</b>
        </div>
    );

  }
};

export default DragNDrop;