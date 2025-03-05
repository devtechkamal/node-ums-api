interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
  code?: number;
}

export const success = (res: any, message: string, data: any = ""): void => {
  const response: ApiResponse = {
    success: true,
    message,
    data,
  };
  res.status(200).json(response);
};

export const falied = (res: any, message: string, code: number = 404): void => {
  const response: ApiResponse = {
    success: false,
    message,
  };
  res.status(code).json(response);
};
