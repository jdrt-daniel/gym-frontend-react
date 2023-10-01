import api from "../config/axios.config";

export const login = async (email: string, password: string) => {
  try {
    return await api.post("auth/login", { email, password });
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};
