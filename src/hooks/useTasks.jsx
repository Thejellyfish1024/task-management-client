import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const useTasks = () => {
    const {user} = useContext(AuthContext)

    const axiosPublic = useAxiosPublic()

    const {data, refetch} = useQuery({
        queryKey: ['tasks', user?.email],
        queryFn: async () =>{
           const data = await axiosPublic.get(`/all-tasks/${user?.email}`)
           return await data.data;
        }
    })
    // console.log('use menu data',data);

    return {data, refetch};
};

export default useTasks;