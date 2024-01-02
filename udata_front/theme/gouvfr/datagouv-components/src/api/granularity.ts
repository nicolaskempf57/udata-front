import axios from "axios";
import { api_root_absolute } from "../plugins/api";

export async function fetchGranularities() {
  try {
    const response = await axios.get(api_root_absolute + '/spatial/granularities');
    return response.data;
  } catch (error) {
    console.error('Error fetching granularities:', error);
  }
}

export function getGranularity(granularities: any[], id: string): string | null {
  const granularity = granularities.find((g: any) => g.id === id);
  return granularity ? granularity.name : null;
}
