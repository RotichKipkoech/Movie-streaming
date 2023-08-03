import React, { useState } from 'react';

function MovieReview() {
    const [formData, setFormData] = useState({ username: "", review: "" });
    const [newData, setNewData] = useState([]);
    
    // Function to handle form submission
    const handleSubmit = (event) => {
    event.preventDefault();
