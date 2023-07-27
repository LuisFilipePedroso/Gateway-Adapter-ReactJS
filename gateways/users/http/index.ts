import UsersGateway from "@/gateways/users/interfaces";
import HttpClient from "@/http/HttpClient";
import User from "@/entities/User";

// Responsible to calls the backend, receives a response, format it and return.
export default class UsersHttpGateway implements UsersGateway {
  private mockedData: User[] = [
    {
      id: '1',
      login: 'loginA',
      name: 'A',
      done: false,
    },
    {
      id: '2',
      login: 'loginB',
      name: 'B',
      done: false,
    },
    {
      id: '3',
      login: 'loginC',
      name: 'C',
      done: false,
    }
  ]


  constructor (readonly httpClient: HttpClient) {}

  async getUsers(): Promise<User[]> {
    // const response = await this.httpClient.get("https://api.github.com/users?per_page=10");
    // let users: User[] = [];
    //
    // for (const user of response) {
    //   users = [...users, { login: user.login, name: user.name }]
    // }
    //
    // return users;
    return this.mockedData
  }

  toggleUser(userId: string): Promise<User> | undefined {
    const users = this.mockedData.map(user => {
      if(user.id === userId) {
        return {
          ...user,
          done: !user.done
        }
      }

      return user;
    });

    const user = users.find(user => user.id === userId);

    if(!user) {
      return;
    }

    this.mockedData = users;

    return Promise.resolve(user)
  }
}
