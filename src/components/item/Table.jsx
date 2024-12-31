
"use client";

import { useRouter } from "next/navigation"; 

export default function Example({ data }) {

  const router = useRouter();
  const handleClick = () => {
      router.push("/item/form");
    };


  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleClick}
         >
            Add item
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                 <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Picture
                  </th>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Name
                  </th>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                   Sku
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                   Quantity Available
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Base Price
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Status
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
           <tbody className="divide-y divide-gray-200 bg-white">
              {data.map((item) => (
                <tr key={item.itemId}>
                  <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                    <div className="flex items-center space-x-3">
                      {item.itemPictures.map((itemPicture) => (
                        <div key={itemPicture.id} className="w-11 h-11 shrink-0">
                          <img
                            alt={itemPicture.altText || "Item Picture"}
                            src={itemPicture.itemPictureMain}
                            className="w-full h-full rounded-full"
                          />
                        </div>
                      ))}
                    </div>
                  </td>
      
                  <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <div className="text-gray-900">{item.itemName}</div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <div className="text-gray-900">{item.itemSku}</div>
                  </td>


                  <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                  {item.uoms.map((uom) => (
                    <div key={uom.uomId} className="text-gray-900">{uom.uomType}</div>
                  ))}
                  </td>


                  <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    {item.uoms?.[0]?.manufacturerPricing?.pricingList ? (
                      <div className="text-gray-900">{item.uoms[0].manufacturerPricing.pricingList}</div>
                    ) : (
                      <div className="text-gray-500">N/A</div>
                    )}
                  </td>
                  
      
                  <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      {item.itemStatus}
                    </span>
                  </td>
                  <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                    <a
                      href={`item/display/${item.itemId}`}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Select
                    </a>
                  </td>
                  <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
