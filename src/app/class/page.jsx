"use client";

import Table from "@/components/class/Table";
import { useEffect, useState } from "react";
import { fetchClasses } from "@/services/api/classAPIService"; 
export default function SalesCategoryage() {
  const [classes, setClasses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadClasses() {
      try {
        const data = await fetchClasses(); // Fetch data using the itemAPIService
        setClasses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadClasses();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Table data={classes} />
    </div>
  );
}
