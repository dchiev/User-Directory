import React from "react";

function Table(props) {
  const sort = () => {
    // sort.porps.results/ update state with sorted array. on click on last name .
    props.setEmployees();
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
          <th scope="col">City</th>
          <th scope="col">Image</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((user) => (
          <tr>
            <td>{user.name.first}</td>
            <td>{user.name.last}</td>
            <td>{user.email}</td>
            <td>{user.location.city}</td>
            <td>
              <img src={user.picture.medium} alt="profile picture" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
