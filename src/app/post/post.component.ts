import { Component, Input, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;

  createdAt: Date;


  constructor() {
    this.createdAt = new Date();
  }

  ngOnInit() {
  }

  likeIt() {
    this.loveIts += 1;
  }

  dontlikeIt() {
    this.loveIts -= 1;
  }
}
