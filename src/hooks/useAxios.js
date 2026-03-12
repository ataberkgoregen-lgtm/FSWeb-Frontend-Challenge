import axios from "axios";
import { useState } from "react";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default function useAxios() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (config) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance(config);
      return response.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { request, loading, error };
}
