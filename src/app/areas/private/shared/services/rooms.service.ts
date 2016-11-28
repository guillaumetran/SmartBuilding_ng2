import {Observable} from "rxjs/Rx";
import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Room} from "../models/room";

@Injectable()
export class RoomsService {
  private url = "http://localhost:54649/api/Room/";

  constructor(private http: Http) { }

  addRoom(room: Room): Observable<Room> {
      return this.http.post(this.url, room)
          .map(this.extractData)
          .catch(this.handleError);
  }

  removeRoom(id: string): Observable<Room> {
      return this.http.delete(this.url + id)
          .map(this.extractData)
          .catch(this.handleError);
  }

  updateRoom(id: string, room: Room): Observable<Room> {
      return this.http.put(this.url + id, room)
          .map(this.extractData)
          .catch(this.handleError)
  }

  getRooms(): Observable<Room[]> {
    return this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getRoom(id: string): Observable<Room> {
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
