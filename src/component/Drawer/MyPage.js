import React from "react";
import axios from "axios";
import { userdata } from "../../data";
import { LoginStore } from "../../zustand/LoginStore";

function MyPage() {
  //회원탈퇴
  const handleDeleteProfile = (e) => {
    e.preventDefault();
    if (window.confirm("정말로 탈퇴하시겠습니까?ㅜ ")) {
      axios
        .delete(" http://3.39.142.157:8000/del/")
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

  const {LoginMail, LoginName} = LoginStore();

  return (
    <div style={{width:'500px',height:'100vh',marginTop:'-15px' , backgroundColor:'#FCF7EC'}}>
      <h3>마이페이지</h3>
      <span>이름</span>
      <span>
        {LoginName}
      </span>
      <br />
      <span>이메일</span>
      <span>
        {LoginMail}
      </span>
      <br />
      <button onClick={handleDeleteProfile}>회원탈퇴</button>
    </div>
  );
}
export default MyPage;
