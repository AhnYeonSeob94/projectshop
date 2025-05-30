import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

//1. 전체상품페이지(메인), 로그인, 상품상세페이지(디테일)
//1-1. 네비게이션 바 만들기
//2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다
//4. 상품디테일을 눌렀으나, 로그인이 안되어있을경우에는 로그인페이지로 리다이렉트
//5. 로그인이 되어있는 경우 상품 디테일페이지를 볼 수 있다.
//6. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
//6. 로그아웃이 되면, 상품디테일페이지에서 로그인페이지로 리다이렉트된다.
//7. 로그인하면 로그아웃버튼이보이고, 로그아웃하면 로그인버튼이 보인다.
//8. 상품을 검색할 수 있다.

function App() {
  const [authenticate, setAuthenticate] = useState(false); //true면 로그인됨 false면 로그인안됨
  useEffect(()=>{
    console.log("Auth",authenticate);
  },[authenticate])
  return (
    <div >
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>} />
        <Route path="/products/:id" element={<PrivateRoute authenticate={authenticate}/>} />       
      </Routes>
    </div>
  );
}

export default App;
