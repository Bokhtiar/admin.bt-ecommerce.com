import { Toastify } from "../components/toastify";

/* Set token */
export const setToken = async (token: string): Promise<boolean> => {
  localStorage.setItem("token", token);
  return true;
};

/* Get token */
export const getToken = () => {
  return localStorage.getItem("token");
};

/* Remove token */
export const removeToken = () => {
  localStorage.removeItem("token");
  return true;
};

/* Phone number valid check */
export const isValidPhone = () => {
  const regex = /^(?:\+88|88)?(01[3-9]\d{8})$/i;
  return regex;
};

/* E-mail valid check */
export const isValidEmail = () => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return regex;
};

/* Global network error handeller */
type NetworkErrorType = {
  field: string;
  message: string;
};

export const networkErrorHandeller = (error: any) => {
  console.log(error);

  if (
    error &&
    error.response &&
    error.response.data &&
    error.response.data.errors
  ) {
    error.response.data.errors.map((item: NetworkErrorType) => {
      console.log("helper", item.message);
      return Toastify.Error(item.message);
    });
  } else {
    console.log("helper something went wrong");
    return Toastify.Error("Something going wrong, Try again.");
  }
};

/* Generate array from integer number */
export const arrayFromNumber = (data: number) => {
  const array = [];
  for (let i = 0; i < data; i++) array.push(i);
  return array;
};

/* Product type data */
export const ProductType = [
  {
    label: "Regular",
    value: "regular",
  },
  {
    label: "Flash Sale",
    value: "flash_sale",
  },
];

/* Date parse conversion */
export const dateparse = (date: any) => {
  const zeroFill = (i: any) => {
    return i < 9 ? `0${i}` : i;
  };

  const newDate = new Date(date);

  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  return `${zeroFill(day)}-${zeroFill(month)}-${zeroFill(year)}`;
};

/* Active path */
export const isActivePath = (current_url_path: string, route_path: string) => {
  const current_url_path_array = current_url_path.split("/");
  const isAvailablePath = current_url_path_array.find((x) => x === route_path);

  if (isAvailablePath) {
    return true;
  }
  return false;
};
