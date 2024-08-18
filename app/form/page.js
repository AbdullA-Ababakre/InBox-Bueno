"use client";

import { useState } from "react";
import apiClient from "@/libs/api";
import { useRouter } from "next/navigation";

const FormPage = () => {
  const [apikey, setApiKey] = useState("");
  const [pubId, setPubId] = useState("");
  const router = useRouter(); // Import useRouter

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const { success } = await apiClient.post("/submit", {
    //     input1: apikey,
    //     input2: pubId
    //   });
    router.push(`/table?apikey=${apikey}&pubId=${pubId}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Submit Your Keys
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="api key"
              className="block text-sm font-medium text-gray-700"
            >
              Api Key:
            </label>
            <input
              type="text"
              id="api key"
              value={apikey}
              onChange={(e) => setApiKey(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="input2"
              className="block text-sm font-medium text-gray-700"
            >
              Pub ID:{" "}
            </label>
            <input
              type="text"
              id="input2"
              value={pubId}
              onChange={(e) => setPubId(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
