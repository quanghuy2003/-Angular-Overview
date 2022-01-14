import { Component, OnInit } from '@angular/core';
import {Img} from '../img';


@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  img : Img = {
    name : ""
  }

  abc() {
    this.img.name = 'https://st.quantrimang.com/photos/image/2016/11/11/anh-gif-3.gif'
// @ts-ignore
    document.getElementById("anh").innerHTML = `
<button class="btn btn-link " > <a href="http://localhost:64953/"> Back</a></button>
<img src="${this.img.name}" width="50%">
`
  }

  abc1() {
    this.img.name = 'https://media1.giphy.com/media/1gVUhlXhETaRRxzeHO/giphy.gif'
// @ts-ignore
    document.getElementById("anh").innerHTML = `
<button class="btn btn-link " > <a href="http://localhost:64953/"> Back</a></button>
<img src="${this.img.name}" width="50%%">
`
  }

  abc2() {
    this.img.name = 'https://i1.wp.com/mir-s3-cdn-cf.behance.net/project_modules/1400/9bc27292880429.5e569ff84e4d0.gif'
// @ts-ignore
    document.getElementById("anh").innerHTML = `
<button class="btn btn-link " > <a href="http://localhost:64953/"> Back</a></button>
<img src="${this.img.name}" width="100%">
`
  }
  constructor() { }

  ngOnInit(): void {
  }


}
