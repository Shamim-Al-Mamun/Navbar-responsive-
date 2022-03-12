import React from "react";

function Home({ toggleNav }) {
  return (
    <div className="home">
      <button onClick={toggleNav}>Switch Navbar</button>
    </div>
  );
}

export default Home;
