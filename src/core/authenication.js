import jwt from "jwt-decode";

export const setToken = (token) => {
    localStorage.setItem("lsp_session_token", token)
}

export const getToken = () => {
    return localStorage.getItem("lsp_session_token")
}

export const getUser = () => {
    return jwt(getToken())
}