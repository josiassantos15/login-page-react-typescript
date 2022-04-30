export interface User {
    name: string;
    email: string;
    avatar_url: string;
}
  
export interface SignInData {
   email: string;
   password: string;
}
  
export interface AuthContextType {
    isAuthenticated: boolean;
    user: User;
    signIn: (data: SignInData) => Promise<void>
}
// auth.ts
export interface SignInRequestData {
    email: string;
    password: string;
  }