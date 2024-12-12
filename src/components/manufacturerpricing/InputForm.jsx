


export default function Example() {
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">manufacturer-pricing form</h2>
          <p className="mt-1 text-sm/6 text-gray-600">please fill the blank with the required field</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label htmlFor="pricingList" className="block text-sm/6 font-medium text-gray-900">
              pricingList
              </label>
              <div className="mt-2">
                <input
                  id="pricingList"
                  name="pricingList"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="pricingMsrp" className="block text-sm/6 font-medium text-gray-900">
              pricing Msrp              </label>
              <div className="mt-2">
                <input
                  id="pricingMsrp"
                  name="pricingMsrp"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
  
            <div className="col-span-full">
              <label htmlFor="pricingRmap" className="block text-sm/6 font-medium text-gray-900">
              pricingRmap
              </label>
              <div className="mt-2">
                <textarea
                  id="pricingRmap" 
                  name="pricingRmap"
                  rows={3}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm/6 text-gray-600">please describe the item.</p>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="pricingWholesalePrice" className="block text-sm/6 font-medium text-gray-900">
              pricing Whole sale Price
              </label>
              <div className="mt-2">
                <input
                  id="pricingWholesalePrice"
                  name="pricingWholesalePrice"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>


            <div className="sm:col-span-1">
              <label htmlFor="pricingFederalExciseTax" className="block text-sm/6 font-medium text-gray-900">
              pricing Federal ExciseTax
              </label>
              <div className="mt-2">
                <input
                  id="pricingFederalExciseTax"
                  name="pricingFederalExciseTax"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            
            <div className="sm:col-span-1">
              <label htmlFor="pricingFederalExciseTax" className="block text-sm/6 font-medium text-gray-900">
              pricing Cost
              </label>
              <div className="mt-2">
                <input
                  id="pricingFederalExciseTax"
                  name="pricingFederalExciseTax"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

     



          </div>
        </div>


      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm/6 font-semibold text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}
