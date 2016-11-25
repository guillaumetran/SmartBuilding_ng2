import {Observable} from "rxjs/Rx";
import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Sensor} from "../models/sensor";

@Injectable()
export class SensorsService {
  private url = "http://localhost:54649/api/Sensor/";

  constructor(private http: Http) { }

  addSensor(sensor: Sensor): Observable<Sensor> {
      return this.http.post(this.url, sensor)
          .map(this.extractData)
          .catch(this.handleError);
  }

  removeSensor(id: string): Observable<Sensor> {
      return this.http.delete(this.url + id)
          .map(this.extractData)
          .catch(this.handleError);
  }

  getSensors(): Observable<Sensor[]> {
    return this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getSensor(id: string): Observable<Sensor> {
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
