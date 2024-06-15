// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  useGoogleLogin,
} from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import loginForm from "../pages/loginForm";
import axios from "axios";
const login = () => {
  return (
    <div>
      <loginForm />
    </div>
  );
};

//////////////////////////////////////////////////////
// src/components/LoginForm.jsx
import { useState } from "react";
// import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remind, setRemind] = useState("");
  //const [pwdRemind, setPwdRemind] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    let url = `/LogIn/pwdcheck?email=${email}&password=${password}`;
    try {
      let response = await fetch(url);
      let data = await response.json();

      if (data === "True" || data === true) {
        setRemind("");
        alert("登入成功");
        window.location.href = "/Home";
      } else {
        setRemind("*帳號/密碼輸入錯誤");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="main-container">
      <div>
        <img src="/images/logofrmmain.png" alt="logo" className="logo" />
      </div>
      <div className="a1">
        <div style={{ textAlign: "center" }}>
          <h3>登入 / 註冊</h3>
          <span style={{ fontSize: "15px" }}>
            註冊Lookday帳戶，享會員禮遇標籤商品專屬優惠價!
          </span>
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          <input
            type="email"
            id="email"
            placeholder="請輸入電子信箱"
            className="input-field"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="reminder" id="reminder">
          {remind}
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          <input
            type="password"
            id="pwd"
            placeholder="請輸入密碼"
            className="input-field"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="reminder" id="pwdreminder">
          {/* {pwdRemind} */}
        </div>
        <div style={{ textAlign: "center" }}>
          <label className="noaccount">還沒有帳號嗎? </label>
          <a className="noaccount" href="/register">
            點我註冊
          </a>
          <br />
          <br />
        </div>
        <div>
          <button id="loginbtn" className="login-button" onClick={handleLogin}>
            登入
          </button>
          <br />
        </div>
        <div style={{ textAlign: "center" }}>
          <span style={{ fontSize: "15px", color: "gainsboro" }}>
            ———————————或快速登入———————————
          </span>
          <br />
          <br />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ marginRight: "20px" }}>
            <img src="/images/googlelogo.svg" alt="Google" />
          </div>
          <div style={{ marginRight: "20px" }}>
            <img src="/images/fblogo.svg" alt="Facebook" />
          </div>
          <div>
            <img src="/images/applelogo.svg" alt="Apple" />
          </div>
        </div>
        <div id="btn-container">
          <button
            id="customerbtn"
            className="link-button"
            onClick={() => {
              setEmail("qq321@gmail.com");
              setPassword("2234");
            }}
          >
            顧客
          </button>
          <button
            id="empbtn"
            className="link-button"
            onClick={() => {
              setEmail("staff123@gmail.com");
              setPassword("8888");
            }}
          >
            員工
          </button>
        </div>
        <div>
          <p style={{ fontSize: "13px", marginLeft: "30px" }}>
            註冊或登入即表示你了解並同意Lookday
            <a
              href="https://www.klook.com/zh-TW/conditions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              服務條款
            </a>
            與
            <a
              href="https://www.klook.com/zh-TW/policy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              隱私權條款
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
const LoginForm2 = () => {
  const [user, setUser] = React.useState({});

  const _useGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: "Bearer <tokenResponse.access_token>" } }
      );

      console.log(userInfo);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  console.log("user", user);
  return (
    <div className="container" id="container">
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <i className="fa-brands fa-google"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-threads"></i>
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="button">Sign-up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icon" onClick={_useGoogleLogin}>
              <i className="fa-brands fa-google"></i>
            </a>

            <a href="#" className="icon">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-threads"></i>
            </a>
          </div>
          <span>or use your email password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forget Your Password?</a>
          <button type="button">Sign-In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className="hidden" id="login">
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>
              Register with your personal details to use all of site features
            </p>
            <button className="hidden" id="register">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
//export default LoginForm;

///////////////////////////////////////////////////////////////////

// eslint-disable-next-line no-unused-vars
function Login(props) {
  const [user, setUser] = React.useState({});

  return (
    <div>
      <LoginForm />
      <hr />
      <LoginForm2 />
      <div>Login</div>
      {Object.keys(user).length === 0 ? (
        //尚未登入
        <GoogleOAuthProvider clientId="191234775662-mda3goonrsk2g68bu3dknkpkgrh34431.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              setUser(jwtDecode(credentialResponse.credential));
              // console.log("jwtDecode(credentialResponse.credential)",jwtDecode(credentialResponse.credential))
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            cookiePolicy={"single_host_origin"}
            type="icon"
            shape="circle"
            //useOneTap
            // auto_select
            // context="signup "
          />
        </GoogleOAuthProvider>
      ) : (
        //登入成功 要登出
        <div>
          <img src={user?.picture} />
          <h4>{user?.name}</h4>
          <button onClick={() => setUser({})} className="newsletter-button">
            登出
          </button>
        </div>
      )}
    </div>
  );
}

Login.propTypes = {};

export default Login;
