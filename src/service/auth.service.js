import { provider, auth } from '../configs/firebase';



export const loginUser = () => {
  return  auth.signInWithPopup(provider)
}