import FetchAdapter from "@/adapters/Fetch";
import UsersHttpGateway from "@/gateways/users/http";
import {useQuery} from "@tanstack/react-query";

function useUsers(gateway: UsersHttpGateway) {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => gateway.getUsers()
  })
}

export {
  useUsers
}
