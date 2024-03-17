import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  doc,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { useEffect, useState } from "react";
import Mesaage from "../components/Mesaage";

const ChatPage = ({ room, setRoom }) => {
  const [messages, setMessages] = useState([]);
  //mesaj gönderme fonksiyonu
  const sendMessage = async (e) => {
    e.preventDefault();

    //koleksiyonun referansını alma
    const messagesCol = collection(db, "messages");

    //kolaksiyona yeni döküman ekle
    await addDoc(messagesCol, {
      text: e.target[0].value,
      room,
      author: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        photo: auth.currentUser.photoURL,
      },
      createdAt: serverTimestamp(),
    });

    //formu sıfırla

    e.target.reset();
  };

  //mevcut odada gönderilen mesajları anlık olarak alır
  useEffect(() => {
    //koleksiyonun referansını al
    const messagesCol = collection(db, "messages");

    //sorgu ayarlarını oluştur
    const q = query(
      messagesCol,
      where("room", "==", room),
      orderBy("createdAt", "asc")
    );

    //mesajlar koleksiyonundaki verileri al
    onSnapshot(q, (snapshot) => {
      const tempMsg = [];

      //dökümanları dön verilere eriş
      snapshot.docs.forEach((doc) => {
        tempMsg.push(doc.data());
      });
      // mesajları state aktar
      setMessages(tempMsg);
    });
  }, []);

  return (
    <div className="chat-page">
      <header>
        <p>{auth.currentUser?.displayName}</p>
        <p>{room}</p>
        <button onClick={() => setRoom(null)}>Başka Oda Seç</button>
      </header>

      <main>
        {messages.map((data, i) => (
          <Mesaage data={data} key={i} />
        ))}
      </main>

      <form onSubmit={sendMessage}>
        <input type="text" required placeholder="Mesajınızı yazınız" />
        <button>Gönder</button>
      </form>
    </div>
  );
};

export default ChatPage;
