'use client'
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import { CurrencyDollarIcon, GlobeAmericasIcon } from '@heroicons/react/24/outline'
import Head from 'next/head'
const product = {
  name: 'Basic Tee',
  price: '$35',
  rating: 3.9,
  reviewCount: 512,
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Women', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      id: 1,
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
      imageAlt: "Back of women's Basic Tee in black.",
      primary: true,
    },
    {
      id: 2,
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-product-shot-01.jpg',
      imageAlt: "Side profile of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 3,
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-product-shot-02.jpg',
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
  ],
  colors: [
    { name: 'Black', bgColor: 'bg-gray-900', selectedColor: 'ring-gray-900' },
    { name: 'Heather Grey', bgColor: 'bg-gray-400', selectedColor: 'ring-gray-400' },
  ],
  sizes: [
    { name: 'XXS', inStock: true },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: false },
  ],
  description: `
    <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
    <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
  `,
  details: [
    'Only the best materials',
    'Ethically and locally made',
    'Pre-washed and pre-shrunk',
    'Machine wash cold with similar colors',
  ],
}
const policies = [
  { name: 'International delivery', icon: GlobeAmericasIcon, description: 'Get your order in 2 years' },
  { name: 'Loyalty rewards', icon: CurrencyDollarIcon, description: "Don't look at other tees" },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Example( {data, dataDisplay} ) {
 


const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <div className="bg-white">
      <div className="pb-16 pt-6 sm:pb-24">
        
        <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="flex justify-between">
                <h1 className="text-xl font-medium text-gray-900">{data.itemName}</h1>
                <p className="text-xl font-medium text-gray-900">
          {data.uoms?.[0]?.manufacturerPricing?.pricingList
            ? `$${data.uoms[0].manufacturerPricing.pricingList.toFixed(2)}`
            : "Price not available"}
        </p>
              </div>
          
            </div>

            {/* Image gallery */}
            <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
              <h2 className="sr-only">Images</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                {data.itemPictures.map((itemPicture) => (
                  <img
                    key={itemPicture.itemPictureId}
                    alt={itemPicture.itemPictureMain}
                    src={itemPicture.itemPictureMain}
                    className={classNames(
                      itemPicture.itemPictureMain ? 'lg:col-span-2 lg:row-span-2' : 'hidden lg:block',
                      'rounded-lg',
                    )}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 lg:col-span-5">
              <form>

              

                <div className="sm:flex sm:justify-between">
                  {/* Size selector */}
                  <fieldset>
                    <legend className="block text-sm font-medium text-gray-700">Size</legend>
                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2"
                    >
                      {data.uoms.map((uom) => (
                 <Radio
                key={uom.uomId}
                as="div"
                value={uom}
                aria-label={uom.uomType}
                aria-description={uom.uomType}
                className="group relative block cursor-pointer rounded-lg border border-gray-300 p-4 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500"
              >
                <p className="text-base font-medium text-gray-900">{uom.uomType}</p>
                
                <p className="mt-1 text-sm text-gray-500">
                  
                </p>
                <p className="mt-1 text-sm text-gray-500">contain {uom.uomQuantity} {uom.uomSubType}</p>

                <p className="mt-1 text-sm text-gray-500">Price $ {uom.manufacturerPricing.pricingList} </p>
                <p className="mt-1 text-sm text-gray-500">Total weight {uom.uomWeight} </p>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                />
              </Radio>

                      ))}
                    </RadioGroup>
                  </fieldset>
                  </div>

                <button
                  type="submit"
                  className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to cart
                </button>
              </form>

              {/* Product details */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Description</h2>

                <div
                  dangerouslySetInnerHTML={{ __html: data.itemDescription }}
                  className="mt-4 space-y-4 text-sm/6 text-gray-500"
                />
              </div>

              <div className="mt-8 border-t border-gray-200 pt-8">
                <h2 className="text-sm font-medium text-gray-900">Sales &amp; Category</h2>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-1 pl-5 text-sm/6 text-gray-500 marker:text-gray-300">
                    {data.salesCategories.map((salesCategory) => (
                      <li key={salesCategory.salesCategoryId} className="pl-2">
                        {salesCategory.salesCategoryName}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Policies */}
              <section aria-labelledby="policies-heading" className="mt-10">
      
                <h2 className="text-sm font-medium text-gray-900">Attribute</h2>


                <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {data.attributes.map((attribute) => (
                    <div key={attribute.attributeId} className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                      <dt>
                       
                        <span className="mt-4 text-sm font-medium text-gray-900">{attribute.attributeName}</span>
                      </dt>
                      <dd className="mt-1 text-sm text-gray-500">{attribute.attributeType}</dd>
                      <dd className="mt-1 text-sm text-gray-500">{attribute.attributeAssistText}</dd>

                    </div>
                  ))}
                </dl>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">

      
    </div>
    </div>
  )
}
