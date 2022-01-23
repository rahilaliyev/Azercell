import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AtlImage from "../../assets/image/download.png";
import "./style.scss";

const Courses = () => {
  const [data, setData] = useState([]);

  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("");
  const [district, setDistrict] = useState("");
  const [eduType, setEduType] = useState("");
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(50000);

  const [local, setLocal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let params = {
        notCheck: true,
        check: false,
      };
      try {
        const { data: response } = await axios.get(
          "http://192.168.137.229:8080/api/course/global",
          { params }
        );
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  const handleFilter = (e) => {
    if (e.target.value.length === 0) {
      return;
    }
    axios
      .get(
        `http://192.168.137.229:8080/api/course/name/contains/${e.target.value}`
      )
      .then((res) => {
        setData(res.data);
        setFilter(e.target.value);
        setCategory();
        setDistrict();
        setEduType();
        console.log(res.data);
      })
      .catch((error) => {
        console.log("errorsdsd", error);
        setData([]);
      });
  };

  const numberFilter = () => {
    let params = {
      min: minPrice,
      max: maxPrice,
    };

    axios
      .get(`http://192.168.137.229:8080/api/course/price/`, { params })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log("errorsdsd", error);
        setData([]);
      });
  };

  return (
    <div className="coursesMain container">
      <div className="courses-filter">
        <h3>Filter</h3>
        <form>
          <div className="form-input">
            <label>Course name</label>
            <input type="text" onChange={(e) => handleFilter(e)} />
          </div>
          <div className="form-input">
            <label>Categories</label>
            <select
              onChange={(e) => {
                handleFilter(e);
              }}
            >
              <option value="development">Development</option>
              <option value="devops">Devops</option>
              <option value="data-analytics">Data Analitics</option>
            </select>
          </div>
          <div className="form-input">
            <label>District</label>
            <select
              onChange={(e) => {
                handleFilter(e);
              }}
            >
              <option value="nasimi">Nasimi</option>
              <option value="sabail">Sebail</option>
              <option value="1">Nerimanov</option>
            </select>
          </div>

          <div className="form-input">
            <label>Education type</label>
            <select
              onChange={(e) => {
                handleFilter(e);
              }}
            >
              <option value="online">Online</option>
              <option value="offline">Offline</option>
              <option value="both">Both</option>
            </select>
          </div>
          <div className="form-input ">
            <label>Price</label>
            <div className="number">
              <input
                type="number"
                value={minPrice}
                onChange={(e) => {
                  numberFilter(setMinPrice(e.target.value));
                }}
              />
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => {
                  numberFilter(setMaxPrice(e.target.value));
                }}
              />
              {/* <button onClick={numberFilter}>Search</button> */}
            </div>
          </div>
        </form>
        <Link to="">Search more</Link>
      </div>
      <div className="coursesContext">
        <h3>Courses</h3>
        <div>
          {data.map((course) => (
            <div className="coursesList" key={course.id}>
              <div className="listImage">
                <img src={AtlImage} alt={course.companyName} />
              </div>
              <div className="listContent">
                <div className="listLeft">
                  <h3>{course.courseName}</h3>
                  <h4>{course.companyName}</h4>
                  <p>{course.category}</p>
                  <div className="rating">
                    <StarBorderIcon /> <span>{course.courseRating}</span>
                  </div>

                  <div className="time">
                    <AccessTimeIcon />
                    <span>{course.lesson.lessonDurationHours}</span>
                  </div>
                </div>
                <div className="listRight">
                  <span className="money">
                    <MonetizationOnIcon /> {course.price.totalPrice} AZN
                  </span>
                  <span className="location">
                    <LocationOnIcon />
                    {course.address.country}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
