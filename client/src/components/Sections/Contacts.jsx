import { useState } from "react";
import axios from "axios";
function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [betreff, setBetreff] = useState("");
  const [text, setText] = useState("");
  console.log(name);
  console.log(email);
  console.log(betreff);
  console.log(text);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/email/send`,
        {
          name,
          email,
          betreff,
          text,
        }
      );
      console.log("dataaaa", name, email, betreff, text);
      if (response.status === 200) {
        console.log("email sent successfully");

        setName("");
        setEmail("");
        setBetreff("");
        setText("");
      } else {
        console.log("email fail to send");
        throw new Error("This is a custom error message.");
      }
    } catch (err) {
      console.log("err");
    }
  };
  return (
    <div id="Contacts" className="screens-xs  lg:w-3/4 xl:w-1/2 mx-auto ">
      <form
        onSubmit={handleSubmit}
        className="xs:p-2 mb-20  bg-beige-dark rounded  text-beige-light xs:text-xl lg:text-2xl  md:px-8 mx:justify-center"
      >
        <div>
          <h2 className="p-2 font-dancing-script text-[170%] pb-5 ">
            Contact Me
          </h2>
        </div>
        <div className="flex flex-row gap-5 xs:flex-row md:justify-center justify-between rounded ">
          <input
            className="bg-beige-dark border-2 border-beige-light xs:w-32 lg:w-1/6 rounded placeholder-beige-light pl-2"
            type="text"
            placeholder="  Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
          <input
            className="bg-beige-dark border-2 border-beige-light lg:w-2/6 rounded xs:w-72 placeholder-beige-light pl-2"
            type="email"
            placeholder="  Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
        </div>
        <div className="text-left pt-2 pb-2">
          <input
            className="bg-beige-dark border-2 border-beige-light rounded xs:w-37 plas placeholder-beige-light pl-2"
            type="text"
            placeholder="  Betreff"
            onChange={(e) => setBetreff(e.target.value)}
            value={betreff}
          ></input>
        </div>
        <div>
          <textarea
            name="message"
            placeholder="  Hier du kannst etwas schreiben"
            rows="6"
            className="w-[100%] bg-beige-light rounded placeholder-beige-dark pl-2 text-beige-dark "
            onChange={(e) => setText(e.target.value)}
            value={text}
          ></textarea>
          <div className="">
            <button className="bg-beige text-beige-light py-2 px-4 rounded transition duration-500 hover:bg-beige-lightest">
              ABSENDEN
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contacts;
