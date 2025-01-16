

"use client";
import { useRouter } from "next/navigation"; 
import { useState } from "react";
import { updateModel, deleteModel } from "@/services/api/modelAPIService";


export default function Example({ data: initialData }) {
  const router = useRouter();
  const [data, setData] = useState(initialData);
  const [editingRow, setEditingRow] = useState(null);
  const [updatedValue, setUpdatedValue] = useState({
    modelName: "",
    modelDescription: "",
    brandId:""
  });
  const handleClick = () => {
      router.push("/model/form");
    };

    const handleEditClick = (model) => {
      setEditingRow(model.modelId);
      setUpdatedValue({
        modelName: model.modelName,
        modelDescription: model.modelDescription,
        brandId: model.brandId,
      });
    };


    const handleSaveClick = async (modelId) => {
      try {
        await updateModel(modelId, updatedValue);
        setData((prevData) =>
          prevData.map((model) =>
            model.modelId === modelId
              ? { ...model, ...updatedValue }
              : model
          )
        );
      } catch (error) {
        console.error("Error updating model:", error);
      } finally {
        setEditingRow(null);
      }
    };



  const handleDeleteClick = async (modelId) => {
    const userConfirmed = window.confirm("Are you sure you want to delete this Model?");
    if (!userConfirmed) {
      return; // Exit if the user cancels
    }

    try {
      await deleteModel(modelId);
      setData((prevData) =>
        prevData.filter((model) => model.modelId !== modelId)
      );
    } catch (error) {
      console.error("Error deleting model:", error);
    }
  };




  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Models Table</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the Model in your account including their name, title, email and role.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleClick}
          >
            Add Model
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
                  model Description
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  brand Id
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  modelPictures
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {data.map((model) => (
                  <tr key={model.modelId}>
                    
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    {editingRow === model.modelId ? (
                        <input
                          type="text"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          value={updatedValue.modelName}
                          onChange={(e) =>
                            setUpdatedValue((prev) => ({ ...prev, modelName: e.target.value }))
                          }
                        />
                      ) : (
                        <div className="text-gray-900">{model.modelName}</div>
                      )}
                    </td>
                 
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    {editingRow === model.modelId ? (
                        <input
                          type="text"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          value={updatedValue.modelDescription}
                          onChange={(e) =>
                            setUpdatedValue((prev) => ({ ...prev, modelDescription: e.target.value }))
                          }
                        />
                      ) : (
                        <div className="text-gray-900">{model.modelDescription}</div>
                      )}
                    </td>



                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    {editingRow === model.modelId ? (
                        <input
                          type="text"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          value={updatedValue.brandId}
                          onChange={(e) =>
                            setUpdatedValue((prev) => ({ ...prev, brandId: e.target.value }))
                          }
                        />
                      ) : (
                        <div className="text-gray-900">{model.brandId}</div>
                      )}
                    </td>


                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <div className="text-gray-900">{}</div>
                    </td>
                    <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      {editingRow === model.modelId ? (
                        <button
                          onClick={() => handleSaveClick(model.modelId)}
                          className="text-green-600 hover:text-green-900 mr-2"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          onClick={() => handleEditClick(model)}
                          className="text-indigo-600 hover:text-indigo-900 mr-2"
                        >
                          Edit
                        </button>
                      )}
                      <button
                        onClick={() => handleDeleteClick(model.modelId)}
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
