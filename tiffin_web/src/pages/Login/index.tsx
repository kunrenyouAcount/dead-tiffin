import { useRouter } from "next/router";
import styles from "./Login.module.css";
import Axios from "axios";
import { AuthLoginRequest } from "../../models/Request/Auth/AuthLoginRequest";
import { AuthResponse } from "../../models/Response/Auth/AuthResponse";
import { useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { tiffin_token_key } from "../../utils/Cookie";

export const Login: React.FC = () => {
  const [user, setUser] = useState<AuthLoginRequest>();
  const router = useRouter();
  const pushLogin = async () => {
    const response = await Axios.post<AuthResponse>("auth/login", user);
    if (response.status == 200) {
      //cookieにjwt認証に必要な情報を保存する
      document.cookie = `${tiffin_token_key}=${response.data.access_token}`;
      router.push("/");
    } else {
      alert("ログイン失敗");
    }
  };

  const changedEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUser = Object.assign({}, user);
    newUser.email = e.target.value;
    setUser(newUser);
  };

  const changedPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUser = Object.assign({}, user);
    newUser.password = e.target.value;
    setUser(newUser);
  };

  return (
    <Layout>
      <h1>Login</h1>
      <div>
        Mail
        <input
          type="email"
          className={styles.loginInput}
          onChange={changedEmail}
        />
        Password
        <input
          type="password"
          className={styles.loginInput}
          onChange={changedPassword}
        />
        <div>
          <button className="primaryButton" onClick={pushLogin}>
            Login
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
