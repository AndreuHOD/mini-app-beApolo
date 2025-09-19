import axios from "axios";

export const getUsers = async () => {
  try {
    const response = await axios.get("http://localhost:8080/users");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const getUser = async (id: number) => {
  try {
    const response = await axios.get(`http://localhost:8080/users/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

export const createUser = async (user: { name: string; email: string; status: string, hola: string }) => {
  try {
    console.log("Creating user:", user);
    const response = await axios.post("http://localhost:8080/users", user);
    console.log("User created:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
