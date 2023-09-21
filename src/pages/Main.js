import React from 'react';
import { Link , useNavigate} from 'react-router-dom';
import {useState } from 'react';
import "../css/Map.css";
import MyPlace from '../component/Drawer/MyPlace';
import MyPage from '../component/Drawer/MyPage';
import MyPost from '../component/Drawer/MyPost';
import Map from '../component/KakaoMap/Map'
import MiniBar from '../component/MiniBar';
import { LoginStore } from '../zustand/LoginStore';
import Logout from '../component/Logout';
import SearchPlace from '../component/KakaoMap/SearchPlace';

const Main=(props)=>{

    //mainbar button click
    const[mypost, setMypost]=useState(false);
    const[myplace, setMyplace]=useState(false);
    const[mypage, setMypage]=useState(false);

    //로그인 상태
    const {isLogin} = LoginStore();
    
    const navigate = useNavigate();

    function NotLogin(){
        if(window.confirm('로그인이 필요합니다. 로그인 페이지로 이동하시겠습니까?')){
            navigate('/Login');
        }
    }


    function MypostClick(){
        if(isLogin){
            setMypost(!mypost);
            setMyplace(false);
            setMypage(false);
        }
        else{NotLogin();}
    }

    function MyplaceClick(){
        if(isLogin){
            setMyplace(!myplace);
            setMypost(false);
            setMypage(false);
        }
        else{NotLogin();}
    }

    function MypageClick(){
        if(isLogin){
            setMypage(!mypage);
            setMypost(false);
            setMyplace(false);
        }
        else{NotLogin();}
    }

  
    return(
        <div id='home'>
            <div className='mainbar'>
                <Link to="/"><button className='homebtn'>4N</button></Link>
                <Link to="/Prac"><button style={{backgroundColor:'transparent', color:'#AFC2AE'}}>pra</button></Link> 
                <button onClick={()=>MypostClick()} className={mypost?'btnActive':'btnInactive'}>내기록</button>
                <button onClick={()=>MyplaceClick()} className={myplace?'btnActive':'btnInactive'}>내장소</button> 
                <button onClick={()=>MypageClick()} className={mypage?'btnActive':'btnInactive'} style={{marginBottom:'40vh'}}>마이페이지</button>
                {isLogin?
                    <button style={{backgroundColor:'#AFC2AE', color:'white'}} onClick={()=>Logout()}>로그아웃</button>
                    :<Link to="/Login"><button className='loginbtn'>로그인</button></Link>} 
            </div>

            {mypost ? <div><MyPost/></div> : <></>}
            {myplace ? <div><MyPlace/></div> : <></>}
            {mypage ? <div><MyPage/></div> : <></>}

            <div>
                <MiniBar/>
                {/* <input 
                    className='find'
                    type='text'
                    placeholder='어떤 장소를 찾으시나요?'
                ></input>  */}
                {/* <SearchPlace/> */}
                <Map/>
            </div>
        </div>
    );
    
};
export default Main;

