import {jwtDecode} from 'jwt-decode';

export interface DecodedToken {
  email: string;
  given_name: string;
  // Add other fields if you need them
}

export function decodeToken(token: string): DecodedToken {
  return jwtDecode<DecodedToken>(token);
}
