import { AxiosError } from "axios";

export function handleApiError(error: AxiosError) {
  switch (error.response?.status) {
    case 400:
      console.log("Bad Request");
      break;
    case 401:
      console.log("Unauthorized");
      break;
    case 403:
      console.log("Forbidden");
      break;
    case 404:
      console.log("Not Found");
      break;
    case 500:
      console.log("Internal Server Error");
      break;
    case 503:
      console.log("Service Unavailable");
      break;
    default:
      console.log("Unknown Error");
      break;
  }
}
