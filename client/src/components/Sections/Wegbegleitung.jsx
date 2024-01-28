import { useState, useEffect } from "react";

function Wegbegleitung() {
  const [isLarge, setIsLarge] = useState(window.innerWidth > 1280);

  const handleResize = () => {
    setIsLarge(window.innerWidth > 1280);
  };

  // Set up an effect for window resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="h-[1000px] ">
      <div className="flex flex-col space-around relative pb-10" id="Wegbegleitung">
        <img
          className="w-full h-full absolute"
          style={{
            boxShadow:
              "5px 2px 6px 11px rgba(0, 0, 0, 0.1), 5px  2px 14px 11px rgba(0, 0, 0, 0.06)",
          }}
          src="/photos/newnotebook.png"
          alt="Logo"
        />

        <div className=" flex flex-col ml-1 w-full text-left items-center relative">
          <h1 className="text-beige-dark font-bold font-dancing-script text-4xl md:text-5xl my-4">
            Wegbegleitung
          </h1>
          {!isLarge && (
            <div className="flex flex-col items-center">
            <div className="mt-2 flex justify-center  w-[70%] sm:w-[55%] lg:w-[50%]">
              <img
                className="flex-basis w-full mb-3 lg:mb-5 rounded-xl"
                src="/photos/NZ6_0007.jpg"
                alt="Wegbegleitung"
              />
            </div>
            <p className="w-[70%] text-beige-dark text-xs sm:text-md md:text-lg">
              {" "}
              Mein Selbstverständnis als Doula ist es, in den Phasen der
              Veränderung und bei den Herausforderungen, die Schwangerschaft,
              Geburt und Wochenbett mit sich bringen, Halt und Orientierung zu
              geben. In den Treffen und Gesprächen mit mir erkennst du deine
              Stärken und Ressourcen, nimmst diese bewusster wahr und lernst, sie
              gezielt einzusetzen.Ich gebe dir Tipps, auf was du in der
              Schwangerschaft achten solltest, und wie du dich auf Geburt und
              Wochenbett vorbereiten kannst. Ich schaffe dir Räume der
              Entspannung, in denen dein Körper zur Ruhe kommen und du das
              wachsende Leben in dir spüren kannst.{" "}
            </p>
          </div>
          )}
          {isLarge && (
            <div className="flex items-center mx-20 gap-10">
            <div className="mt-2 flex justify-center w-[60%]">
              <img
                className="flex-basis  w-full mb-3 lg:mb-5 rounded-xl"
                src="/photos/NZ6_0007.jpg"
                alt="Wegbegleitung"
              />
            </div>
            <p className="w-[70%] text-beige-dark text-xs sm:text-md md:text-lg">
              {" "}
              Mein Selbstverständnis als Doula ist es, in den Phasen der
              Veränderung und bei den Herausforderungen, die Schwangerschaft,
              Geburt und Wochenbett mit sich bringen, Halt und Orientierung zu
              geben. In den Treffen und Gesprächen mit mir erkennst du deine
              Stärken und Ressourcen, nimmst diese bewusster wahr und lernst, sie
              gezielt einzusetzen.Ich gebe dir Tipps, auf was du in der
              Schwangerschaft achten solltest, und wie du dich auf Geburt und
              Wochenbett vorbereiten kannst. Ich schaffe dir Räume der
              Entspannung, in denen dein Körper zur Ruhe kommen und du das
              wachsende Leben in dir spüren kannst.{" "}
            </p>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Wegbegleitung;
