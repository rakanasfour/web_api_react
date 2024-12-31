"use client";

import Table from "@/components/item/Table";
import { useEffect, useState } from "react";
//import { fetchItems } from "@/services/api/itemAPIService"; 
import { fetchItemsChannel } from "@/services/api/itemAPIService"; 
export default function ItemPage({ params }) {
  const { channel } = params; // Extract channel from params
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (channel) {
    async function loadItems() {
      try {
        const data = await fetchItemsChannel(channel); // Pass channel dynamically
        setItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadItems();
  }
  }, [channel]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Table data={items} />
    </div>
  );
}
