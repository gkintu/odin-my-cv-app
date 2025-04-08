import React, { useState } from 'react'; // Import React and useState
import '../styles/Forms.css'; // Import component-specific styles

function Education() {
  // State for edit mode for this section
  const [isEditing, setIsEditing] = useState(true); // Default to editing mode

  // State for the education details
  const [schoolName, setSchoolName] = useState(''); // State for school name
  const [titleOfStudy, setTitleOfStudy] = useState(''); // State for title of study
  const [dateOfStudy, setDateOfStudy] = useState(''); // State for date of study

  // Handle form submission for this section
  const handleSubmit = (event) => {
    event.preventDefault(); // Stop page reload
    setIsEditing(false); // Go to display mode
    console.log("Education submitted:", { schoolName, titleOfStudy, dateOfStudy }); // Optional log
  };

  // Handle edit button click for this section
  const handleEdit = () => {
    setIsEditing(true); // Go back to edit mode
  };

  // Render edit form if isEditing is true
  if (isEditing) {
    return (
      <section className="education-edit"> {/* Class for styling */}
        <h2>Educational Experience</h2>
        <form onSubmit={handleSubmit}> {/* Submit handler */}
          <div>
            <label htmlFor="schoolName">School Name: </label> {/* School name label */}
            <input
              type="text" // Text input
              id="schoolName" // Link to label
              value={schoolName} // Controlled input
              onChange={(e) => setSchoolName(e.target.value)} // Update state
              required // Required field
            />
          </div>
          <div>
            <label htmlFor="titleOfStudy">Title of Study: </label> {/* Title label */}
            <input
              type="text" // Text input
              id="titleOfStudy" // Link to label
              value={titleOfStudy} // Controlled input
              onChange={(e) => setTitleOfStudy(e.target.value)} // Update state
              required // Required field
            />
          </div>
          <div>
            <label htmlFor="dateOfStudy">Date of Study: </label> {/* Date label */}
            <input
              type="text" // Using text for flexibility (could use date type)
              // Consider type="month" or two type="date" inputs for start/end
              id="dateOfStudy" // Link to label
              value={dateOfStudy} // Controlled input
              onChange={(e) => setDateOfStudy(e.target.value)} // Update state
              placeholder="e.g., 2020-2024 or Jan 2024" // Example for user
            />
          </div>
          <button type="submit">Submit</button> {/* Submit button */}
        </form>
      </section>
    );
  }

  // Render display view if isEditing is false
  return (
    <section className="education-display"> {/* Class for styling */}
      <h2>Educational Experience</h2>
      <p><strong>School:</strong> {schoolName}</p> {/* Display school name */}
      <p><strong>Title:</strong> {titleOfStudy}</p> {/* Display title */}
      <p><strong>Date:</strong> {dateOfStudy}</p> {/* Display date */}
      <button onClick={handleEdit}>Edit</button> {/* Edit button */}
    </section>
  );
}

export default Education; // Export the component