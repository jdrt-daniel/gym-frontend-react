import api from "../../../config/axios.config";
// import { Paginate } from "../../../interfaces";

export const getList = async () => {
  try {
    const { data } = await api.get("/clients");
    return data;
  } catch (error) {
    throw new ErrorEvent("Error on service");
  }
};
