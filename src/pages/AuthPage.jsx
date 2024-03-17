import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/config";

const AuthPage = ({ setIsAuth }) => {
  // giriş başarılıysa çalışır
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      console.log(data);
      //kullanıcının yetkisini true çek
      setIsAuth(true);

      // localde kullanıcı bilgisini sakla
      localStorage.setItem("token", data.user.refreshToken);
    });
  };
  return (
    <div className="container">
      <div className="auth">
        <h1>Sohbet Odası</h1>
        <p>Devam etmek için giriş yapın</p>
        <button onClick={handleClick}>
          <img src="./g.png" alt="" />
          <span>Google ile gir</span>
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
