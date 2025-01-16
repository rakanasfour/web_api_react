"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { updateDistributor, deleteDistributor } from "@/services/api/distributorAPIService";

export default function Example({ data: initialData }) {
  const router = useRouter();
  const handleAddClick = () => {
    router.push("/distributor/form");
  };
  const [data, setData] = useState(initialData);
  const [editingRow, setEditingRow] = useState(null);
  const [updatedValue, setUpdatedValue] = useState({
    distributorName: "",
    distributorAddress: "",
    distributorCountry: "",
    distributorStatus: "",
  });

  const handleEditClick = (distributor) => {
    setEditingRow(distributor.distributorId);
    setUpdatedValue({
      distributorName: distributor.distributorName,
      distributorAddress: distributor.distributorAddress,
      distributorCountry: distributor.distributorCountry,
      distributorStatus: distributor.distributorStatus,
    });
  };

 

  const handleSaveClick = async (distributorId) => {
    try {
      await updateDistributor(distributorId, updatedValue);
      setData((prevData) =>
        prevData.map((distributor) =>
          distributor.distributorId === distributorId
            ? { ...distributor, ...updatedValue }
            : distributor
        )
      );
    } catch (error) {
      console.error("Error updating distributor:", error);
    } finally {
      setEditingRow(null);
    }
  };

  const handleDeleteClick = async (distributorId) => {
    const userConfirmed = window.confirm("Are you sure you want to delete this distributor?");
    if (!userConfirmed) {
      return; // Exit if the user cancels
    }

    try {
      await deleteDistributor(distributorId);
      setData((prevData) =>
        prevData.filter((distributor) => distributor.distributorId !== distributorId)
      );
    } catch (error) {
      console.error("Error deleting distributor:", error);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Distributors</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the distributors in your account including their name, address, country, and status.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleAddClick}
          >
            Add Distributor
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Distributor Name
                  </th>
                  <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Distributor Address
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Distributor Country
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Distributor Status
                  </th>
                  <th className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {data.map((distributor) => (
                  <tr key={distributor.distributorId}>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {editingRow === distributor.distributorId ? (
                        <input
                          type="text"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          value={updatedValue.distributorName}
                          onChange={(e) =>
                            setUpdatedValue((prev) => ({ ...prev, distributorName: e.target.value }))
                          }
                        />
                      ) : (
                        <div className="text-gray-900">{distributor.distributorName}</div>
                      )}
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {editingRow === distributor.distributorId ? (
                        <input
                          type="text"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          value={updatedValue.distributorAddress}
                          onChange={(e) =>
                            setUpdatedValue((prev) => ({ ...prev, distributorAddress: e.target.value }))
                          }
                        />
                      ) : (
                        <div className="text-gray-900">{distributor.distributorAddress}</div>
                      )}
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {editingRow === distributor.distributorId ? (
                        <input
                          type="text"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          value={updatedValue.distributorCountry}
                          onChange={(e) =>
                            setUpdatedValue((prev) => ({ ...prev, distributorCountry: e.target.value }))
                          }
                        />
                      ) : (
                        <div className="text-gray-900">{distributor.distributorCountry}</div>
                      )}
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {editingRow === distributor.distributorId ? (
                        <input
                          type="text"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          value={updatedValue.distributorStatus}
                          onChange={(e) =>
                            setUpdatedValue((prev) => ({ ...prev, distributorStatus: e.target.value }))
                          }
                        />
                      ) : (
                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                          {distributor.distributorStatus}
                        </span>
                      )}
                    </td>
                    <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      {editingRow === distributor.distributorId ? (
                        <button
                          onClick={() => handleSaveClick(distributor.distributorId)}
                          className="text-green-600 hover:text-green-900 mr-2"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          onClick={() => handleEditClick(distributor)}
                          className="text-indigo-600 hover:text-indigo-900 mr-2"
                        >
                          Edit
                        </button>
                      )}
                      <button
                        onClick={() => handleDeleteClick(distributor.distributorId)}
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
  );
}
