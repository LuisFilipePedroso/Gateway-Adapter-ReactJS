import ListItem from "./components/UserListItem";
import User from "@/entities/User";

type UserListProps = {
  users: User[];
}

function UserList({ users }: UserListProps) {

  return (
    <div className="flex flex-col gap-3">
      {users.map(user => <ListItem key={user.login} user={user}/>)}
    </div>
  );
}

export default UserList;
