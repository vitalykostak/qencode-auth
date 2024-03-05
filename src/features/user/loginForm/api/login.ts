import { $api } from '@/shared/api/api'

interface LoginCredentials {
    email: string
    password: string
}

interface LoginRequestResponse {
    access_token: string
    refresh_token: string
}

export const login = async (values: LoginCredentials) => {
    const res = await $api.post<LoginCredentials, LoginRequestResponse>('/v1/auth/login', values)

    return res
}
