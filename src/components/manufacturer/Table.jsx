
"use client";

import { useRouter } from "next/navigation"; 

import { useState } from "react";
import { updateManufacturer, deleteManufacturer } from "@/services/api/manufacturerAPIService";

export default function Example({ data: initialData }) {

  const router = useRouter();
  const handleClick = () => {
      router.push("/manufacturer/form");
    };
    const [data, setData] = useState(initialData);
    const [editingRow, setEditingRow] = useState(null);
    const [updatedValue, setUpdatedValue] = useState({
      manufacturerName: "",
      manufacturerDescription: "",
      manufacturerStatus: ""
    });

    const handleEditClick = (manufacturer) => {
      setEditingRow(manufacturer.manufacturerId);
      setUpdatedValue({
        manufacturerName: manufacturer.manufacturerName,
        manufacturerDescription: manufacturer.manufacturerDescription,
        manufacturerStatus: manufacturer.manufacturerStatus
      });
    };


    const handleSaveClick = async (manufacturerId) => {
      try {
        await updateManufacturer(manufacturerId, updatedValue);
        setData((prevData) =>
          prevData.map((manufacturer) =>
            manufacturer.manufacturerId === manufacturerId
              ? { ...manufacturer, ...updatedValue }
              : manufacturer
          )
        );
      } catch (error) {
        console.error("Error updating manufacturer:", error);
      } finally {
        setEditingRow(null);
      }
    };
  
    const handleDeleteClick = async (manufacturerId) => {
      const userConfirmed = window.confirm("Are you sure you want to delete this manufacturer?");
      if (!userConfirmed) {
        return; // Exit if the user cancels
      }
  
      try {
        await deleteManufacturer(manufacturerId);
        setData((prevData) =>
          prevData.filter((manufacturer) => manufacturer.manufacturerId !== manufacturerId)
        );
      } catch (error) {
        console.error("Error deleting manufacturer:", error);
      }
    };
  



  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Manufacturers table </h1>
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
            Add manufacturers
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
                  manufacturerName
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  manufacturerDescription
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  manufacturerStatus
                  </th>
  
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {data.map((manufacturer) => (
                  <tr key={manufacturer.manufacturerId}>


                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {editingRow === manufacturer.manufacturerId ? (
                        <input
                          type="text"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          value={updatedValue.manufacturerName}
                          onChange={(e) =>
                            setUpdatedValue((prev) => ({ ...prev, manufacturerName: e.target.value }))
                          }
                        />
                      ) : (
                        <div className="text-gray-900">{manufacturer.manufacturerName}</div>
                      )}
                    </td>



                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {editingRow === manufacturer.manufacturerId ? (
                        <input
                          type="text"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          value={updatedValue.manufacturerDescription}
                          onChange={(e) =>
                            setUpdatedValue((prev) => ({ ...prev, manufacturerDescription: e.target.value }))
                          }
                        />
                      ) : (
                        <div className="text-gray-900">{manufacturer.manufacturerDescription}</div>
                      )}
                    </td>



                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {editingRow === manufacturer.manufacturerId ? (
                        <input
                          type="text"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          value={updatedValue.manufacturerStatus}
                          onChange={(e) =>
                            setUpdatedValue((prev) => ({ ...prev, manufacturerStatus: e.target.value }))
                          }
                        />
                      ) : (
                        <div className="text-gray-900">
                          <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                           {manufacturer.manufacturerStatus}
                           </span>
                          </div>
                      )}
                    </td>



                    <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      {editingRow === manufacturer.manufacturerId ? (
                        <button
                          onClick={() => handleSaveClick(manufacturer.manufacturerId)}
                          className="text-green-600 hover:text-green-900 mr-2"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          onClick={() => handleEditClick(manufacturer)}
                          className="text-indigo-600 hover:text-indigo-900 mr-2"
                        >
                          Edit
                        </button>
                      )}
                      <button
                        onClick={() => handleDeleteClick(manufacturer.manufacturerId)}
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
