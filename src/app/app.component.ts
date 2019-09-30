import { Component, OnInit } from '@angular/core';
import {MovieserviceService} from './Services/movieservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'movie-app';
MyMovies: any = [];
  constructor(private movieservice:MovieserviceService){
    this.movieservice.GetMovieInformation().subscribe((data)=>{

      this.MyMovies = data.Search;
      console.log(this.MyMovies);

})
  

}
}
