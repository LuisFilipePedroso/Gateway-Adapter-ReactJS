import HttpClient from "@/http/HttpClient";

// Responsible to establish the connection between client and server;
export default class FetchAdapter implements HttpClient {

  async get(url: string): Promise<any> {
    const response = await fetch(url);
    return await response.json();
  }

}
