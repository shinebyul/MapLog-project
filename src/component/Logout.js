import axios from "axios";
import { LoginStore } from "../zustand/LoginStore";
import { useNavigate } from "react-router-dom";

function Logout(){

    function logout(){
        if(window.confirm('로그아웃 하시겠습니까?')){
            axios.get(' http://43.200.8.152:8000/logout/')
            .then((result)=>{
                LoginStore.setState({isLogin:false});
                alert('로그아웃 성공');
                
            })
            .catch();
        }
    }

    logout();
    const navigate=useNavigate();
    navigate('/');
    return(
      <></>  
    );
    
};

export default Logout;