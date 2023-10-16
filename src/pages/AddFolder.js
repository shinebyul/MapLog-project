import React, { useState } from "react";
import axios from "axios";
import { Link  } from "react-router-dom";

// function AddFolder(){

//     const[folderName,setFolderName]=useState("");

//     const createFolder = async(e)=>{
//         e.preventDefault(); 
//         try{
//             await axios.post("http://localhost:8000/folders/create", 
//             {title : folderName});
//             setFolderName("");
//             console.log('success');
//         }catch(error){
//             console.error('error create folder',error);
//             alert('fail');
//         }
//     }

//     return(
//         <div>
//             <form>
//                 <input
//                 type="text"
//                 placeholder="폴더 이름을 입력해주세요"
//                 value={folderName}
//                 onChange={(e)=>setFolderName(e.target.value)}/>
//                 <button onClick={createFolder}>폴더 생성</button>
//             </form>
//             <Link to="/">홈으로</Link>
//         </div>
//     );
// }

// export default AddFolder;


const AddFolder = ({ place, folders, setFolders, userId }) => {
  const [newFolderName, setNewFolderName] = useState('');

  const handleAddPlaceToFolder = async (folder) => {
    try {
      const newPlace = {
        name: place.place_name,
        address: place.road_address_name,
        phone: place.phone,
        longtitude: place.x,
        latitude: place.y,
      };

      const response = await axios.put(`http://localhost:8000/foldersupdate/${folder.id}`, {
        places: [...folder.places, newPlace],
      });

      if (response.status === 200) {
        alert('폴더에 장소를 성공적으로 추가하였습니다.');

        // 폴더 상태 업데이트
        setFolders((prevFolders) => prevFolders.map((f) => (f.id === folder.id ? response.data : f)));
      }
    } catch (error) {
      console.error(error);
      alert('저장 중 오류가 발생했습니다.');
    }
  };

  const handleCreateNewFolder = async () => {
    try {
    //   const newPlace = {
    //     // longtitude: place.x,
    //     // latitude: place.y,
    //     name: place.place_name,
    //     address: place.address_name,
    //     phone: place.phone,
    //   };

      const response = await axios.post(
        'http://localhost:8000/folders/',
        {
          title: newFolderName,
          //places: [newPlace],
          //user_id: userId,
        },
        { withCredentials: true }
      );
      console.log(userId);

      if (response.status === 201) {
        alert('새로운 폴더가 성공적으로 생성되었습니다.');
        setFolders((prevFolders) => [...prevFolders, response.data]);
        setNewFolderName('');
      }
    } catch (error) {
      console.error(error);
      alert('폴더 생성 중 오류가 발생했습니다.');
    }
  };

  const[folderList,setFolderList]=useState([]);
  const folderlist = async()=>{
    try{
        setFolderList(await axios.get('http://localhost:8000/folders'));
    }catch{}
  }

  return (
    <div>
      {folders &&
        folders.map((folder) => (
          <button key={folder.id} onClick={() => handleAddPlaceToFolder(folder)}>
            {folder.title}
          </button>
        ))}

      <div>
        <input type="text" value={newFolderName} onChange={(e) => setNewFolderName(e.target.value)} />
        <button onClick={handleCreateNewFolder}>새 폴더 생성</button>
      </div>
      <button onClick={folderlist}>폴더목록</button>
      {folderList&&folderList.map((list)=>(
        <h3 key={list.id}>{list.title}</h3>
      ))}
    </div>
  );
};

export default AddFolder;