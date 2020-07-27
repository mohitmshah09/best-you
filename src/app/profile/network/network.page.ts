import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-network',
  templateUrl: './network.page.html',
  styleUrls: ['./network.page.scss'],
})
export class NetworkPage implements OnInit {

  isSearchBarVisible: Boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggleSearchBar() {
    this.isSearchBarVisible = !this.isSearchBarVisible
    // this.isSearchBarVisible = true;
  }
  onScroll(e){
  }
}
