import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var kendo: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    $(document).ready(function () {
      $("#wrap img").hover(function () {
        kendo.fx(this).zoom("in").startValue(1).endValue(1.5).play();
      }, function () {
        kendo.fx(this).zoom("out").endValue(1).startValue(1.5).play();
      });

    })
  }
}
