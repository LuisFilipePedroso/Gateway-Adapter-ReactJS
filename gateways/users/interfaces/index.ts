import User from "@/entities/User";

export default interface UsersGateway {
  getUsers (): Promise<User[]>;
  toggleUser (userId: string): Promise<User> | undefined;
}
