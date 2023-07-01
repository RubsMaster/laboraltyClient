export type Roles = 'ADMIN' | 'ACCOUNTANT' | 'CLIENT'| 'CONSULTANT'; 
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
export interface CredentialModel {
    _id?: number,
    user?: String;
    password?: String;
    role?: Roles;
    relatedId?: any;
}