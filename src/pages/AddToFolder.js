import { Check, CheckBox } from "@mui/icons-material";
import React from "react";
import { newfolderdata } from "../data";
import { updateFolderData } from "../data";
import { folderdata } from "../data";
import { placeStore } from "../zustand/PlaceStore";
import { useNavigate } from "react-router-dom";



function AddToFolder(){
    const {folderlist}=placeStore();
    const navigate=useNavigate();
    function handleFolderClick(){
        placeStore.setState({folderlist:newfolderdata});
        navigate("/");
    }

    return(
        <div style={{textAlign:'center'}}>
            <p>폴더를 선택해주세요</p>
            <div style={{marginLeft:'47%'}}>
                {folderdata.map((data)=>(
                    <button 
                        style={{display:'block'}}
                        onClick={() => handleFolderClick(data.id)}
                        >{data.name}</button>
                ))} 
            </div>
        </div>
    );

}


export default AddToFolder;