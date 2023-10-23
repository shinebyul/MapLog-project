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
  // 이미지
  const [selectedFiles, setSelectedFiles] = useState([]); // 여러 이미지 선택을 위한 배열
  const [previewUrls, setPreviewUrls] = useState([]); // 이미지 미리보기 URL 배열

  const apiUrl = "http://localhost:8000/postcreate/";

  // 이미지
  const handleFileChange = (acceptedFiles) => {
    const files = acceptedFiles.slice(0, 5); // 최대 5장까지 선택 가능하도록 제한

    // 이미지 미리보기 URL 배열 생성
    const fileReaders = files.map((file) => {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const newPreviewUrl = fileReader.result;
        setPreviewUrls((prevUrls) => [...prevUrls, newPreviewUrl]);
      };
      fileReader.readAsDataURL(file);
      return fileReader;
    });

    Promise.all(fileReaders).then((results) => {
      setSelectedFiles(files);
    });
  };

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
    selectedFiles.forEach((file) => {
      formData.append("images", file);
    });

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

  return (
    <div className="postform">
      <h1>Post Create</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>title :</label>
          <input
            style={{ marginBottom: "20px", marginLeft: "20px" }}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div style={{ display: "flex", marginLeft: "37%" }}>
          <label>content :</label>
          <textarea
            style={{
              marginLeft: "20px",
              marginBottom: "20px",
              width: "300px",
              height: "200px",
            }}
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
                {previewUrls.length > 0 ? (
                  <div>
                    {previewUrls.map((url, index) => (
                      <img
                        key={index}
                        src={url}
                        alt={`미리보기 ${index + 1}`}
                        style={{ maxWidth: "100%", maxHeight: "200px" }}
                      />
                    ))}
                  </div> 
                ) : (
                  <p>사진을 업로드하려면 파일을 끌어다 놓거나 클릭하세요. (최대 5장)</p>
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

export default Prac;
