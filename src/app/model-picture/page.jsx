"use client";

import Table from "@/components/modelpicture/Table";
import { useEffect, useState } from "react";
import { fetchModelPictures } from "@/services/api/modelPictureAPIService"; 
export default function ModelPage() {
  const [modelPictures, setModelPictures] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadModelPictures() {
      try {
        const data = await fetchModelPictures(); // Fetch data using the itemAPIService
        setModelPictures(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadModelPictures();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Table data={modelPictures} />
    </div>
  );
}
