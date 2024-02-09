import React, { useState } from 'react';
import axios from 'axios'
import NavBar from '../components/NavBar'

export default function SalaryCalculator() {
  // State to manage the selected value of the dropdown
  const [selectedCounty, setSelectedCounty] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [predictedSalary, setPredictedSalary] = useState(0);

  // Array of options for the dropdown
  const counties = [
    "None",
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
    "Bristol",
    "Hampden"
  ];
  const roles = ["None", 'HR', 'Manager', 'Basic']

  // Event handler for dropdown changes
  const handleDropdownChange1 = (event) => {
    setSelectedCounty(event.target.value);
  };

  const handleDropdownChange2 = (event) => {
    setSelectedRole(event.target.value);
  };

  // Event handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    let response = await axios.post('/api/predict', {
      'county': selectedCounty,
      'role': selectedRole.toLowerCase()
    });
    setPredictedSalary(response.data.predicted_salary);
  };



  return (
    <>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <label>
          Select a county:
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
      <h2>Expected salary: ${predictedSalary}</h2>
    </>

  );
};


