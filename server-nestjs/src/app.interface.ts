export interface AppSuccessResponse<T = any> {
  success: true;
  data: T;
}

export interface AppErrorResponse {
  success: false;
  message?: string;
}

export type AppResponse<T = any> = AppSuccessResponse<T> | AppErrorResponse;
