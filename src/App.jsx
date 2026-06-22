import flights from "./data/flights";

import "./App.css";

function App() {
  return (
    <div>
      <h1 className="text-3xl">GROUND CONTROL</h1>
      {flights.map((flight) => (
        <p key={flight.id}>
          <h2 className="text-xl font-bold">Flight Status:</h2>
          <p>Flight Number: {flight.flightNumber}</p>
          <p>Route: {flight.route}</p>
          <p>Status: {flight.boardingStatus}</p>
          <p>Flight Ready: {flight.ready ? "Yes" : "No"}</p>
          <h2 className="text-xl font-bold">Crew</h2>
          <p>Flight crew assigned: {flight.crew.assigned}</p>
          <p>Flight crew required: {flight.crew.required}</p>
          <p>Briefing complete: {flight.crew.briefingComplete ? "Yes" : "No"}</p>
          </p>

        
      ))}
    </div>
  );
}

export default App;
