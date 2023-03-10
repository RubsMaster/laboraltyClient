import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { laborDocuments } from "../../models/laborDocuments";

@Injectable({
  providedIn: "root",
})
export class LaborDocumentsService {
  Docs: any;

  URI_API = "http://localhost:4000/";

  constructor(private http: HttpClient) {}

  getPost() {
    return this.http.get(this.URI_API);
  }

  getDocs(): Observable<laborDocuments[]> {
    const allDocumentsJSON = this.http.get<laborDocuments[]>(
      this.URI_API + "getAllDocuments"
    );
    return allDocumentsJSON;
  }

  editText(name: string, text: string): Observable<laborDocuments[]> {
    return this.http.put<laborDocuments[]>(
      this.URI_API + "editText", { name, text}
      )
  }

  deleteDoc(id: number): Observable<void> {
    return this.http.delete<void>(this.URI_API + "/" + id);
  }

  createDoc(doc: laborDocuments): Observable<any> {
    return this.http.post(this.URI_API + "createDoc", doc);
  }

}
