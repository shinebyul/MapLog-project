import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Prac from './pages/Prac';
import AddToFolder from './pages/AddToFolder';
import AddFolder from './pages/AddFolder';
import EditPost from './pages/EditPost';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/SignUp/*" element={<SignUp />}></Route>
            <Route path="/Login/*" element={<Login />}></Route>
            <Route path="/Prac/*" element={<Prac />}></Route>
            <Route path="/AddToFolder/*" element={<AddToFolder />}></Route>
            <Route path="/AddFolder/*" element={<AddFolder />}></Route>
            <Route path="/EditPost/*" element={<EditPost />}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
