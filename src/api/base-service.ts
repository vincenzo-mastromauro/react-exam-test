import axios, { AxiosInstance, AxiosResponse } from "axios";
import { handleApiError } from "./error-handler";

export abstract class BaseService {
  private axiosInstance: AxiosInstance;
  private axiosInstanceDog: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "https://pokeapi.co/api/v2/",
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 10000,
    });

    this.axiosInstanceDog = axios.create({
      baseURL: "https://dog.ceo/api/",
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 10000,
    });
  }

  protected async get<T>(endpoint: string, endpointID: number): Promise<T> {
    try {
      const axiosInstance = endpointID === 1 ? this.axiosInstanceDog : this.axiosInstance;
      const response: AxiosResponse<T> = await axiosInstance.get(endpoint);
      return response.data;
    } catch (error: any) {
      handleApiError(error);
      throw error;
    }
  }

  protected async post<T>(endpoint: string, data: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.post(endpoint, data);
      return response.data;
    } catch (error: any) {
      handleApiError(error);
      throw error;
    }
  }
}
