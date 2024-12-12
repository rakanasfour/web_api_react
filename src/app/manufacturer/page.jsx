"use client";

import Table from "@/components/manufacturer/Table";
import { useEffect, useState } from "react";
import { fetchManufacturers } from "@/services/api/manufacturerAPIService"; 
export default function ManufacturerPage() {
  const [manufacturers, setManufacturers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadManufacturers() {
      try {
        const data = await fetchManufacturers(); // Fetch data using the itemAPIService
        setManufacturers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadManufacturers();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Table data={manufacturers} />
    </div>
  );
}
