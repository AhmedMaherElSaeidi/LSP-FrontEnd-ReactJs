import jwt from "jwt-decode";

const _token = "lsp_session_token"

export const setToken = (token) => localStorage.setItem(_token, token)

export const removeToken = () => localStorage.removeItem(_token)

export const getToken = () => localStorage.getItem(_token)

export const getUser = () => jwt(getToken())

export const isAuth = () => getToken() != null && true