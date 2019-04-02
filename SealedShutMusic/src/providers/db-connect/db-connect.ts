import { Injectable } from '@angular/core';
import { AngularFirestore,
  AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { INewsThumb } from '../news-thumb/news-thumb';

@Injectable()
export class DbConnectProvider {
  data:Observable<any>;
  dataCollection:AngularFirestoreCollection<INewsThumb>;
  constructor(
    private afs:AngularFirestore
  ) {
    this.dataCollection = this.afs.collection('News');
    this.data = this.dataCollection.valueChanges();
  }
  getCollection(CollectionName:string) {
    
    this.dataCollection = this.afs.collection(CollectionName);
    this.data = this.dataCollection.valueChanges();
  }
}

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyALdGH0yJitErPKwsmZc0EIBlYD8nv24bY",
    authDomain: "sealedshutmusic.firebaseapp.com",
    databaseURL: "https://sealedshutmusic.firebaseio.com",
    projectId: "sealedshutmusic",
    storageBucket: "sealedshutmusic.appspot.com",
    messagingSenderId: "56386515084"
  }
};

