function Wegbegleitung() {
  return (
    <div className="h-[1000px] ">
      <div className="flex flex-col space-around   pb-10" id="Wegbegleitung">
        <img
          className="w-[100%] h-[68%] absolute xs:h-[80%] "
          style={{
            boxShadow:
              "5px 2px 6px 11px rgba(0, 0, 0, 0.1), 5px  2px 14px 11px rgba(0, 0, 0, 0.06)",
          }}
          src="/photos/newnotebook.png"
          alt="Logo"
        />

        <div className=" flex flex-col ml-1 leading- absolute w-full text-left items-center relative">
          <h1 className="text-beige-dark font-bold font-dancing-script text-4xl my-4">
            Wegbegleitung
          </h1>
          <div className="flex mt-2 justify-center xs:mt-0  xs:justify-end xs:p-10 ">
            <img
              className="flex-basis  w-[70%] mb-3  xs:absolute   rounded-xl "
              src="/photos/NZ6_0007.jpg"
              alt="Wegbegleitung"
            />
          </div>
          <p className="w-[70%] text-beige-dark text-xs  ">
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
      </div>
    </div>
  );
}

export default Wegbegleitung;
