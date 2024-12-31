"use client";
import InputForm from"@/components/distributor/InputForm"
import axios from "axios";
export default function form() {

    const handleFormSubmit = async (formData) => {
        console.log("Form Data Submitted:", formData);
    
        try {
          // Send the data to the backend
          const response = await axios.post("http://localhost:8080/api/distributors/request", formData);
          console.log("Distributor created successfully:", response.data);
          alert("Distributor created successfully!");
        } catch (error) {
          console.error("Error creating Distributor:", error);
          alert("Failed to create the Distributor. Please try again.");
        }
      };
    return (
        
        
<div className="ml-64 p-4">
    <InputForm onSubmit={handleFormSubmit}></InputForm>
</div>

    );

}