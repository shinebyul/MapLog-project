import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginStore } from "../zustand/LoginStore"; //별추가-로그인상태 넘기기기

axios.defaults.withCredentials = true;

const Login = (props) => {
  const { isLogin , login, LoginMail, LoginName} = LoginStore(); //별추가-로그인상태 넘기기

  const Rest_api_key = "c684aed1126dd79ff99c6f8e0964d4fa"; //REST API KEY
  const redirect_uri = "http://3.39.142.157:8000/kakao/"; //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  // Show input error message
  function showError(message) {
    console.error(message);
  }

  // Show success outline
  function showSuccess() {
    console.log("Success");
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (id === "" || password === "") {
      showError("empty");
    } else {
      showSuccess();
      gotoLogin();
    }
  };

  const navigate = useNavigate();

  const gotoLogin = () => {
    axios
      .post(
        "http://localhost:8000/login/",
        {
          useremail: id,
          password: password,
        },
        {
          withCredentials: true,
        }
      )
      .then((result) => {
        console.log(result.data);
        //LoginStore.setState({ isLogin: true }); //별추가-로그인상태 설정
        login(id, "");
        localStorage.setItem('isLogin','true'); //별 추 - 로그인 상태 유지 개선 localStorage사용
        alert("로그인 성공");
        navigate("/");
      })
      .catch((error) => {
        console.error("로그인 중 오류가 발생했습니다:", error);
      });
  };

  return (
    <div>
      <Link to="/SignUp" style={{ textDecoration: "none" }}>
        <button>회원가입</button>
      </Link>
      <button onClick={handleLogin}>카카오 로그인</button>

      <div className="container">
        <form onSubmit={handleSubmit} className="form">
          <h2>Register With Us</h2>
          <div className="form-control">
            <label htmlFor="id">id</label>
            <input
              type="text"
              id="id"
              placeholder="Enter id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <small>Error message</small>
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <small>Error message</small>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Link to='/FindIdPw'>아이디/비밀번호 찾기</Link>
    </div>
  );
};

export default Login;
