import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
    AngularFirestoreDocument,
    AngularFirestore,
    AngularFirestoreCollection
  } from "angularfire2/firestore";
import { appconfig } from "../api-urls";
import { User } from "../../models/firebase.models";

/*
  Generated class for the Angular2ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Angular2ServiceProvider {

  users: AngularFirestoreCollection<User>;
  private userDoc: AngularFirestoreDocument<User>;

  constructor(public http: HttpClient, private db: AngularFirestore) {
    this.users = db.collection<User>(appconfig.users_endpoint);
  }
  addUser(doc_id, payload){
    console.log(payload)
    return this.users.doc(doc_id).set({ 
      name : payload.name,
      mobile: payload.mobile,
      email: payload.email,
      matching_status : 1
    });
  }
}
