import flights from "./data/flights";

import "./App.css";

function App() {
  return (
    <div className="bg-[#F9B612] min-h-screen pt-10">
      <h1 className="text-6xl text-[#304CB2] font-bold text-center">GROUND CONTROL</h1>
      <div className="flex gap-6 justify-center">
      {flights.map((flight) => (
        <div
          key={flight.id}
          className="mt-32 p-6 bg-slate-100 block max-w-sm border rounded-3xl shadow-xs"
        >
          <h2 className="text-xl font-bold">{flight.flightNumber}</h2>
          <p>{flight.route}</p>
          <p>Status: {flight.boardingStatus}</p>
          <p className={flight.ready ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
            {flight.ready ? "READY" : "NOT READY"}
          </p>
          <h2 className="text-xl font-bold">Crew Status:</h2>
          <p>Crew {flight.crew.assigned}/{flight.crew.required}</p>
          <p>
            Briefing Complete: {flight.crew.briefingComplete ? "Yes" : "No"}
          </p>
        </div>
      ))}
    </div>
    </div>
  );
}

export default App;
