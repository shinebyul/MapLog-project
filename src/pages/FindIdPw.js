import React from "react";
import { useState } from "react";
import axios from "axios";
import { result } from "lodash";

function FindIdPw(){

    const[name,setName]=useState('');
    const[id,setId]=useState('');
    const[findedId,setFindedId]=useState('');

    const FindId=()=>{
        axios.post('http://localhost:8000',{
            username:name
        })
        .then((result)=>{
            setFindedId()
        })
    }

    return(
        <div>
            <h3>아이디찾기</h3>
            <input onChange={(e)=>setName(e.target.value)} placeholder="이름 입력"/>
            <h3>비밀번호 찾기</h3>
            <input onChange={(e)=>setId(e.target.value)} placeholder="아이디 입력"/>
        </div>
    );
}

export default FindIdPw;