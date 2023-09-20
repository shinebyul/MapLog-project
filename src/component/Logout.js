// import axios from "axios";
// import { LoginStore } from "../zustand/LoginStore";
// import { useNavigate } from "react-router-dom";

// const Logout = (props) => {
//   const navigate = useNavigate();

//   if (window.confirm("로그아웃 하시겠습니까?")) {
//     axios
//       .get(" http://3.39.142.157:8000/logout/")
//       .then((result) => {
//         LoginStore.setState({ isLogin: false });
//         alert("로그아웃 성공");
//         navigate("/");
//       })
//       .catch((result) => {
//         alert("로그인 되어있지 않음");
//         navigate("/");
//       });
//   }
//   return <></>;
// };

// export default Logout;
