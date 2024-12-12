"use client";

import Table from "@/components/uom/Table";
import { useEffect, useState } from "react";
import { fetchUom } from "@/services/api/uomAPIService"; 
export default function ItemPage() {
  const [uoms, setUoms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadUoms() {
      try {
        const data = await fetchUom(); // Fetch data using the itemAPIService
        setUoms(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadUoms();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Table data={uoms} />
    </div>
  );
}
