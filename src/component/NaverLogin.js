import React from "react";

function NaverLogin() {
  const handleNaverLogin = () => {
    // 네이버 로그인 페이지로 이동하는 코드를 작성
    window.location.href =
      "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=D0F08xuNTZ1fLXCzYW9N&redirect_uri=http://43.200.8.152:3000/main.js&state=YOUR_STATE";
  };

  return (
    <div>
      <button onClick={handleNaverLogin}>네이버 로그인</button>
    </div>
  );
}

export default NaverLogin;
