"use client";

import Table from "@/components/brand/Table";
import { useEffect, useState } from "react";
import { fetchBrandWithPaging } from "@/services/api/brandAPIService"; 
export default function BrandPage() {
  const [brands, setBrands] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0); // Track current page
  const [totalPages, setTotalPages] = useState(1); // Total pages from backend
  useEffect(() => {
    async function loadBrands() {
      setIsLoading(true);
      try {
        const data = await fetchBrandWithPaging(currentPage, 5); // Fetch data using the itemAPIService
        setBrands(data.content);
        setTotalPages(data.totalPages); // Assuming backend returns `totalPages`
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadBrands();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Table data={brands} />
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
          className="px-4 py-2 text-white bg-gray-600 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <p>
          Page {currentPage + 1} of {totalPages}
        </p>
        <button
          onClick={handleNextPage}
          disabled={currentPage >= totalPages - 1}
          className="px-4 py-2 text-white bg-gray-600 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
