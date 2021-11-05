import { Component } from '@angular/core';
import { DadServiceService } from './service/dad-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dad-joke';
  jokeList: string[] = [];
  joke: any;
  constructor(private dadService: DadServiceService) {}

  onGetJoke(joke: string): void {
  this.dadService.getJoke().subscribe(joke => {
    this.joke = joke
    console.log(joke)
  });
  console.log(joke)
  }

  onFavorite() {
    this.jokeList.push(this.joke.joke)
    console.log(this.jokeList)
    localStorage.setItem('joke', JSON.stringify(this.jokeList));
  }
}
