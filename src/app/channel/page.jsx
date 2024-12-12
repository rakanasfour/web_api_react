"use client";

import Table from "@/components/channel/Table";
import { useEffect, useState } from "react";
import { fetchItem } from "@/services/api/itemAPIService"; 
export default function ItemPage() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadItems() {
      try {
        const data = await fetchItem(); // Fetch data using the itemAPIService
        setItems(data);
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
      <Table data={items} />
    </div>
  );
}
