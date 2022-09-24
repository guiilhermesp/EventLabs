import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateEvent from "./Components/Event/CreateEvent";
import Event from "./Components/Event/Event";
import Events from "./Components/Event/Events";
import Header from "./Components/Header";
import Tickets from "./Components/Ticket/Tickets";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="AppBody">
          <Routes>
            <Route path="/" element={<Events />} />
            <Route path="/registerEvent" element={<CreateEvent />} />
            <Route path="/event/:id" element={<Event />} />
            <Route path="/tickets" element={<Tickets />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
