export type ValidationDataModel = {
  min?: {
    value: number;
    message: string;
  };
  max?: {
    value: number;
    message: string;
  };
  required?: {
    value: boolean;
    message: string;
  };
};
