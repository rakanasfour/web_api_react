"use client";

import Table from "@/components/model/Table";
import { useEffect, useState } from "react";
import { fetchModel } from "@/services/api/modelAPIService"; 
export default function ModelPage() {
  const [models, setModels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadItems() {
      try {
        const data = await fetchModel(); // Fetch data using the itemAPIService
        setModels(data);
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
      <Table data={models} />
    </div>
  );
}
