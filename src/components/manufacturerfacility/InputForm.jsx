
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function Example({onsubmit}) {

  const [manufacturers, setManufacturers] = useState([]);
  const [selectdManufacturerId, setSelectedManufacturerId] = useState("");
  const [facilityName, setFacilityName]= useState("");
  const [facilityCountry, setFacilityCountry]= useState("");
  const [facilityStatus, setFacilityStatus] = useState("ACTIVE");

  useEffect(()=>{

    const fetchManufacturers = async ()=> {
      try{

        const response = await axios.get('http://localhost:8080/api/manufacturers');
        setManufacturers(response.data);
      } catch(error){

        console.error("Error fetching Manufacturer:", error);
      }
    };
    fetchManufacturers();

  },[]);

  const handleSubmit =(e)=>{
    e.preventDefault();

    if(!selectdManufacturerId || !facilityName || !facilityCountry || !facilityStatus){
      alert("Please fill in  all required fields.");
      return;
    }     
      const formData = {manufacturerId: selectdManufacturerId, facilityName,facilityCountry,facilityStatus };
      onsubmit(formData);

  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">Manufacturer Facility form</h2>
          <p className="mt-1 text-sm/6 text-gray-600">please fill the blank with the required field</p>


          <label htmlFor="manufacturerDropdown" className="text-gray-700 font-bold">Select a Manufacturer: </label>
          <select
            id="manufacturerDropdown"
            value={selectdManufacturerId}
            onChange={(e) => setSelectedManufacturerId(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="">-- Select a manufacturer --</option>
            {manufacturers.map((manufacturer) => (
              <option key={manufacturer.manufacturerId} value={manufacturer.manufacturerId}>
                {manufacturer.manufacturerName}
              </option>
            ))}
            
          </select>


          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label htmlFor="facilityName" className="block text-sm/6 font-medium text-gray-900">
              facility Name
              </label>
              <div className="mt-2">
                <input
                  id="facilityName"
                  name="facilityName"
                  onChange={(e) => setFacilityName(e.target.value)}
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="facilityCountry" className="block text-sm/6 font-medium text-gray-900">
              facility Country              </label>
              <div className="mt-2">
                <input
                  id="facilityCountry"
                  name="facilityCountry"
                  onChange={(e) => setFacilityCountry(e.target.value)}
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
  



            <div className="sm:col-span-3">
              <label htmlFor="facilityStatus" className="block text-sm/6 font-medium text-gray-900">
               status
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="facilityStatus"
                  name="facilityStatus"
                  onChange={(e) => setFacilityStatus(e.target.value)}
                  autoComplete="facilityStatus"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >

                  <option value="ACTIVE" >ACTIVE</option>
                  <option value="INACTIVE">INACTIVE</option>
=                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>



          </div>
        </div>


      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm/6 font-semibold text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}
