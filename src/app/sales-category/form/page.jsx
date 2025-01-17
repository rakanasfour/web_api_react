"use client";
import InputForm from"@/components/salescategory/InputForm"
import axios from "axios";
export default function form() {

    const handleFormSubmit =async (formData)=>{

        console.log("Form Data Submited:", formData);

        try {
            const respose = await axios.post("http://localhost:8080/api/sales-categories/request",formData);
            console.log("sales category was created successfully:", respose.data);
            alert("sales category created Successfully !");

        } catch (error){
            console.error("error created Manufacturer facilites:", error);
            alert("Failed to created the manufacturer. Please try again.");
        }
    };
    return (
        
        
<div className="ml-64 p-4">
    <InputForm onSubmit={handleFormSubmit}></InputForm>
</div>

    );

}