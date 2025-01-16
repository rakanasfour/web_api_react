"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { updateBrand, deleteBrand } from "@/services/api/brandAPIService";


export default function Example({  data: initialData }) {
  const router = useRouter();
  const handleClick = () => {
      router.push("/brand/form");
    };


    const [data, setData] = useState(initialData);
  const [editingRow, setEditingRow] = useState(null);
  const [updatedValue, setUpdatedValue] = useState({
    brandName: "",
    brandDescription: "",
    brandStatus: "",
    manufacturerId: ""
  });

  const handleEditClick = (brand) => {
    setEditingRow(brand.brandId);
    setUpdatedValue({
      brandName: brand.brandName,
      brandDescription: brand.brandDescription,
      brandStatus: brand.brandStatus,
      manufacturerId: brand.manufacturerId,
    });
  };

 

  const handleSaveClick = async (brandId) => {
    try {
      await updateBrand(brandId, updatedValue);
      setData((prevData) =>
        prevData.map((brand) =>
          brand.brandId === brandId
            ? { ...brand, ...updatedValue }
            : brand
        )
      );
    } catch (error) {
      console.error("Error updating brand:", error);
    } finally {
      setEditingRow(null);
    }
  };

  const handleDeleteClick = async (brandId) => {
    const userConfirmed = window.confirm("Are you sure you want to delete this brand?");
    if (!userConfirmed) {
      return; // Exit if the user cancels
    }

    try {
      await deleteBrand(brandId);
      setData((prevData) =>
        prevData.filter((brand) => brand.brandId !== brandId)
      );
    } catch (error) {
      console.error("Error deleting brand:", error);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Brands</h1>
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
            Add brand
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
                    Name
                  </th>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                  brandDescription
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Status
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
                {data.map((brand) => (
                  <tr key={brand.brandId}>


                  <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {editingRow === brand.brandId ? (
                        <input
                          type="text"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          value={updatedValue.brandName}
                          onChange={(e) =>
                            setUpdatedValue((prev) => ({ ...prev, brandName: e.target.value }))
                          }
                        />
                      ) : (
                        <div className="text-gray-900">{brand.brandName}</div>
                      )}
                    </td>



                  <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {editingRow === brand.brandId ? (
                        <input
                          type="text"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          value={updatedValue.brandDescription}
                          onChange={(e) =>
                            setUpdatedValue((prev) => ({ ...prev, brandDescription: e.target.value }))
                          }
                        />
                      ) : (
                        <div className="text-gray-900">{brand.brandDescription}</div>
                      )}
                    </td>



                  <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {editingRow === brand.brandId ? (
                        <input
                          type="text"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          value={updatedValue.brandStatus}
                          onChange={(e) =>
                            setUpdatedValue((prev) => ({ ...prev, brandStatus: e.target.value }))
                          }
                        />
                      ) : (
                        <div className="text-gray-900">
                          
                      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      {brand.brandStatus}
                      </span>
                          
                          </div>
                      )}
                    </td>



                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {editingRow === brand.brandId ? (
                        <input
                          type="text"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          value={updatedValue.manufacturerId}
                          onChange={(e) =>
                            setUpdatedValue((prev) => ({ ...prev, manufacturerId: e.target.value }))
                          }
                        />
                      ) : (
                        <div className="text-gray-900">{brand.manufacturerId}</div>
                      )}
                    </td>


                    <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      {editingRow === brand.brandId ? (
                        <button
                          onClick={() => handleSaveClick(brand.brandId)}
                          className="text-green-600 hover:text-green-900 mr-2"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          onClick={() => handleEditClick(brand)}
                          className="text-indigo-600 hover:text-indigo-900 mr-2"
                        >
                          Edit
                        </button>
                      )}
                      <button
                        onClick={() => handleDeleteClick(brand.brandId)}
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
