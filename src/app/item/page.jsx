"use client";

import { useRouter } from "next/navigation"; 
import Table from "@/components/item/Table";
import { useEffect, useState } from "react";
import { fetchItemsAdminWithpaging } from "@/services/api/itemAPIService";
import SearchComponent from "@/components/SearchComponent";

export default function ItemPage() {
    const [itemsSearch, setItemsSearch] = useState([]);
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(0); // Track current page
    const [totalPages, setTotalPages] = useState(1); // Total pages from backend
    const router = useRouter();

    useEffect(() => {
        async function loadItems() {
            setIsLoading(true);
            try {
                const data = await fetchItemsAdminWithpaging(currentPage, 5); // Fetch paginated items
                setItems(data.content);
                setTotalPages(data.totalPages); // Assuming backend returns `totalPages`
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        loadItems();
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const handleSearchResults = (results) => {
        setItemsSearch(results); // Update search results
    };

    const handleItemClick = (itemId) => {
        router.push(`/item/display/${itemId}`); // Navigate to the details page for the selected item
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <div>
                <h1 className="text-2xl font-bold mb-4">Items</h1>
                <SearchComponent onSearchResults={handleSearchResults} />
                <ul className="mt-4">
                    {itemsSearch.length > 0 ? (
                        itemsSearch.map((item) => (
                            <li
                                key={item.itemId}
                                onClick={() => handleItemClick(item.itemId)}
                                className="border p-2 my-2 cursor-pointer hover:bg-gray-100"
                            >
                                <strong>{item.itemName}</strong>
                            </li>
                        ))
                    ) : (
                        <p>No search results found</p>
                    )}
                </ul>
            </div>
            <Table data={items} />

            <div className="flex justify-between mt-4">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 0}
                    className="px-4 py-2 text-white bg-gray-600 rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <p>
                    Page {currentPage + 1} of {totalPages}
                </p>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage >= totalPages - 1}
                    className="px-4 py-2 text-white bg-gray-600 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
