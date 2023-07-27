import User from "@/entities/User";
import {useUserList} from "@/ui/UserList/context/UserListContext";

type UserListItemProps = {
  user: User;
}

function UserListItem({user}: UserListItemProps) {
  const { toggleUser } = useUserList();

  return (
    <div className="flex items-center gap-12">
      <div className="flex flex-col">
        <h3 data-done={user.done} className="font-medium data-[done=true]:line-through">{user.name}</h3>
        <p className="text-zinc-400 text-md">{user.login}</p>
      </div>
      <button className="p-2 bg-green-400 rounded-md text-zinc-800" onClick={() => toggleUser(user.id)}>Toggle</button>
    </div>
  );
}

export default UserListItem;
