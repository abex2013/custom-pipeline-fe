import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  userConnectionUrl = 'https://kafka-producer.herokuapp.com/api/v1/pipeline/';

  constructor() { }
}
