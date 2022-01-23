import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./style.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const SecondPageSearch = () => {
  const [filter, setFilter] = useState("");

  const handleFilter = (e) => {
    if (e.target.value.length === 0) {
      return;
    }
    axios
      .get(
        `http://192.168.137.229:8080/api/suggest/name/contains/${e.target.value}`
      )
      .then((res) => {
        console.log(res.data);
        setFilter(res.data);
      })
      .catch((error) => {
        console.log("errorsdsd", error);
      });
  };


  return (
    <div className="container search">
      <form>
        <div className="search-input">
          <input type="search" placeholder="Search" onChange={handleFilter} />
          <button type="submit">
            <SearchIcon />
          </button>

          <div className="coursesSearchList">
            {filter.length !== 0 &&
              filter.map((course) => (
                <div className="coursesCard" key={course.id}>
                  <Link to={`/search/${course.id}`}>
                    <span>{course.name}</span>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SecondPageSearch;
