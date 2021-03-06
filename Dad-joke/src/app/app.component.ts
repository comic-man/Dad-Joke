import { Component, OnInit } from '@angular/core';
import { DadServiceService } from './service/dad-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dad-joke';
  jokeList: any[] = [];
  joke: any;
  constructor(private dadService: DadServiceService) {}

  ngOnInit() {
    this.jokeList = JSON.parse(<string>localStorage.getItem('joke' )) || [];
  }

  onGetJoke(joke: string): void {
  this.dadService.getJoke().subscribe(joke => {
    this.joke = joke
    console.log(joke)
  });
  console.log(joke)
  }

  onFavorite() {
    this.jokeList.push(this.joke)
    console.log(this.jokeList)
    localStorage.setItem('joke', JSON.stringify(this.jokeList));
  }

  onUnfavoriteJoke(id: string) {
    this.jokeList = this.jokeList.filter(j => {
      if (j.id === id) {
        return false;
      }
      return true;
    })

  }
}
