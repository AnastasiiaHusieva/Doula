function Contacts() {
  return (
    <div id="Contacts">
      <h2>Contacts</h2>
      <form className="p-2 bg-beige-dark rounded">
        <div className="flex flex-row justify-between ">
          <input
            className="bg-beige-light  "
            type="text"
            placeholder="  Name"
          ></input>
          <input
            className="bg-beige-light"
            type="email"
            placeholder="  Email"
          ></input>
        </div>
        <div className="p-2">
          <input
            className="bg-beige-light"
            type="text"
            placeholder="  Betreff"
          ></input>
        </div>
        <div>
          <textarea
            name="message"
            placeholder="  Hier du kannst etwas schreiben"
            rows="6"
            className="w-[300px] bg-beige-light"
          ></textarea>
          <div>
            <button>ABSENDEN</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contacts;
