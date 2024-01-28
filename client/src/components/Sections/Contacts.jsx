import { useState, useEffect } from "react";
import axios from "axios";
function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [betreff, setBetreff] = useState("");
  const [text, setText] = useState("");
  const [familienname, setfamilienName] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  // Set up an effect for window resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <div id="Contacts" className="screens-xs  lg:w-1/2  mx-auto ">
      <form
        onSubmit={handleSubmit}
        className="xs:p-2 my-20 border-2 border-beige-light  rounded-xl  text-beige-light xs:text-xl lg:text-2xl  md:px-8 mx:justify-center flex flex-col gap-5 shadow-xl"
      >
        <div>
          <h2 className="p-2 font-dancing-script text-beige-dark text-[170%] mb-2 ">
            Contact Me
          </h2>
        </div>
        <div className="flex flex-col  gap-4">
          <div className="flex  gap-2   rounded ">
            <input
              className=" border-2 border-beige-light lg:w-2/3 rounded-lg placeholder-beige-light    bg-beige-lightest  text-lg  px-6 py-2 shadow-md"
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            ></input>
            <input
              className=" border-2 border-beige-light lg:w-2/3 lg:w-1/6 rounded-lg placeholder-beige-light    bg-beige-lightest  text-lg  px-6 py-2 shadow-md"
              type="text"
              placeholder="Familienname"
              onChange={(e) => setfamilienName(e.target.value)}
              value={familienname}
            ></input>
          </div>
          <div className="flex  gap-2    rounded ">
            <input
              className=" border-2 border-beige-light lg:w-2/3 lg:w-1/6 rounded-lg placeholder-beige-light    bg-beige-lightest  text-lg  px-6 py-2 shadow-md"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
            <input
              className=" border-2 border-beige-light  lg:w-2/3 rounded-lg placeholder-beige-light    bg-beige-lightest  text-lg  px-6 py-2 shadow-md"
              type="text"
              placeholder="Betreff"
              onChange={(e) => setBetreff(e.target.value)}
              value={betreff}
            ></input>
          </div>
        </div>
        <div>
          <textarea
            name="message"
            placeholder="  Hier du kannst etwas schreiben"
            rows="6"
            className="w-[100%] bg-beige-lightest rounded border-2 border-beige-light placeholder-beige-light pl-2 text-beige-dark text-lg py-4 shadow-md"
            onChange={(e) => setText(e.target.value)}
            value={text}
          ></textarea>
          <div className=" my-3">
            <button className="bg-beige-lightest text-beige-dark border border-beige-light py-3 px-8 rounded-2xl transition duration-500 hover:bg-beige-light hover:text-beige-lightest hover:shadow-2xl shadow-md ">
              Absenden
            </button>
          </div>
        </div>
      </form>

      {isMobile && (
        <form
          onSubmit={handleSubmit}
          className="xs:p-2 my-20 border-2 border-beige-light  rounded-xl  text-beige-light xs:text-xl lg:text-2xl  md:px-8 mx:justify-center flex flex-col gap-5 shadow-xl"
        >
          <div>
            <h2 className="p-2 font-dancing-script text-beige-dark text-[170%] mb-2 ">
              Contact Me
            </h2>
          </div>
          <div className="flex flex-col justify-start gap-4">
            <div className="flex  gap-2    rounded ">
              <input
                className=" border-2 border-beige-light lg:w-2/3 lg:w-1/6 rounded-lg placeholder-beige-light    bg-beige-lightest  text-lg  px-6 py-2 shadow-md"
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              ></input>
              <input
                className=" border-2 border-beige-light lg:w-2/3 lg:w-1/6 rounded-lg placeholder-beige-light    bg-beige-lightest  text-lg  px-6 py-2 shadow-md"
                type="text"
                placeholder="Familienname"
                onChange={(e) => setfamilienName(e.target.value)}
                value={familienname}
              ></input>
            </div>
            <div className="flex  gap-2    rounded ">
              <input
                className=" border-2 border-beige-light lg:w-2/3 lg:w-1/6 rounded-lg placeholder-beige-light    bg-beige-lightest  text-lg  px-6 py-2 shadow-md"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              ></input>
              <input
                className=" border-2 border-beige-light  lg:w-2/3 rounded-lg placeholder-beige-light    bg-beige-lightest  text-lg  px-6 py-2 shadow-md"
                type="text"
                placeholder="Betreff"
                onChange={(e) => setBetreff(e.target.value)}
                value={betreff}
              ></input>
            </div>
          </div>
          <div>
            <textarea
              name="message"
              placeholder="  Hier du kannst etwas schreiben"
              rows="6"
              className="w-[100%] bg-beige-lightest rounded border-2 border-beige-light placeholder-beige-light pl-2 text-beige-dark text-lg py-4 shadow-md"
              onChange={(e) => setText(e.target.value)}
              value={text}
            ></textarea>
            <div className=" my-3">
              <button className="bg-beige-lightest text-beige-dark border border-beige-light py-3 px-8 rounded-2xl transition duration-500 hover:bg-beige-light hover:text-beige-lightest hover:shadow-2xl shadow-md ">
                Absenden
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default Contacts;
