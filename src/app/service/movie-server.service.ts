import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class MovieServerService {
  private _url: any = "https://api.themoviedb.org/3/movie/now_playing?api_key=0395f4bff5dd73f400dba4139e1e0b8c&language=en-US&page=1";

  constructor(private http: Http) { }


  getMovies() {
    return this.http.get(this._url)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }
  errorHandler(error: Response) {
    return Observable.throw(error || "Server Error");
  }

}
