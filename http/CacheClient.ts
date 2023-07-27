interface CacheClient {
  update<T>(updater: T): void;
}

export default CacheClient;
