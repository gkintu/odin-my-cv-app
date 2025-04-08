import React, { useState } from 'react';
import '../styles/GeneralInfo.css';

function GeneralInfo() {
    // State variable to track if we are in "edit" mode or "display" mode
    const [isEditing, setIsEditing] = useState(true); // Start in editing mode by default
  
    // State variables to hold the input field values
    const [name, setName] = useState(''); // State for the name input
    const [email, setEmail] = useState(''); // State for the email input
    const [phone, setPhone] = useState(''); // State for the phone input
  
    // Function to handle form submission
    const handleSubmit = (event) => {
      event.preventDefault(); // Prevent the default form submission behavior (page reload)
      setIsEditing(false); // Switch to display mode after submitting
      console.log("Form submitted:", { name, email, phone }); // Log submitted data (optional)
    };
  
    // Function to handle clicking the "Edit" button
    const handleEdit = () => {
      setIsEditing(true); // Switch back to editing mode
    };

      // If we are in "editing" mode, render the form
  if (isEditing) {
    return (
      <section className="general-info-edit"> {/* Add a class for styling */}
        <h2>General Information</h2>
        <form onSubmit={handleSubmit}> {/* Call handleSubmit when the form is submitted */}
          <div>
            <label htmlFor="name">Name: </label> {/* Label for the name input */}
            <input
              type="text" // Input type is text
              id="name" // Connect label and input
              value={name} // Controlled component: input value is tied to state
              onChange={(e) => setName(e.target.value)} // Update state when input changes
              required // Make the field required
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label> {/* Label for the email input */}
            <input
              type="email" // Input type is email (provides basic validation)
              id="email" // Connect label and input
              value={email} // Controlled component: input value is tied to state
              onChange={(e) => setEmail(e.target.value)} // Update state when input changes
              required // Make the field required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone: </label> {/* Label for the phone input */}
            <input
              type="tel" // Input type is telephone (semantic)
              id="phone" // Connect label and input
              value={phone} // Controlled component: input value is tied to state
              onChange={(e) => setPhone(e.target.value)} // Update state when input changes
              // Optional: add pattern attribute for specific phone formats if needed
            />
          </div>
          <button type="submit">Submit</button> {/* Button to trigger form submission */}
        </form>
      </section>
    );
  }

  // If we are NOT in "editing" mode, render the display view
  return (
    <section className="general-info-display"> {/* Add a class for styling */}
      <h2>General Information</h2>
      <p><strong>Name:</strong> {name}</p> {/* Display the submitted name */}
      <p><strong>Email:</strong> {email}</p> {/* Display the submitted email */}
      <p><strong>Phone:</strong> {phone}</p> {/* Display the submitted phone */}
      <button onClick={handleEdit}>Edit</button> {/* Button to switch back to edit mode */}
    </section>
  );
}

export default GeneralInfo; // Export the component so App.jsx can import it