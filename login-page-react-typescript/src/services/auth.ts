// Criar rash
import { v4 as uuid } from 'uuid'
import { SignInRequestData } from '../interfaces/interfaces'
//Simulando um back end, com delay de 1 segundo.
const delay = (amount = 1000) => new Promise(resolve => setTimeout(resolve, amount))

export async function signInRequest(data: SignInRequestData) {
  await delay()

  return {
    token: uuid(),
    user: {
      name: 'Josias Santos',
      email: 'josias@teste.com.br',
      avatar_url: 'https://github.com/josiassantos15.png'
    }
  }
}
// Deve-se passar o token quando tiver a conexão com o back
export async function recoverUserInformation() {
  await delay()

  return {
    user: {
      name: 'Josias Santos',
      email: 'josias@teste.com.br',
      avatar_url: 'https://github.com/josiassantos15.png'
    }
  }
}