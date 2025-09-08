import { useState } from "react";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="min-h-screen">
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Dashboard searchText={searchText} setSearchText={setSearchText} />
    </div>
  );
}

export default App;
