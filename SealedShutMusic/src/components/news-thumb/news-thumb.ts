import { Component } from '@angular/core';
import { NewsThumbProvider, INewsThumb } from '../../providers/news-thumb/news-thumb';
import { RouterModule, Routes } from '@angular/router';

/**
 * Generated class for the NewsThumbComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'news-thumb',
  templateUrl: 'news-thumb.html'
})
export class NewsThumbComponent {
  NTProvider:NewsThumbProvider;
  currentNewsThumb:INewsThumb;

  constructor(NTProvider:NewsThumbProvider, private RouterModule:RouterModule) {
    this.NTProvider = NTProvider;
  }

  onGoToArticlePage(NewsThumb) {
    this.NTProvider.currentNewsThumb = NewsThumb;
    this.RouterModule.forRoot([{path:'', component:'']);
  }

}
