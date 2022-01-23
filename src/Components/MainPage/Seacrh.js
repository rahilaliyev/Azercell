import React from "react";
import { Link } from "react-router-dom";

const Seacrh = () => {
  return (
    <div>
      <div className="search">
        <button>
          <Link to="/courses">Search</Link>
        </button>
      </div>
    </div>
  );
};

export default Seacrh;
