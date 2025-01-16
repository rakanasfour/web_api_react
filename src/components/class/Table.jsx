"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { updateClass, deleteClass } from "@/services/api/classAPIService";

export default function Example({ data: initialData }) {
  const router = useRouter();
  const [data, setData] = useState(initialData);
  const [editingRow, setEditingRow] = useState(null);
  const [updatedValue, setUpdatedValue] = useState("");

  const handleEditClick = (classEntity) => {
    setEditingRow(classEntity.classId);
    setUpdatedValue(classEntity.className);
  };

  const handleAddClick = () => {
    router.push("/class/form");
  };

  const handleSaveClick = async (classId) => {
    try {
      await updateClass(classId, updatedValue);
      setData((prevData) =>
        prevData.map((classEntity) =>
          classEntity.classId === classId
            ? { ...classEntity, className: updatedValue }
            : classEntity
        )
      );
    } catch (error) {
      console.error("Error updating class:", error);
    } finally {
      setEditingRow(null);
    }
  };

  const handleDeleteClick = async (classId) => {
    const userConfirmed = window.confirm("Are you sure you want to delete this class?");
    if (!userConfirmed) {
      return; // Exit if the user cancels
    }

    try {
      await deleteClass(classId);
      setData((prevData) =>
        prevData.filter((classEntity) => classEntity.classId !== classId)
      );
    } catch (error) {
      console.error("Error deleting class:", error);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Classes</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the classes
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleAddClick}
          >
            Add Classes
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
                    Class Name
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {data.map((classEntity) => (
                  <tr key={classEntity.classId}>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {editingRow === classEntity.classId ? (
                        <input
                          type="text"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          value={updatedValue}
                          onChange={(e) => setUpdatedValue(e.target.value)}
                        />
                      ) : (
                        <div className="text-gray-900">{classEntity.className}</div>
                      )}
                    </td>
                    <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      {editingRow === classEntity.classId ? (
                        <button
                          onClick={() => handleSaveClick(classEntity.classId)}
                          className="text-green-600 hover:text-green-900 mr-2"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          onClick={() => handleEditClick(classEntity)}
                          className="text-indigo-600 hover:text-indigo-900 mr-2"
                        >
                          Edit
                        </button>
                      )}
                      <button
                        onClick={() => handleDeleteClick(classEntity.classId)}
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
