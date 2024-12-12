"use client";

import Table from "@/components/brand/Table";
import { useEffect, useState } from "react";
import { fetchBrand } from "@/services/api/brandAPIService"; 
export default function BrandPage() {
  const [brands, setBrands] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadBrands() {
      try {
        const data = await fetchBrand(); // Fetch data using the itemAPIService
        setBrands(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadBrands();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Table data={brands} />
    </div>
  );
}
