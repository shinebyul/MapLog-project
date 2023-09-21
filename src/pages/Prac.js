import { uniqBy } from "lodash";
import { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../css/prac.css";

function Prac() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  //이미지
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null); // 이미지 미리보기 URL

  const apiUrl = "http://3.39.142.157:8000/postcreate/"; // 실제 API의 URL로 변경해야 합니다.

  //이미지
  const handleFileChange = (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setSelectedFile(file);

      // 이미지 미리보기 URL 생성
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    }
  };
  //

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      author: author,
      title: title,
      content: content,
    };

    const formData = new FormData();
    formData.append("author", author);
    formData.append("title", title);
    formData.append("content", content);
    if (selectedFile) {
      formData.append("image", selectedFile); // 서버로 파일 업로드
    }

    try {
      const response = await axios.post(apiUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // 성공적으로 데이터를 보낸 경우
      alert("성공");
      console.log("성공적으로 데이터를 보냈습니다.");
      console.log("응답 데이터:", response.data);

      // 이후 필요한 작업을 수행하실 수 있습니다.
    } catch (error) {
      // 요청이 실패한 경우
      alert("fail");
      console.error("데이터를 보내는 중 오류가 발생했습니다:", error);
    }
  };

  const [data, setData] = useState();

  const onClick = async () => {
    try {
      const response = await axios.get("http://3.39.142.157:8000/postlist/", {
        withCredentials: true,
      });
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  // const handleFetchData = async () => {
  //   try {
  //     const response = await axios.get(apiUrl2);
  //     const data = response.data;
  //     console.log('ok1');

  //     // 데이터에서 title 값만 추출하여 배열에 저장
  //     const titles = data.map((item) => item.title);
  //     console.log('ok2');

  //     setTitleList(titles);
  //     console.log('ok3');
  //   } catch (error) {
  //     console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
  //   }
  // };

  return (
    <div className="postform">
      <h1>Post Create</h1>
      <form onSubmit={handleSubmit}>
        {/* <div style={{marginBottom:'20px'}}>
          <label>author:</label>
          <input
            style={{marginLeft:'20px'}}
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div> */}
        <div>
          <label>title :</label>
          <input
            style={{marginBottom:'20px', marginLeft:'20px'}}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div style={{display :'flex', marginLeft:'37%'}}>
          <label>content :</label>
          <textarea
            style={{marginLeft:'20px', marginBottom:'20px', width:'300px', height:'200px'}}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <label>사진 업로드 :</label>
          <Dropzone onDrop={handleFileChange}>
            {({ getRootProps, getInputProps }) => (
              <div
                {...getRootProps()}
                className="dropzone"
                style={{
                  border: "2px dashed #ccc",
                  borderRadius: "4px",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <input {...getInputProps()} />
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="미리보기"
                    style={{ maxWidth: "100%", maxHeight: "200px" }}
                  />
                ) : (
                  <p>사진을 업로드하려면 파일을 끌어다 놓거나 클릭하세요.</p>
                )}
              </div>
            )}
          </Dropzone>
        </div>
        <button type="submit">저장</button>
      </form>
      {/* <div>
        <button onClick={onClick}>불러오기</button>
        {data && (
          <textarea
            rows={7}
            value={JSON.stringify(data, null, 2)}
            readOnly={true}
          />
        )}
      </div> */}
      {/* {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )} */}
      <Link to="/">홈으로</Link>
    </div>
  );
}

export default Prac;

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemText from '@mui/material/ListItemText';
// import Avatar from '@mui/material/Avatar';
// import Grid from '@mui/material/Grid';
// import FolderIcon from '@mui/icons-material/Folder';
// import LongMenu from '../component/More';

// import { folderdata } from '../data';

// export default function InteractiveList() {

//   function generate(element) {
//     return [0, 1, 2].map((value) =>
//       React.cloneElement(element, {
//         key: value,
//       }),
//     );
//   }

//   const Demo = styled('div')(({ theme }) => ({
//     backgroundColor: theme.palette.background.paper,
//   }));

//   return (
//     <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={6}>
//           <Demo>
//             <List dense={false}>
//               {generate(
//                 <ListItem
//                   secondaryAction={
//                     <LongMenu/>
//                   }
//                 >
//                   <ListItemAvatar>
//                     <Avatar>
//                       <FolderIcon />
//                     </Avatar>
//                   </ListItemAvatar>
//                   <ListItemText
//                     onClick={()=>alert('hi')}
//                     primary="Single-line item"
//                   />
//                 </ListItem>
//               )}
//             </List>
//           </Demo>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

//1b29c3da7f864557bdbe17354b06c965
// import { useState, useEffect } from "react";
// import { newsData } from "../component/Api/NewsData";

// function Prac(){
//   const[Data,setData]=useState([]);
//   useEffect(()=>{
//     async function fetchData(){
//         const data=await Data();
//         setData(data);
//     }
//     fetchData();
//   },[]);
//   return(
//     <div>
//       {Data && <textarea row={7} value={JSON.stringify(Data, null, 2)} readOnly={true} />}
//     </div>
//   );
// }

// export default Prac;import React, {useState } from 'react';
