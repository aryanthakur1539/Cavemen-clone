import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export const service = async () => {
  try {
    const res = await api.get("/products");
    return res.data; // <-- only this return
  } catch (error) {
    console.log("API ERROR:", error);
    return { products: [] }; // <-- safe fallback
  }
};
