import axios from "axios";
import { useAuthStore } from "@/modules/login/store";

const http = axios.create({
  baseURL: import.meta.env.VITE_API_HOST,
});

function authHeader(request) {
  const { user } = useAuthStore();
  const isLoggedIn = !!user?.token;

  if (isLoggedIn) {
    request.headers.Authorization = `Bearer ${user.token}`;
  }
}

if (http !== undefined) {
  http.interceptors.request.use(
    (request) => {
      authHeader(request);
      return request;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  http.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}

if (import.meta.env.DEV) {
  http.interceptors.request.use((request) => {
    console.log("Request SENT:", request);

    return request;
  });

  http.interceptors.response.use((response) => {
    console.log("Response RECEIVED:", response);

    return response;
  });
}

export { http };
