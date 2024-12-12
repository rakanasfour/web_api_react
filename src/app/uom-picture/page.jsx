"use client";

import Table from "@/components/uompicture/Table";
import { useEffect, useState } from "react";
import { fetchUomPictures } from "@/services/api/uomPictureAPIService"; 
export default function UomPicturePage() {
  const [uomPictures, setUomPictures] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadUomPictures() {
      try {
        const data = await fetchUomPictures(); // Fetch data using the itemAPIService
        setUomPictures(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadUomPictures();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Table data={uomPictures} />
    </div>
  );
}
