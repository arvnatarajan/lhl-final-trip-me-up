export const login = (user_token) => {
  return {
    type: 'LOGIN',
    user: user_token
  }
}
