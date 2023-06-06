export type Roles = 'ADMIN' | 'ACCOUNTANT' | 'CLIENTT';
export interface AdminModel {
    username: string;
    password: string;
}

export interface AdminResponse{
    message: string;
    token: string;
    userId: number;
    role: Roles;
}