import { auth } from "../firebase/config";

const Mesaage = ({ data }) => {
  //oturumu açık olan kullanıcının id'si
  if (auth.currentUser?.uid === data.author.id) {
    return <p className="msg-user">{data.text}</p>;
  }

  // eşit değilse
  return (
    <div className="msg-other">
      <div className="user-info">
        <img src={data.author.photo} />
        <span>{data.author.name}</span>
      </div>

      <p className="msg-text">{data.text}</p>
    </div>
  );
};

export default Mesaage;
