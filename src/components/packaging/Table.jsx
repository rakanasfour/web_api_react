"use client";

import { useRouter } from "next/navigation"; 
import { useState } from "react";
import { updatePackaging, deletePackaging } from "@/services/api/packagingAPIService";

export default function Example({ data: initialData }) {
  
    const router = useRouter();
    const [data, setData] = useState(initialData);
    const [editingRow, setEditingRow] = useState(null);
    const [updatedValue, setUpdatedValue] = useState({
      packagingType: ""
    });

    const handleClick = () => {
      router.push("/packaging/form");
    };

    const handleEditClick = (packaging) => {
      setEditingRow(packaging.packagingId);
      setUpdatedValue({
        packagingType: packaging.packagingType
        
      });
    };


    const handleSaveClick = async (packagingId) => {
      try {
        await updatePackaging(packagingId, updatedValue);
        setData((prevData) =>
          prevData.map((packaging) =>
            packaging.packagingId === packagingId
              ? { ...packaging, ...updatedValue }
              : packaging
          )
        );
      } catch (error) {
        console.error("Error updating packaging:", error);
      } finally {
        setEditingRow(null);
      }
    };


    const handleDeleteClick = async (packagingId) => {
      const userConfirmed = window.confirm("Are you sure you want to delete this distributor?");
      if (!userConfirmed) {
        return; // Exit if the user cancels
      }
  
      try {
        await deletePackaging(packagingId);
        setData((prevData) =>
          prevData.filter((packaging) => packaging.packagingId !== packagingId)
        );
      } catch (error) {
        console.error("Error deleting distributor:", error);
      }
    };
  

    return (
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold text-gray-900">Packaging list</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all Packaging list
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleClick}

            >
              Add Packaging
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
                    Packaging Id
                    </th>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Packaging Type 

                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {data.map((packaging) => (
                    <tr key={packaging.packagingId}>
                      
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <div className="text-gray-900">{packaging.packagingId}</div>
                      </td>


                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {editingRow === packaging.packagingId ? (
                        <input
                          type="text"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          value={updatedValue.packagingType}
                          onChange={(e) =>
                            setUpdatedValue((prev) => ({ ...prev, packagingType: e.target.value }))
                          }
                        />
                      ) : (
                        <div className="text-gray-900">{packaging.packagingType}</div>
                      )}
                    </td>


                    <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      {editingRow === packaging.packagingId ? (
                        <button
                          onClick={() => handleSaveClick(packaging.packagingId)}
                          className="text-green-600 hover:text-green-900 mr-2"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          onClick={() => handleEditClick(packaging)}
                          className="text-indigo-600 hover:text-indigo-900 mr-2"
                        >
                          Edit
                        </button>
                      )}
                      <button
                        onClick={() => handleDeleteClick(packaging.packagingId)}
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
  