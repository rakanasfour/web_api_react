"use client";
import InputForm from"@/components/manufacturerfacility/InputForm"
import axios from "axios";
export default function form() {
    const handleFormSubmit =async (formData)=>{

        console.log("Form Data Submited:", formData);

        try {
            const respose = await axios.post("http://localhost:8080/api/manufacturer-facilities/request",formData);
            console.log("manufacturer facilities was created successfully:", respose.data);
            alert("manufacturer facilites created Successfully !");

        } catch (error){
            console.error("error created Manufacturer facilites:", error);
            alert("Failed to created the manufacturer. Please try again.");
        }
    };
    return (
<div className="ml-64 p-4">
    <InputForm onsubmit={handleFormSubmit}></InputForm>
</div>

    );

}

