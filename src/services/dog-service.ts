import { BaseService } from "../api/base-service";
import { IDogResponse } from "../models/dog-model";

export class DogService extends BaseService {
  async getDogs(): Promise<IDogResponse> {
    const endpoint = "breed/hound/images/random";
    const timerId = `getDog ${endpoint}`;
    console.time(timerId);
    console.timeEnd(timerId);
    return await this.get<IDogResponse>(endpoint + "?limit=1000", 1);
  }
}
