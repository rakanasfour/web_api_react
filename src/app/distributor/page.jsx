"use client";

import Table from "@/components/distributor/Table";
import { useEffect, useState } from "react";
import { fetchDistributor} from "@/services/api/distributorAPIService"; 
export default function DistributorPage() {
  const [distributors, setDistributors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadDistributors() {
      try {
        const data = await fetchDistributor(); // Fetch data using the itemAPIService
        setDistributors(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadDistributors();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Table data={distributors} />
    </div>
  );
}
