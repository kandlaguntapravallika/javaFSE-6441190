
import React from 'react';

function App() {
  const heading = <h1>Office Space Rental Listings</h1>;
  const officeImage = "https://via.placeholder.com/400x200?text=Office+Space";

  const officeList = [
    { name: "Office One", rent: 50000, address: "123 Main St" },
    { name: "Office Two", rent: 65000, address: "456 Market St" },
    { name: "Office Three", rent: 45000, address: "789 Industrial Blvd" }
  ];

  const getRentStyle = (rent) => {
    return {
      color: rent < 60000 ? 'red' : 'green',
      fontWeight: 'bold'
    };
  };

  return (
    <div>
      {heading}
      <img src={officeImage} alt="Office" style={{ width: "400px", height: "200px" }} />
      <h2>Available Offices:</h2>
      <ul>
        {officeList.map((office, index) => (
          <li key={index}>
            <p><strong>Name:</strong> {office.name}</p>
            <p><strong>Rent:</strong> <span style={getRentStyle(office.rent)}>{office.rent}</span></p>
            <p><strong>Address:</strong> {office.address}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
