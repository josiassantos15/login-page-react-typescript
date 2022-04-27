import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router'
import { User, SignInData, AuthContextType }  from '../interfaces/interfaces'
import { recoverUserInformation, signInRequest } from "../services/auth";
import { api } from "../services/api";

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
  // Atualizar as informações do usuário toda vez que a página for atualizada
  const [user, setUser] = useState<User | null>(null)

  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'loginpage.token': token } = parseCookies()
    // Recupera dados do usuário
    if (token) {
      recoverUserInformation().then(response => {
        setUser(response.user)
      })
    }
  }, [])
// Recebe dados do login do usuário que retorna do back end.
  async function signIn({ email, password }: SignInData) {
    const { token, user } = await signInRequest({
      email,
      password,
    })
// Armazenar token nos cookies por uma hora, com a biblioteca nookies.
    setCookie(undefined, 'loginpage.token', token, {
      maxAge: 60 * 60 * 1, // 1 hour
      // expires -> Para passar uma data específica que esse cookie vai expirar
    })

    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    setUser(user)
    // Se o usuário estiver autenticado o Router vai direciona-lo para a rota desejada. 
    Router.push('/dashboard');
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}