"use client";

import Table from "@/components/documentstorage/Table";
import { useEffect, useState } from "react";
import { fetchDocumentStorage} from "@/services/api/documentStorageAPIService"; 
export default function DocumentStoragesPage() {
  const [documentStorages, setDocumentStorages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadDocumentStorages() {
      try {
        const data = await fetchDocumentStorage(); // Fetch data using the itemAPIService
        setDocumentStorages(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadDocumentStorages();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Table data={documentStorages} />
    </div>
  );
}
