import {Observable} from "rxjs/Rx";
import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Led} from "../models/led";

@Injectable()
export class LedsService {
  private url = "http://localhost:54649/api/Led/";

  constructor(private http: Http) { }

  addLed(led: Led): Observable<Led> {
      return this.http.post(this.url, led)
          .map(this.extractData)
          .catch(this.handleError);
  }

  removeLed(id: number): Observable<Led> {
      return this.http.delete(this.url + id)
          .map(this.extractData)
          .catch(this.handleError);
  }

  updateLed(id: number, led: Led): Observable<Led> {
      return this.http.put(this.url + id, led)
          .map(this.extractData)
          .catch(this.handleError)
  }

  getLeds(): Observable<Led[]> {
    return this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getLed(id: number): Observable<Led> {
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
      console.log(error);
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
