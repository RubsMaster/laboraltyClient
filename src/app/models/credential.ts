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
export interface CredentialModel {
    _id?: number,
    user: String;
    password: String;
    rol: string;
    relatedId: any;
}