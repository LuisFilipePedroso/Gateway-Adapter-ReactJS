'use client'

import UserList from "@/ui/UserList";
import {useUsers} from "@/ui/UserList/hooks";
import FetchAdapter from "@/adapters/Fetch";
import UsersHttpGateway from "@/gateways/users/http";
import {UserListProvider} from "@/ui/UserList/context/UserListContext";
import ReactQueryCacheAdapter from "@/adapters/ReactQueryCache";
import client from "@/client";
import UsersCacheGateway from "@/gateways/users/cache";
import User from "@/entities/User";

const adapter = new FetchAdapter();
const gateway = new UsersHttpGateway(adapter);

const cacheAdapter = new ReactQueryCacheAdapter(client, 'users');
const cacheGateway = new UsersCacheGateway<User[]>(cacheAdapter);

function Users() {
  const {data: users} = useUsers(gateway);

  if (!users) {
    return <></>
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8">
      <UserList users={users} />
    </main>
  )
}

export default function Page() {

  return (
    <UserListProvider gateway={gateway} cache={cacheGateway}>
      <Users />
    </UserListProvider>
  )
}
