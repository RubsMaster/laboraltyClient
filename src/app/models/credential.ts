export type Roles = 'Admin' | 'Accountant' | 'Client'| 'Consultant' | ''; 
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
    token: string;
    relatedId: any;
    role: Roles;
    imageName: string;
    userName: string;
    name: string;
}