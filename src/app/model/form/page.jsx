"use client";
import InputForm from"@/components/model/InputForm"
import axios from "axios";


const FormPage = () => {
    const handleFormSubmit = async (formData) => {
      console.log("Form Data Submitted:", formData);
  
      try {
        // Send the data to the backend
        const response = await axios.post("http://localhost:8080/api/models/request", formData);
        console.log("Model created successfully:", response.data);
        alert("Model created successfully!");
      } catch (error) {
        console.error("Error creating model:", error);
        alert("Failed to create the model. Please try again.");
      }
    };
     
    return (
        
    
<div className="ml-64 p-4">
    <InputForm onSubmit={handleFormSubmit}  ></InputForm>
</div>

    );

};

export default FormPage;