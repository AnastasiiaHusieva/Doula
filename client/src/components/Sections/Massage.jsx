import React from 'react';

function Massage() {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {/* Massage Card - Schwangerschaftsmassage */}
      <div className="bg-white rounded-lg shadow-md p-6 w-72">
        <h1 className="text-xl font-bold mb-4">Schwangerschaftsmassage</h1>
        <img src="" alt="Massage" className="mb-4" />
        <p className="text-gray-700">
          In der Schwangerschaft leistet dein Körper unglaubliche Arbeit und verändert sich schnell. Du trägst ein kleines Wesen in dir. Während der Massage kannst du den Alltag und Trubel um dich herum loslassen und entspannen. Eine solche Massage bietet einen Raum, um das wachsende Leben und deinen eigenen Körper bewusster zu spüren. Besonders gegen Ende der Schwangerschaft bilden sich manchmal Schwangerschaftseinlagerungen, die durch regelmäßige Massagen minimiert werden können.
        </p>
      </div>

      {/* Massage Card - Wochenbettmassage */}
      <div className="bg-white rounded-lg shadow-md p-6 w-72">
        <h1 className="text-xl font-bold mb-4">Wochenbettmassage</h1>
        <p className="text-gray-700">
          Während dieser Zeit brauchst du besonders viel Ruhe und Umsorgung. Dein neuer Alltag fordert viel Kraft, und das ist normal, denn in dir ist neun Monate ein Kind herangewachsen. Mit einer Massage im Wochenbett unterstütze ich deinen Körper bei der Regeneration, sodass du mit neuer Kraft für dich und deine Familie da sein kannst.
        </p>
      </div>

      {/* Massage Card - Mama-Massage */}
      <div className="bg-white rounded-lg shadow-md p-6 w-72">
        <h1 className="text-xl font-bold mb-4">Mama-Massage</h1>
        <p className="text-gray-700">
          Unabhängig vom Alter deines Kindes fordert der Alltag viel von Dir. Eine Massage nimmt dir den Stress und gibt dir Kraft.
        </p>
      </div>
    </div>
  );
}

export default Massage;