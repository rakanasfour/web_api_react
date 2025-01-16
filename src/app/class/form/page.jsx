"use client";
import InputForm from"@/components/class/InputForm"
import axios from "axios";
export default function form() {

    const handleFormSubmit =async (formData)=>{

        console.log("Form Data Submited:", formData);

        try {
            const respose = await axios.post("http://localhost:8080/api/classes/request",formData);
            console.log("class was created successfully:", respose.data);
            alert("class created Successfully !");

        } catch (error){
            console.error("error created class :", error);
            alert("Failed to created the class. Please try again.");
        }
    };
    return (
        
        
<div className="ml-64 p-4">
    <InputForm onSubmit={handleFormSubmit}></InputForm>
</div>

    );

}