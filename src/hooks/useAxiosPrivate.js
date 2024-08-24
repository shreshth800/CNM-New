import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const useAxiosPrivate = () => {
  const { user } = useContext(AuthContext);

  console.log(user);
  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          console.log(user?.token);
          config.headers["Authorization"] = `Bearer ${user?.token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
    };
  }, [user, axiosPrivate]);
  return axiosPrivate;
};
export default useAxiosPrivate;
