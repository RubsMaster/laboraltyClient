export type Roles = 'ADMIN' | 'ACCOUNTANT' | 'CLIENT';
export interface authModel {
    username: string;
    password: string;
}

export interface sessionModel{
    message: string;
    token: string;
    userId: string;
    role: Roles;
}