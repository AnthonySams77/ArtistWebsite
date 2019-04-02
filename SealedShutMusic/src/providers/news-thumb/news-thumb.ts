import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class NewsThumbProvider {

  NewsThumbs:string[] = [];
  currentNewsThumb:INewsThumb;
  NewsThumbArray:INewsThumb[];
  NewsthumbCollection:AngularFirestoreCollection<INewsThumb>;
  constructor(
    private afs:AngularFirestore
  ) {
    this.NewsthumbCollection = this.afs.collection<INewsThumb>('News');
    this.NewsthumbCollection.valueChanges()
      .subscribe(data => this.NewsThumbArray = data);
  }
}

export interface INewsThumb {
  author:string;
  content:string;
  date:string;
}

export class NewsThumb {
  author:string;
  content:string;
  date:string;

  constructor(NewsThumb:Partial<NewsThumb>) {
    Object.assign(this, NewsThumb);
  }
}