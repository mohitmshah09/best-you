import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {

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
