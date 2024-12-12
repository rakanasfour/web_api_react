"use client";

import Table from "@/components/manufacturerpricing/Table";
import { useEffect, useState } from "react";
import { fetchManufacturerPricings } from "@/services/api/manufacturerPricingAPIService"; 
export default function ManufacturerPricingPage() {
  const [manufacturerPricings, setManufacturerPricings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadItems() {
      try {
        const data = await fetchManufacturerPricings(); // Fetch data using the itemAPIService
        setManufacturerPricings(data);
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
      <Table data={manufacturerPricings} />
    </div>
  );
}
