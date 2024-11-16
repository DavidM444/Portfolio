import type { Post } from "~/types/types"

export const useCreatemail = async (payload: Post) => {
  console.log("realizando peticion")

  const {data,error} = await useFetch('/api/apiemail',{method:'POST',body: payload});

  if(error.value){
    throw new Error(error.value.message);
  }
  return data;
}
