import { API_BASE_URL, API_ENDPOINTS } from '../config';
import type { ApiResponse, Facilitator } from '../types';

export const getFacilitators = async (): Promise<
  ApiResponse<Facilitator[]>
> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}${API_ENDPOINTS.FACILITATORS}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      data,
      status: response.status,
    };
  } catch (error) {
    throw new Error(
      `Failed to fetch facilitators: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
};
