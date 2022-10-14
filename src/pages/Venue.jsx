import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Venue = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState([]);
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    fetch(`https://sis.materdeicollege.com/api/venues/${id}`)
      .then((res) => res.json())
      .then((data) => {

        const { venue} = data;

        setVenue(venue);
        setSchedule(data.schedules);
      });
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-md-4 m-5 shadow-dark">
        <h1 className="text-center m-4">{venue.building}</h1>
        <table className="table table-dark">
          <thead>
            <tr>
              <th className="">ID</th>
              <th className="">Name</th>
              <th className="">Building</th>
              <th className="">Capacity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{venue.id}</td>
              <td>{venue.name}</td>
              <td>{venue.building}</td>
              <td>{venue.capacity}</td>
            </tr>
          </tbody>
        </table>
        </div>
       
        <div className="col-md-6">
        <Link to="/" className="btn btn-lg btn-primary mb-5 mt-5 float-end">
          Back
        </Link>
        <h1 className="text-center mt-5">Schedules</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="fs-5">ID</th>
              <th className="fs-5">Course No.</th>
              <th className="fs-5">Description</th>
              <th className="fs-5">Teacher</th>
              <th className="fs-5">Schedule</th>
              <th className="fs-5">Size</th>
              
            </tr>
          </thead>
          <tbody>
            {Object.keys(schedule)?.map((sched, ids) => {
              return (
                <>
                  <tr key={ids}>
                    <td className="fs-5">{schedule[sched].id}</td>
                    <td className="fs-5">{schedule[sched].course_no}</td>
                    <td className="fs-5">{schedule[sched].description}</td>
                    <td className="fs-5">{schedule[sched].teacher}</td>
                    <td className="fs-5">{schedule[sched].schedule}</td>
                    <td className="fs-5">{schedule[sched].size}</td>
                   
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        </div>
      </div>
    </>
  );
};

export default Venue;
