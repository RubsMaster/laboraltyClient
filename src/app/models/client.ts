export interface ClientModel {
    _id?: number,
    businessName: String;
    taxRegime: String;
    RFC: String;
    street: String;
    outdoorNumber: String;
    innerNumber: String;
    zipCode: String;
    suburb: String;
    CFDI: String;
    inChargeName: String;
    jobTitle: String;
    phoneNumber: String;
    extension: String;
    email: String;
    totalRFC: String;
    totalEmployees: String;
    userAssigned: String;
    passwordAssigned: String;
    createdAt: string;
    createdBy: string,
    assignedTo?: any;
}