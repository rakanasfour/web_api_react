"use client";

import Table from "@/components/packaging/Table";
import { useEffect, useState } from "react";
import { fetchPackaging } from "@/services/api/packagingAPIService"; 
export default function ItemPage() {
  const [packaging, setPackaging] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadItems() {
      try {
        const data = await fetchPackaging(); // Fetch data using the itemAPIService
        setPackaging(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadItems();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Table data={packaging} />
    </div>
  );
}
