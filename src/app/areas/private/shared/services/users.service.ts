import {Observable} from "rxjs/Rx";
import {Http, Response} from "@angular/http";
import {User} from "../models/user";
import {Injectable} from "@angular/core";

@Injectable()
export class UsersService {
  private url = "http://localhost:54649/api/User/";

  constructor(private http: Http) { }

  getUsers(): Observable<User[]> {
    return this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getUser(id: string): Observable<User> {
      return this.http.get(this.url + id)
          .map(this.extractData)
          .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json() || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
