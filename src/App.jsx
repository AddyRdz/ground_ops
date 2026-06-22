import flights from "./data/flights";

import "./App.css";

function App() {
  return (
    <div>
      <h1 className="text-2xl">GROUND CONTROL</h1>
      {flights.map((flight) => (
        <p key={flight.id}>
          <p>Flight Number: {flight.flightNumber}</p>
          <p>Route: {flight.route}</p>
          <p>Status: {flight.boardingStatus}</p>
          <p>Crew Status: {flight.crewStatus}</p>
          <p>Flight Ready: {flight.ready ? "Yes" : "No"}</p>
          </p>
      ))}
    </div>
  );
}

export default App;
