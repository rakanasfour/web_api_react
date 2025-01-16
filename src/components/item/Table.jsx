
"use client";

import { useRouter } from "next/navigation"; 
import { useState } from "react";
import { updateItem, deleteItem } from "@/services/api/itemAPIService";

export default function Example({ data: initialData }) {

  const router = useRouter();
  const handleClick = () => {
      router.push("/item/form");
    };

    const [data, setData] = useState(initialData);
    const [editingRow, setEditingRow] = useState(null);
    const [updatedValue, setUpdatedValue] = useState({
      itemName: "",
      itemSku: "",
      itemDescription: "",
      itemStatus: "",
      modelId:""
    });

    const handleEditClick = (item) => {
      setEditingRow(item.itemId);
      setUpdatedValue({
        itemName: item.itemName,
        itemSku: item.itemSku,
        itemDescription: item.itemDescription,
        itemStatus: item.itemStatus,
        modelId: item.modelId
      });
    };


    const handleSaveClick = async (itemId) => {
      try {
        await updateItem(itemId, updatedValue);
        setData((prevData) =>
          prevData.map((item) =>
            item.itemId === itemId
              ? { ...item, ...updatedValue }
              : item
          )
        );
      } catch (error) {
        console.error("Error updating item:", error);
      } finally {
        setEditingRow(null);
      }
    };


    const handleDeleteClick = async (itemId) => {
      const userConfirmed = window.confirm("Are you sure you want to delete this distributor?");
      if (!userConfirmed) {
        return; // Exit if the user cancels
      }
  
      try {
        await deleteItem(itemId);
        setData((prevData) =>
          prevData.filter((item) => item.itemId !== itemId)
        );
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    };



  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Users</h1>
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
            Add item
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
                    Picture
                  </th>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Name
                  </th>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                   Sku
                  </th>

                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                  item Description
                  </th>

                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                  model Id
                  </th>


                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                   Quantity Available
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Base Price
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Status
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
           <tbody className="divide-y divide-gray-200 bg-white">
              {data.map((item) => (
                <tr key={item.itemId}>
                  <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                    <div className="flex items-center space-x-3">
                      {item.itemPictures.map((itemPicture) => (
                        <div key={itemPicture.id} className="w-11 h-11 shrink-0">
                          <img
                            alt={itemPicture.altText || "Item Picture"}
                            src={itemPicture.itemPictureMain}
                            className="w-full h-full rounded-full"
                          />
                        </div>
                      ))}
                    </div>
                  </td>


                  <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {editingRow === item.itemId ? (
                        <input
                          type="text"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          value={updatedValue.itemName}
                          onChange={(e) =>
                            setUpdatedValue((prev) => ({ ...prev, itemName: e.target.value }))
                          }
                        />
                      ) : (
                        <div className="text-gray-900">{item.itemName}</div>
                      )}
                    </td>



                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {editingRow === item.itemId ? (
                        <input
                          type="text"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          value={updatedValue.itemSku}
                          onChange={(e) =>
                            setUpdatedValue((prev) => ({ ...prev, itemSku: e.target.value }))
                          }
                        />
                      ) : (
                        <div className="text-gray-900">{item.itemSku}</div>
                      )}
                    </td>


                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {editingRow === item.itemId ? (
                        <input
                          type="text"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          value={updatedValue.itemDescription}
                          onChange={(e) =>
                            setUpdatedValue((prev) => ({ ...prev, itemDescription: e.target.value }))
                          }
                        />
                      ) : (
                        <div className="text-gray-900">{item.itemDescription}</div>
                      )}
                    </td>

                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {editingRow === item.itemId ? (
                        <input
                          type="text"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          value={updatedValue.modelId}
                          onChange={(e) =>
                            setUpdatedValue((prev) => ({ ...prev, modelId: e.target.value }))
                          }
                        />
                      ) : (
                        <div className="text-gray-900">{item.modelId}</div>
                      )}
                    </td>
      



                  <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                  {item.uoms.map((uom) => (
                    <div key={uom.uomId} className="text-gray-900">{uom.uomType}</div>

                  ))}
                  </td>





                  <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    {item.uoms?.[0]?.manufacturerPricing?.pricingList ? (
                      <div className="text-gray-900">{item.uoms[0].manufacturerPricing.pricingList}</div>
                    ) : (
                      <div className="text-gray-500">N/A</div>
                    )}
                  </td>


                  


                  <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {editingRow === item.itemId ? (
                        <input
                          type="text"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          value={updatedValue.itemStatus}
                          onChange={(e) =>
                            setUpdatedValue((prev) => ({ ...prev, itemStatus: e.target.value }))
                          }
                        />
                      ) : (
                        <div className="text-gray-900">{item.itemStatus}</div>
                      )}
                    </td>

                    

                  <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                    <a
                      href={`item/display/${item.itemId}`}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Select
                    </a>
                  </td>

                  <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      {editingRow === item.itemId ? (
                        <button
                          onClick={() => handleSaveClick(item.itemId)}
                          className="text-green-600 hover:text-green-900 mr-2"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          onClick={() => handleEditClick(item)}
                          className="text-indigo-600 hover:text-indigo-900 mr-2"
                        >
                          Edit
                        </button>
                      )}
                      <button
                        onClick={() => handleDeleteClick(item.itemId)}
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
