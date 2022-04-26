import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  ToggleNavBar() {
    let element: HTMLElement = document.getElementsByClassName(
      'navbar-toggler'
    )[0] as HTMLElement;
    if (element.getAttribute('aria-expanded') == 'true') {
      element.click();
    }
  }
}
