export interface Sheet {
  id: string;
  name: string;
}

export interface UserCredentials {
  token: string;
}

export interface ApiConfig {
  apiUrl: string;
  headers: HeadersInit;
}
