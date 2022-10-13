import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AsteroidLookup from "../src/components/Asteroid/AsteroidLookup";
import AsteroidsList from "./components/Asteroid/AsteroidsList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AsteroidsList />}></Route>
          <Route path="/:id" element={<AsteroidLookup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
