// src/components/Experience.jsx

import React, { useState } from 'react'; // Import React and useState
import '../styles/Forms.css'; // Import component styles

function Experience() {
  // State for edit mode
  const [isEditing, setIsEditing] = useState(true); // Default to editing

  // State for experience details
  const [companyName, setCompanyName] = useState(''); // State for company name
  const [positionTitle, setPositionTitle] = useState(''); // State for position title
  const [responsibilities, setResponsibilities] = useState(''); // State for responsibilities
  const [dateFrom, setDateFrom] = useState(''); // State for start date
  const [dateUntil, setDateUntil] = useState(''); // State for end date

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    setIsEditing(false); // Switch to display mode
    console.log("Experience submitted:", { companyName, positionTitle, responsibilities, dateFrom, dateUntil });
  };

  // Handle edit button click
  const handleEdit = () => {
    setIsEditing(true); // Switch back to editing mode
  };

  // Render edit form if isEditing
  if (isEditing) {
    return (
      <section className="experience-edit"> {/* Styling class */}
        <h2>Practical Experience</h2>
        <form onSubmit={handleSubmit}> {/* Submit handler */}
          <div>
            <label htmlFor="companyName">Company Name: </label> {/* Company label */}
            <input
              type="text" // Text input
              id="companyName" // Link to label
              value={companyName} // Controlled input
              onChange={(e) => setCompanyName(e.target.value)} // Update state
              required // Required field
            />
          </div>
          <div>
            <label htmlFor="positionTitle">Position Title: </label> {/* Position label */}
            <input
              type="text" // Text input
              id="positionTitle" // Link to label
              value={positionTitle} // Controlled input
              onChange={(e) => setPositionTitle(e.target.value)} // Update state
              required // Required field
            />
          </div>
          <div>
            <label htmlFor="responsibilities">Main Responsibilities: </label> {/* Responsibilities label */}
            <textarea // Use a textarea for longer text
              id="responsibilities" // Link to label
              value={responsibilities} // Controlled input
              onChange={(e) => setResponsibilities(e.target.value)} // Update state
              rows="4" // Suggest initial height
            />
          </div>
          <div>
            <label htmlFor="dateFrom">Date From: </label> {/* Start date label */}
            <input
              type="text" // Use text for flexibility (e.g., "Jan 2022") or type="month"
              id="dateFrom" // Link to label
              value={dateFrom} // Controlled input
              onChange={(e) => setDateFrom(e.target.value)} // Update state
              placeholder="e.g., YYYY-MM or Month YYYY"
            />
          </div>
          <div>
            <label htmlFor="dateUntil">Date Until: </label> {/* End date label */}
            <input
              type="text" // Use text for flexibility (e.g., "Present") or type="month"
              id="dateUntil" // Link to label
              value={dateUntil} // Controlled input
              onChange={(e) => setDateUntil(e.target.value)} // Update state
              placeholder="e.g., YYYY-MM or Present"
            />
          </div>
          <button type="submit">Submit</button> {/* Submit button */}
        </form>
      </section>
    );
  }

  // Render display view if not editing
  return (
    <section className="experience-display"> {/* Styling class */}
      <h2>Practical Experience</h2>
      <p><strong>Company:</strong> {companyName}</p> {/* Display company */}
      <p><strong>Position:</strong> {positionTitle}</p> {/* Display position */}
      <p><strong>Responsibilities:</strong> {responsibilities}</p> {/* Display responsibilities */}
      <p><strong>Dates:</strong> {dateFrom} - {dateUntil}</p> {/* Display dates */}
      <button onClick={handleEdit}>Edit</button> {/* Edit button */}
    </section>
  );
}

export default Experience; // Export component