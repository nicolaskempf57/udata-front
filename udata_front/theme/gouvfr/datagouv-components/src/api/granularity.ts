import axios from "axios";
import { api_root_absolute } from "./api";

let foundGranularities;
let granularitiesRequest = null;

export function getGranularity(granularities: any[], id: string): string | null {
  const granularity = granularities.find((g: any) => g.id === id);
  return granularity ? granularity.name : null;
}

/**
 *
 * @returns {Promise<Array>}
 */
export function fetchGranularities() {
  if (granularitiesRequest) {
    return granularitiesRequest
  }
  return granularitiesRequest = axios.get(api_root_absolute + '/spatial/granularities')
  .then((resp) => resp.data)
  .then((data) => foundGranularities = data)
}
