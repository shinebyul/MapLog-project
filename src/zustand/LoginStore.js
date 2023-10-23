import {create} from 'zustand';

export const LoginStore = create((set)=>({
    isLogin : false, //false
    LoginMail : '',
    LoginName : '',
    login:(mail, name)=>set({isLogin:true, LoginMail : mail, LoginName : name}),
    logout:()=>set({isLogin:false}),
}));