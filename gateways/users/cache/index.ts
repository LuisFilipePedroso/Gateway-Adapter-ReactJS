import CacheClient from "@/http/CacheClient";
import User from "@/entities/User";

export default class UsersCacheGateway<T> {

  constructor(private readonly cacheClient: CacheClient) {}

  update(user: User) {
    this.cacheClient.update((state: any) => {
      if(!state) {
        return state;
      }

      return state.map((s: any) => {
        if(s.id === user.id) {
          return user;
        }

        return s;
      });
    })
  }
}
