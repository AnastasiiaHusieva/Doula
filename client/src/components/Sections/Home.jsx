function Home() {
  return (
    <div id="Home">
      <div className="flex justify-between relative">
        <img
          className="w-1/2 dark-img min-w-full mb-5"
          src="/photos/NZ6_0602.jpg"
          alt="FirstPhoto"
        />
        <div className="flex flex-col bottom-10 right-10 absolute">
          <h1 className="text-4xl sm:text-6xl font-dancing-script text-beige-lightest reflection">
            Spüren.
          </h1>
          <h1 className="text-4xl sm:text-6xl font-dancing-script text-beige-lightest reflection">
            Halten.
          </h1>
          <h1 className="text-4xl sm:text-6xl font-dancing-script text-beige-lightest reflection">
            Begleiten.
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center w-[100%] mx-auto">
        <p className="text-3xl font-lora mb-10 text-beige-dark">
          Ich heiße{" "}
          <span className="font-dancing-script text-4xl ">Ann-Sofie</span> und
          bin Doula in{" "}
          <span className="font-dancing-script text-4xl">Heidelberg</span>
        </p>
        <p className="font-lora text-beige-dark underlined text-xl mb-2">
          Ihr werdet Eltern und hattet möglicherweise schon bewegende Momente
          während der bisherigen Schwangerschaft?{" "}
        </p>
        <p className="font-lora text-beige-dark underlined text-md mb-2">
          Dann wisst ihr ja schon, dass es bis zur Geburt eine bewegende Reise
          ist. Und auf dieser Reise möchte ich eure Wegbegleiterin sein und euch
          in dieser spannenden, und manchmal nicht ganz einfachen Zeit während
          der Schwangerschaft, rund um die Geburt, im Wochenbett und während der
          ersten Zeit mit eurem Baby zur Seite stehen. Für euch als Paar, als
          auch für dich als werdende Mama.
        </p>
      </div>
    </div>
  );
}

export default Home;
