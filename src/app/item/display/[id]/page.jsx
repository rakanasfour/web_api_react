"use client";

//import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ProductPage from "@/components/ProductPage";
import { fetchItemById } from "@/services/api/itemAPIService";

export default function DisplayItemPage({ params }) {
  const { id } = params;
  //const router = useRouter();
 // const {id} = router.query; // Extract the itemId from the URL

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      async function loadItem() {
        try {
          const data = await fetchItemById(id); // Pass the id to the API function
          setItem(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      loadItem();
    }
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <ProductPage data={item}></ProductPage>
    </div>
  );
}
