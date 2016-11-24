import {Observable} from "rxjs/Rx";
import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {DataSensor} from "../models/datasensor";

@Injectable()
export class DataSensorService {
  private url = "http://localhost:52306/api/DataSensors/";

  constructor(private http: Http) { }

  getDataSensor(table: string): Observable<DataSensor[]> {
    return this.http.get(this.url + '?' + "tableName=" + table)
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
