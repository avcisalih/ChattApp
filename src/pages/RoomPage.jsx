const RoomPage = ({ setRoom, setIsAuth }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //inputtaki değeri al
    const room = e.target[0].value;

    // kullacının seçtiği odayı state akta
    setRoom(room.toLowerCase());
    console.log(room);
  };
  return (
    <form onSubmit={handleSubmit} className="room-page">
      <h1>Sohbet Odaları</h1>

      <p>Hangi Odaya Gireceksiniz</p>

      <input type="text" placeholder="örn: javascript" required />

      <button type="submit">Odaya Gir</button>
      <button
        onClick={() => {
          setIsAuth(false);
          localStorage.removeItem("token");
        }}
        type="button"
      >
        Çıkış Yap
      </button>
    </form>
  );
};

export default RoomPage;
