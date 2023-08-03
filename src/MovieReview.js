import React, { useState } from 'react';

function MovieReview() {
    const [formData, setFormData] = useState({ username: "", review: "" });
    const [newData, setNewData] = useState([]);
    
    // Function to handle form submission
    const handleSubmit = (event) => {
    event.preventDefault();
        
    // Adding the current form data to the newData array using the spread operator
    setNewData([...newData, formData]);
    setFormData({ username: "", review: "" }); // Clear form inputs after submission
    }

    return (
    <div>
      <form onSubmit={handleSubmit} className="review-form">
        <div className="form-group">
            <label htmlFor="username">Username:</label>
            {/* Input field for username with onChange event to update the username in formData */}
            <input type="text" id="username" name="username" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
        </div>
        
