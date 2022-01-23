import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const index = () => {
  return (
    <main>
      <div className="main-container container">
        <div className="main-text">
          <div className="courses">
            <p>A good education is a foundation for a better future.</p>
            <i>Elizabeth Warren</i>
            <h2>Who are you in the future?</h2>

            <button>
              <Link to={"/search"}>Click here</Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default index;
