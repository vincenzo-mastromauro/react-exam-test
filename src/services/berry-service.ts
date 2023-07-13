import { BaseService } from "../api/base-service";
import { IBerriesResponse } from "../models/berry-model";

export class BerryService extends BaseService {
  async getBerries(): Promise<IBerriesResponse> {
    const endpoint = "berry";
    const timerId = `getBerries ${endpoint}`;
    console.time(timerId);
    console.timeEnd(timerId);
    return await this.get<IBerriesResponse>(endpoint + "?limit=1000", 0);
  }
}
