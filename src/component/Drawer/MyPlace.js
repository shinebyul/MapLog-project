import React, { useState } from "react";
import { folderdata } from "../../data";


function MyPlace(){

    const[folder,setFolder]=useState(null);
    const[folderClick,setFolderClick]=useState(true); //true(선택안함-폴더목록) false(선택-선택된 폴더의 장소 목록)

    function FolderClick(data){
        setFolder(data);
        console.log(folder);
        setFolderClick(!folderClick);
    }

    return(
        <>
        {folderClick?
        (
            <div>
                <button>+폴더추가</button>
                {folderdata.map((data)=>(<button onClick={()=>FolderClick(data)}>{data.name}</button>))}
            </div>
        ):(
            <div> 
                {folder && folder.location.map((loc) => 
                <div key={loc}><button>{loc}</button></div>)}
                <button onClick={()=>setFolderClick(!folderClick)}>목록으로</button>
            </div>
        )}
        </>
    );
}

export default MyPlace;


/*


onClick={()=>folderClick(data)}*/