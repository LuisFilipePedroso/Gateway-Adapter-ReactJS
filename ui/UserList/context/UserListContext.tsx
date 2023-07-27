import {createContext, ReactNode, useCallback, useContext} from "react";
import UsersHttpGateway from "@/gateways/users/http";
import UsersCacheGateway from "@/gateways/users/cache";
import User from "@/entities/User";

type UserListContextType = {
  toggleUser: (userId: string) => void;
}

const UserListContext = createContext<UserListContextType | null>(null);

type UserListProviderProps = {
  children: ReactNode;
  gateway: UsersHttpGateway;
  cache: UsersCacheGateway<User[]>;
}

function UserListProvider({children, gateway, cache}: UserListProviderProps) {

  const toggleUser = useCallback(async (userId: string) => {
    const response = await gateway.toggleUser(userId);

    if(!response) {
      return;
    }

    cache.update(response);
  }, [cache, gateway]);

  return (
    <UserListContext.Provider value={{ toggleUser }}>
      {children}
    </UserListContext.Provider>
  );
}

const useUserList = () => {
  const context = useContext(UserListContext);

  if(!context) {
    throw new Error('UserListContext should be use inside UserListProvider');
  }

  return context;
};

export {UserListProvider, useUserList};
