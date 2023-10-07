import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/signup.css";
import "../css/Map.css";

const SignUp = (props) => {
  //4ㅜ2
  //이름, 이메일, 비밀번호, 비밀번호 확인
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");

  //유효성 검사
  const [isName, setisName] = useState(false);
  const [isEmail, setisEmail] = useState(false);
  const [isPassword, setisPassword] = useState(false);
  const [isPwCfm, setisPwCfm] = useState(false);

  //오류메세지
  const [nameMsg, setNameMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");
  const [pwcfmMsg, setpwcfmMsg] = useState("");

  //이름
  const handleinputname = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 2) {
      setNameMsg("2글자 이상으로 입력해주세요");
      setisName(false);
    } else {
      setNameMsg("");
      setisName(true);
    }
  };

  //이메일
  const handleinputid = (e) => {
    setId(e.target.value);
    if (
      e.target.value.length >= 2 &&
      e.target.value.includes("@") &&
      e.target.value.includes(".")
    ) {
      setEmailMsg("");
      setisEmail(true);
    } else {
      setEmailMsg("올바른 이메일 형식이 아닙니다");
      setisEmail(false);
    }
  };

  //비밀번호
  const handleinputpw = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordMsg("8자 이상으로 입력해주세요");
      setisPassword(false);
    } else {
      setPasswordMsg("");
      setisPassword(true);
    }
  };

  //비밀번호 확인
  const handleinputpwcfm = (e) => {
    setPwConfirm(e.target.value);
    if (password === e.target.value) {
      setpwcfmMsg("");
      setisPwCfm(true);
    } else {
      setpwcfmMsg("비밀번호가 틀립니다.");
      setisPwCfm(false);
    }
  };

  const isactive = isName && isEmail && isPassword && isPwCfm;

  const handleButtomValid = () => {
    if (!isactive) {
      alert("올바른 형식이 아닙니다.");
    } else {
      gotosignup();
    }
  };

  const navigate = useNavigate();

  const gotosignup = () => {
    console.log("name:", name);
    console.log("id:", id);
    console.log("pw:", password);
    console.log("pwcfm:", pwConfirm);

    axios
      .post(
        "http://localhost:8000/register/",
        {
          username: name,
          useremail: id,
          password: password,
          re_password: pwConfirm,
        }
      )
      .then((result) => {
        console.log(result.data);
        alert("회원가입 성공");
        navigate("/Login");
      })
      .catch();
  };

  return (
    <div className="signupbody">
      <div className="form">
        <div>회원가입</div>

        <input
          type="text"
          id="name"
          placeholder="이름을 입력해주세요"
          required
          value={name}
          onChange={handleinputname}
        />
        <span className={isName ? "" : "invalid"}>{nameMsg}</span>

        <input
          type="email"
          id="id"
          placeholder="이메일를 입력해주세요"
          required
          value={id}
          onChange={handleinputid}
        />
        <span className={isEmail ? "" : "invalid"}>{emailMsg}</span>

        <input
          id="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          required
          value={password}
          onChange={handleinputpw}
        />
        <span className={isPassword ? "valid" : "invalid"}>{passwordMsg}</span>

        <input
          id="confirmpw"
          type="password"
          placeholder="비밀번호 확인"
          required
          value={pwConfirm}
          onChange={handleinputpwcfm}
        />
        <span className={isPwCfm ? "" : "invalid"}>{pwcfmMsg}</span>

        <button
          className={isactive ? "validbutton" : "invalidbutton"}
          onClick={handleButtomValid}
        >
          회원가입
        </button>
        <div className="sociallogin">
          <div>naver로 회원가입</div>
          <div>kakao로 회원가입</div>
        </div>
      </div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <button>홈으로</button>
      </Link>
    </div>
  );
};
export default SignUp;

/*
<label for="name">이름</label>
<label for="id">아이디</label>
<label for='password'>비밀번호</label>
<label for='confirmpw'>비밀번호 확인</label>
*/
