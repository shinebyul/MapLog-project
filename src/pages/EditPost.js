import React from "react";
import { useLocation } from "react-router-dom";
import "../css/prac.css";
import { useState } from "react";
import axios from "axios";
import Dropzone from "react-dropzone";
import { Link } from "react-router-dom";

function EditPost(){
    const location =useLocation();
    const {postDetail}=location.state;

    const [title, setTitle] = useState(postDetail.title);
    const [content, setContent] = useState(postDetail.content);
    const [id,setId]=useState(postDetail.id);
    //이미지
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(`http://localhost:8000${postDetail.image_url}`); // 이미지 미리보기 URL


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
            title: title,
            content: content,
        };

        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        if (selectedFile) {
        formData.append("image", selectedFile); // 서버로 파일 업로드
        }

        try {
        const response = await axios.post(`http://localhost:8000/postupdate/${id}`, formData, {
            headers: {
            "Content-Type": "multipart/form-data",
            },
        });

        // 성공적으로 데이터를 보낸 경우
        alert("성공");
        console.log("성공적으로 데이터를 보냈습니다.");

        // 이후 필요한 작업을 수행하실 수 있습니다.
        } catch (error) {
        // 요청이 실패한 경우
        alert("fail");
        console.error("데이터를 보내는 중 오류가 발생했습니다:", error);
        }
    };


    return (
        <div className="postform">
        <h1>Post Create</h1>
        <form onSubmit={handleSubmit}>
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
        <Link to="/">홈으로</Link>
        </div>
    );
}

export default EditPost;
