import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  //String interpolation {{}} - one way binding
  //property binding [] - one way binding
  //event binding
  // two way binding using ngModel
  movieName = 'Avengers The End Game'
  displayMovieName = '';
  toggleMovieName = '';
 display = false;
  constructor() { }

  ngOnInit(): void {
  }

showMovie(){
  this.displayMovieName = 'Captain America';
}
showToggleMovie(){
  this.display = !this.display;
  if(this.display){
    this.toggleMovieName = 'X men'
  }
  else{
    this.toggleMovieName = ''
  }
}


}
