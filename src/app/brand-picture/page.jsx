"use client";

import Table from "@/components/brandpicture/Table";
import { useEffect, useState } from "react";
import { fetchBrandPicture} from "@/services/api/brandPictureAPIService"; 
export default function BrandPicturePage() {
  const [brandPictures, setBrandPictures] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadBrandPictures() {
      try {
        const data = await fetchBrandPicture(); // Fetch data using the itemAPIService
        setBrandPictures(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadBrandPictures();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Table data={brandPictures} />
    </div>
  );
}
