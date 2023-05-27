import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

import { laborDocuments } from "../../models/laborDocuments";

@Injectable({
  providedIn: "root",
})
export class LaborDocumentsService {
  Docs: any;

  URI_API = "http://localhost:4000/";

  constructor(private http: HttpClient) {}
  

  getDocs(): Observable<laborDocuments[]> {
    const allDocumentsJSON = this.http.get<laborDocuments[]>(
      this.URI_API + "getAllDocuments"
    );
    return allDocumentsJSON;
  }
  getDoc(id: any): Observable<laborDocuments> {
    const docToEdit = this.http.get<laborDocuments>(
      this.URI_API + "getDoc/" + id
    )
    return docToEdit
  }

  getDocByName(docName: any, isMoral: any): Observable<laborDocuments> {
    const body = {
      docName,
      isMoral
    };
  
    return this.http.post<laborDocuments>(`${this.URI_API}getDocByName`, body);
  }
  
  
  
  editText(id: string, text: string): Observable<laborDocuments[]> {
    return this.http.put<laborDocuments[]>(
      this.URI_API + "editText", { id, text}
      )
  }

  deleteDoc(id: number): Observable<void> {
    return this.http.delete<void>(this.URI_API + "deleteDoc/" + id);
  }

  createDoc(doc: laborDocuments): Observable<any> {
    return this.http.post(this.URI_API + "createDoc", doc);
  }

}
