interface HttpClient {
  get (url: string): Promise<any>;
}

export default HttpClient;
