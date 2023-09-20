import React from "react";
import axios from "axios";
import { userdata } from "../../data";

function MyPage() {
  //회원탈퇴
  const handleDeleteProfile = (e) => {
    e.preventDefault();
    if (window.confirm("정말로 탈퇴하시겠습니까?ㅜ ")) {
      axios
        .delete(" http://43.200.8.152:8000/del/")
        .then(function (response) {
          // handle success
          console.log("회원정보 삭제 성공");
        })
        .catch(function (error) {
          // handle error
          console.log("실패");
        });
    }
  };

  return (
    <div>
      <h3>마이페이지</h3>
      <span>이름</span>
      <span>
        {userdata.map((data) => (
          <span>{data.name}</span>
        ))}
      </span>
      <br />
      <span>이메일</span>
      <span>
        {userdata.map((data) => (
          <span>{data.id}</span>
        ))}
      </span>
      <br />
      <button onClick={handleDeleteProfile}>회원탈퇴</button>
    </div>
  );
}
export default MyPage;
