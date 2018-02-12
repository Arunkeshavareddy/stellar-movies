import { Component, OnInit } from '@angular/core';
import { MovieServerService } from './service/movie-server.service'

import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  movieClicked = "";
  newMovies = [];
  errorMsg: string;
  showClearBtn: boolean = true;

  //when user selects the Movie List option then this function will get exicuted and clear button will be shown on Markup
  onClick(movie) {
    this.movieClicked = movie;
    this.showClearBtn = false;
  }

  //when user click clear button this function will be exicuted
  clearOpt() {
    this.movieClicked = "";
    this.showClearBtn = true;

  }

  constructor(private movieServer: MovieServerService, private httpClient: HttpClient) { }

  ngOnInit() {
    // Here the request is done by the Movie-Server-Service which is injected into appComponent and used.
    //
    //   this.movieServer.getMovies()
    //  .subscribe((data:any ) => {
    //    for( let i=0; i<data.results.length; i++){
    //       if(data.results[i].title){
    //        this.newMovies.push(data.results[i].title);
    //       }
    //    }
    //  },
    //              resMovieError => this.errorMsg = resMovieError); 


    //this is the direct HTTP request from appComponenet which is available only to this component.
    this.httpClient.get('https://api.themoviedb.org/3/movie/now_playing?api_key=0395f4bff5dd73f400dba4139e1e0b8c&language=en-US&page=1')
      .subscribe(
        (data: any) => {
          for (let i = 0; i < data.results.length; i++) {
            if (data.results[i].title) {
              this.newMovies.push(data.results[i].title);
            }
          }
        },
        resMovieError => this.errorMsg = resMovieError
      )
  }
}
