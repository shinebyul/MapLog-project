import {create} from 'zustand';

export const LoginStore = create((set)=>({
    isLogin : false, //false
    LoginMail : '',
    login:()=>set({isLogin:true}),
    logout:()=>set({isLogin:false}),
}));