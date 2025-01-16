


export default function ImageComponent({ data }) {
    return (
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:px-6">
          {data.itemPictureMain ? (
            <img src={data.itemPictureMain} alt="Image" className="h-32 w-32 object-cover" />
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:p-6">{/* Additional content can go here */}</div>
      </div>
    );
  }
  