function Home() {
  return (
    <div id="Home">
      <div className="flex justify-between">
        <img
          className="w-1/2 ml-10 rounded-xl"
          src="/photos/PersonalPhotos/NZ6_0602.jpg"
          alt="FirstPhoto"
        />
        <div className="flex flex-col ">
          <h1 className="text-2xl">Spüren.</h1>
          <h1 className="text-2xl">Halten.</h1>
          <h1 className="text-2xl">Begleiten.</h1>
        </div>
      </div>
      <p>Ich heiße Ann-Sofie und bin Doula in Heidelberg.</p>
      <p>
        Ihr werdet Eltern und hattet möglicherweise schon bewegende Momente
        während der bisherigen Schwangerschaft?{" "}
      </p>
      <p>
        Dann wisst ihr ja schon, dass es bis zur Geburt eine bewegende Reise
        ist. Und auf dieser Reise möchte ich eure Wegbegleiterin sein und euch
        in dieser spannenden, und manchmal nicht ganz einfachen Zeit während der
        Schwangerschaft, rund um die Geburt, im Wochenbett und während der
        ersten Zeit mit eurem Baby zur Seite stehen. Für euch als Paar, als auch
        für dich als werdende Mama.
      </p>
    </div>
  );
}

export default Home;
