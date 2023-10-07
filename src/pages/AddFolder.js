import React, { useState } from "react";
import axios from "axios";
import { Link  } from "react-router-dom";

function AddFolder(){

    const[folderName,setFolderName]=useState("");

    const createFolder = async(e)=>{
        e.preventDefault(); 
        try{
            await axios.post("http://localhost:8000/folders/create", 
            {title : folderName});
            setFolderName("");
            console.log('success');
        }catch(error){
            console.error('error create folder',error);
            alert('fail');
        }
    }

    return(
        <div>
            <form>
                <input
                type="text"
                placeholder="폴더 이름을 입력해주세요"
                value={folderName}
                onChange={(e)=>setFolderName(e.target.value)}/>
                <button onClick={createFolder}>폴더 생성</button>
            </form>
            <Link to="/">홈으로</Link>
        </div>
    );
}

export default AddFolder;