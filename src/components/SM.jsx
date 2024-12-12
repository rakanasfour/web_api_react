"use client";

const Table = () => {
  // Access the environment variable
  const dbUsername = process.env.NEXT_PUBLIC_DB_USERNAME;

  console.log("Database Username:", dbUsername); // Log outside JSX

  return (
    <div>
      <p>{dbUsername ? `Username: ${dbUsername}` : 'Secret not found'}</p>
      </div>
  );
};

export default Table;
