

"use client";

import { useRouter } from "next/navigation"; 
import { useState } from "react";
import { updateManufacturerFacility, deleteManufacturerFacility } from "@/services/api/manufacturerfacilityAPIService";

export default function Example({ data: initialData }) {

  const router = useRouter();
  const handleClick = () => {
      router.push("/manufacturer-facility/form");
    };

    const [data, setData] = useState(initialData);
    const [editingRow, setEditingRow] = useState(null);
    const [updatedValue, setUpdatedValue] = useState({
      facilityName: "",
      facilityCountry: "",
      facilityStatus: "",
      manufacturerId: ""
    });


    const handleEditClick = (facility) => {
      setEditingRow(facility.facilityId);
      setUpdatedValue({
        facilityName: facility.facilityName,
        facilityCountry: facility.facilityCountry,
        facilityStatus: facility.facilityStatus,
        manufacturerId: facility.manufacturerId,
      });
    };
  
   
  
    const handleSaveClick = async (facilityId) => {
      try {
        await updateManufacturerFacility(facilityId, updatedValue);
        setData((prevData) =>
          prevData.map((facility) =>
            facility.facilityId === facilityId
              ? { ...facility, ...updatedValue }
              : facility
          )
        );
      } catch (error) {
        console.error("Error updating facility:", error);
      } finally {
        setEditingRow(null);
      }
    };
  
    const handleDeleteClick = async (facilityId) => {
      const userConfirmed = window.confirm("Are you sure you want to delete this facility?");
      if (!userConfirmed) {
        return; // Exit if the user cancels
      }
  
      try {
        await deleteManufacturerFacility(facilityId);
        setData((prevData) =>
          prevData.filter((facility) => facility.facilityId !== facilityId)
        );
      } catch (error) {
        console.error("Error deleting facility:", error);
      }
    };
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">manufacturer facility</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleClick}
         >
            Add facility
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                  facility Name
                  </th>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                  facility Country
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  facility Status
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  manufacturerId
                  </th>
            
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {data.map((manufacturerFacility) => (
                  <tr key={manufacturerFacility.facilityId}>
                    


                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {editingRow === manufacturerFacility.facilityId ? (
                        <input
                          type="text"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          value={updatedValue.facilityName}
                          onChange={(e) =>
                            setUpdatedValue((prev) => ({ ...prev, facilityName: e.target.value }))
                          }
                        />
                      ) : (
                        <div className="text-gray-900">{manufacturerFacility.facilityName}</div>
                      )}
                    </td>


                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {editingRow === manufacturerFacility.facilityId ? (
                        <input
                          type="text"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          value={updatedValue.facilityCountry}
                          onChange={(e) =>
                            setUpdatedValue((prev) => ({ ...prev, facilityCountry: e.target.value }))
                          }
                        />
                      ) : (
                        <div className="text-gray-900">{manufacturerFacility.facilityCountry}</div>
                      )}
                    </td>



                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {editingRow === manufacturerFacility.facilityId ? (
                        <input
                          type="text"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          value={updatedValue.facilityStatus}
                          onChange={(e) =>
                            setUpdatedValue((prev) => ({ ...prev, facilityStatus: e.target.value }))
                          }
                        />
                      ) : (
                        <div className="text-gray-900">
                          
                          <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                  {manufacturerFacility.facilityStatus}
                           </span>
          
                          </div>
                      )}
                    </td>



                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {editingRow === manufacturerFacility.facilityId ? (
                        <input
                          type="text"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          value={updatedValue.manufacturerId}
                          onChange={(e) =>
                            setUpdatedValue((prev) => ({ ...prev, manufacturerId: e.target.value }))
                          }
                        />
                      ) : (
                        <div className="text-gray-900">{manufacturerFacility.manufacturerId}</div>
                      )}
                    </td>



                    <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      {editingRow === manufacturerFacility.facilityId ? (
                        <button
                          onClick={() => handleSaveClick(manufacturerFacility.facilityId)}
                          className="text-green-600 hover:text-green-900 mr-2"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          onClick={() => handleEditClick(manufacturerFacility)}
                          className="text-indigo-600 hover:text-indigo-900 mr-2"
                        >
                          Edit
                        </button>
                      )}
                      <button
                        onClick={() => handleDeleteClick(manufacturerFacility.facilityId)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>


           
                 
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
