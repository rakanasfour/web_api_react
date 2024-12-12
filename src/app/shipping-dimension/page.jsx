"use client";

import Table from "@/components/shippingdimension/Table";
import { useEffect, useState } from "react";
import { fetchShippingDimensions } from "@/services/api/shippingDimensionAPIService"; 
export default function ItemPage() {
  const [shippingDimensions, setShippingDimensions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadItems() {
      try {
        const data = await fetchShippingDimensions(); // Fetch data using the itemAPIService
        setShippingDimensions(data);
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
      <Table data={shippingDimensions} />
    </div>
  );
}
