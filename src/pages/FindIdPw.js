import React from "react";
import { useState } from "react";
import axios from "axios";
import { result } from "lodash";

function FindIdPw(){

    const[name,setName]=useState('');
    const[id,setId]=useState('');
    const[findedId,setFindedId]=useState('');
    const[findedPw, setFindedPw]=useState('');

    async function FindId() {
        try {
          const response = await axios.post('http://localhost:8000/findid/',{
            username:name,
          });
          console.log(response);
          setFindedId(response);
        } catch (error) {
          console.error(error);
        }
      }

      async function FindPw() {
        try {
          const response = await axios.post('http://localhost:8000/findpw/',{
            usermail:id,
          });
          console.log(response);
          setFindedPw(response);
        } catch (error) {
          console.error(error);
        }
      }

    return(
        <div>
            <h3>아이디찾기</h3>
            <input onChange={(e)=>setName(e.target.value)} placeholder="이름 입력"/>
            <button onClick={FindId}>확인</button>
            <h3>비밀번호 찾기</h3>
            <input onChange={(e)=>setId(e.target.value)} placeholder="아이디 입력"/>
            <button onClick={FindPw}>확인</button>
        </div>
    );
}

export default FindIdPw;