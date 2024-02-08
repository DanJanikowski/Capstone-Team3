import React, { useState } from 'react';

export default function SearchPage() {
  // State to manage the selected value of the dropdown
  const [selectedCounty, setSelectedCounty] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  // Array of options for the dropdown
  const counties = [
    "Fairfield",
    "Hartford",
    "Litchfield",
    "Middlesex",
    "New Haven",
    "New London",
    "Tolland",
    "Windham",
    "Norfolk",
    "Middlesex",
    "Barnstable",
    "Plymouth",
    "Essex",
    "Dukes",
    "Suffolk",
    "Worcester",
    "Hampshire",
    "Berkshire",
    "Franklin",
    "Bristol" ,
    "Hampden" 
];
const roles = ['HR', 'Manager', 'Basic']

  // Event handler for dropdown changes
  const handleDropdownChange1 = (event) => {
    setSelectedCounty(event.target.value);
  };

  const handleDropdownChange2 = (event) => {
    setSelectedRole(event.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the selected option, e.g., send it to an API
    console.log('Selected County:', selectedCounty);
    console.log('Selected Role:', selectedRole);
  };

 

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Select a conuty:
        <select value={selectedCounty} onChange={handleDropdownChange1}>
          {/* Map through the options array to create dropdown options */}
          {counties.map((county, index) => (
            <option key={index} value={county}>
              {county}
            </option>
          ))}
        </select>
      </label>
      
      <label>
        Select a role:
        <select value={selectedRole} onChange={handleDropdownChange2}>
          {/* Map through the options array to create dropdown options */}
          {roles.map((role, index) => (
            <option key={index} value={role}>
              {role}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </>
    
  );
};


