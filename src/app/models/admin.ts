export type Roles = 'ADMMIN' | 'ACCOUNTANT' | 'CLIENT';
export interface AdminModel {
    userName: string;
    password: string;
}

export interface adminResponse{
    message: string;
    token: string;
    userId: number;
    role: Roles;
}
