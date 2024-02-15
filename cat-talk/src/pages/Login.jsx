import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Login.css';
import LoginForm from '../components/login/LoginForm';
const Login = () => {
    return (
        <div className='login-container'>
            <div className='login-logo'></div>
            <LoginForm />
            <div className="a-box">
                <a href="#"><p>아이디찾기</p></a><hr />
                <a href="#"><p>비밀번호찾기</p></a><hr />
                <a href="#"><p>회원가입</p></a>
            </div>

            <div className="loginBtn">
            <p className="sso-p">소셜 계정 로그인</p>
            <ul className="login-logo-ul">
                <li className="login-logo-li naver"><a href="#"></a></li>
                <li className="login-logo-li google"><a href="#"></a></li>
                <li className="login-logo-li kakao"><a href="#"></a></li>
                </ul>
            </div>
        </div>
    );
}

export default Login;