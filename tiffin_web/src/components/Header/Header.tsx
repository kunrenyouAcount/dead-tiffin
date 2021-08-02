import style from "./Header.module.css";
import { useRouter } from "next/router";

export const Header: React.FC = () => {
  const router = useRouter();

  const logoutAccount = () => {
    router.push("/");
  };

  const goBack = () => {
    router.back();
  };

  return (
    <div className={style.headerArea}>
      <div className={style.logo} onClick={() => router.push("/")}>
        Todo
      </div>
      <div className={style.headerRightArea}>
        <button className={style.headerButton} onClick={goBack}>
          戻る
        </button>
        <button className={style.headerButton} onClick={logoutAccount}>
          ログアウト
        </button>
      </div>
    </div>
  );
};
