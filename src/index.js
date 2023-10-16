import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LoginStore } from './zustand/LoginStore';

//별 추가 - 로그인 상태 유지 - 초기상태를 로컬스토리지에서 복원하는 과정. 
const initialIsLogin = localStorage.getItem('isLogin')==='true';
LoginStore.setState({isLogin: initialIsLogin});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

