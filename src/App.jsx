import { useState } from "react";
import AuthPage from "./pages/AuthPage";
import RoomPage from "./pages/RoomPage";
import ChatPage from "./pages/ChatPage";

const App = () => {
  //kullanıcının seçtiği oda
  const [room, setRoom] = useState(null);
  //kullacının yetkisi var mı ?
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));

  // tekisi yoksa giriş sayfası
  if (!isAuth) {
    return <AuthPage setIsAuth={setIsAuth} />;
  }
  // yetkisi varsa sohbet seçme sayfası

  return (
    <div className="container">
      {!room ? (
        //oda seçilmediyse / oda seçme sayfası
        <RoomPage setRoom={setRoom} setIsAuth={setIsAuth} />
      ) : (
        //oda seçildiyse / sohbet sayfası
        <ChatPage room={room} setRoom={setRoom} />
      )}
    </div>
  );
};

export default App;
