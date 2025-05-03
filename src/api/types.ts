export interface Facilitator {
  id: number;
  name: string;
  loginId: string;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}
