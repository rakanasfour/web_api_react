"use client";

import Table from "@/components/salescategory/Table";
import { useEffect, useState } from "react";
import { fetchSalesCategories } from "@/services/api/salesCategoryAPIService"; 
export default function SalesCategoryage() {
  const [salescCategories, setSalesCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadSalescCategories() {
      try {
        const data = await fetchSalesCategories(); // Fetch data using the itemAPIService
        setSalesCategories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadSalescCategories();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Table data={salescCategories} />
    </div>
  );
}
