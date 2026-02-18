export interface ADD_USER_REQUEST {
    firstName: string
    lastName: string
    password: string
    email: string
    avatar?: string
    isActive: boolean
    role?: 'admin' | 'user'
}