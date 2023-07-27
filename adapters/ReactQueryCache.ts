import CacheClient from "@/http/CacheClient";
import {QueryClient, Updater} from "@tanstack/react-query";

// Responsible to abstract the cache update;
export default class ReactQueryCacheAdapter implements CacheClient {

  constructor(private queryClient: QueryClient, private cacheKey: string) {
  }

  update<T>(updater: Updater<T | undefined, T | undefined>) {
    this.queryClient.setQueryData<T>([this.cacheKey], updater);
  }

}
