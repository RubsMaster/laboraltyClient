export type Roles = 'ADMIN' | 'ACCOUNTANT' | 'CLIENT'| 'CONSULTANT'; 
export interface authModel extends CredentialModel {
    user: String;
    password: String;
}

export interface CredentialModel   {
    _id?: number,
    user: String;
    password: String;
    role?: Roles;
    relatedId?: any;
}

export interface sessionModel{
    message: String;
    token: String;
    relatedId: any;
    role: Roles;
}