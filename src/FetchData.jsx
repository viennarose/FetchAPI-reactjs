import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./index.css";

const FetchData = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://sis.materdeicollege.com/api/venues")
      .then((res) => res.json())
      .then((res) => setData(res.venues));
  }, []);

  const showVenue = (venue) => {
    navigate(`/api/venue/${venue}`);
  };

  return (
    <>
      <h1 className="text-center m-3">List of Venues</h1>
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th className="col-md-2">ID</th>
            <th className="col-md-2">Name</th>
            <th className="col-md-2">Building</th>
            <th className="col-md-2">Capacity</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((venue, index) => {
            return (
              <tr key={index}>
                <td>{data[venue].id}</td>
                <td>{data[venue].name}</td>
                <td>{data[venue].building}</td>
                <td className="d-flex justify-content-between align-items-center">
                  <div>{data[venue].capacity}</div>
                  <AiFillEye className="link"
                    onClick={() => { showVenue(data[venue].id);
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default FetchData;
