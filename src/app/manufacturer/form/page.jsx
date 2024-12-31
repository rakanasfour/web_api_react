"use client";
import InputForm from"@/components/manufacturer/InputForm"
import axios from 'axios';
export default function form() {



    const handleFormSubmit = async (formData) => {
        console.log("Form Data Submitted:", formData);
    
        try {
          // Send the data to the backend
          const response = await axios.post("http://localhost:8080/api/manufacturers/request", formData);
          console.log("Model created successfully:", response.data);
          alert("Model created successfully!");
        } catch (error) {
          console.error("Error creating model:", error);
          alert("Failed to create the model. Please try again.");
        }
      };
    return (
        
        
<div className="ml-64 p-4">
    <InputForm onSubmit={handleFormSubmit}></InputForm>
</div>

    );

}