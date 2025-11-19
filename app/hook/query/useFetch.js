import { useQuery } from "@tanstack/react-query";
import get from "@/app/api/get";


function useFetch({
    url,
    queryKey,
    xClientId="partner_app",
    enabled = true,
    contentType,
}){
    return useQuery({
        queryKey,
        queryFn: get({url, xClientId, contentType, signal, contentType}),
        enabled,
        retry:4,
        refetchOnWindowFocus: false,
    });
}

export default useFetch;