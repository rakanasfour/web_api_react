"use client";

import Table from "@/components/itempicture/Table";
import { useEffect, useState } from "react";
import { fetchItemPictures } from "@/services/api/itemPictureAPIService"; 
export default function ItemPicturePage() {
  const [itemPictures, setItemPictures] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadItemPictures() {
      try {
        const data = await fetchItemPictures(); // Fetch data using the itemAPIService
        setItemPictures(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadItemPictures();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Table data={itemPictures} />
    </div>
  );
}
