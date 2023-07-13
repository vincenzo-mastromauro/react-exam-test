import axios from "axios";
import { handleApiError } from "./error-handler";

export abstract class BaseService {
  constructor() {
    axios.defaults.baseURL = "https://pokeapi.co/api/v2/";
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.timeout = 10000;
  }

  protected async get<T>(endpoint: string): Promise<T> {
    try {
      const response = await axios.get<T>(axios.defaults.baseURL + endpoint);
      return response.data;
    } catch (error: any) {
      handleApiError(error);
    }
    return {} as T;
  }
}
