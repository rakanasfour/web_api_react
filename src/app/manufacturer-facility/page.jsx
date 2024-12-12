"use client";

import Table from "@/components/manufacturerfacility/Table";
import { useEffect, useState } from "react";
import { fetchManufacturerFacilities } from "@/services/api/manufacturerfacilityAPIService"; 
export default function ItemPage() {
  const [manufacturerfacilities, setManufacturerFacilities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadManufacturerFacilities() {
      try {
        const data = await fetchManufacturerFacilities(); // Fetch data using the itemAPIService
        setManufacturerFacilities(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadManufacturerFacilities();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Table data={manufacturerfacilities} />
    </div>
  );
}
