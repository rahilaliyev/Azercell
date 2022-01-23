import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CoursesDetails = () => {
  const { courseId } = useParams();
  const [detailData, setDetailData] = useState();
  const axiosProductDetails = async (id) => {
    const res = await axios
      .get(`http://192.168.137.229:8080/api/suggest/id/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    setDetailData(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    axiosProductDetails(courseId);
  }, [courseId]);

  return (
    <div>
      <div className="data-details ">
        {detailData && (
          <div className="data-details-container container">
            <h1>{detailData.name}</h1>
            <div className="data-table">
              {detailData.steps.map((title) => (
                <div key={title.id} className="data-rows">
                  <span>{title.title}</span>
                  <span>{title.stepName}</span>
                  <span>{title.level}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesDetails;
