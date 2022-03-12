import React, { useState } from "react";

import Home from "./Home";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
function App() {
  const [navchanger, setNavChanger] = useState(false);

  const toggleNav = () => {
    setNavChanger(!navchanger);
  };
  return (
    <>
      {!navchanger && <Navbar />}
      {navchanger && <Sidebar />}
      <Home toggleNav={toggleNav} />
    </>
  );
}

export default App;
