import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Student, StudentMockData} from './student';

import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockServerService {

private userMockData = StudentMockData
constructor() {}

public getUsers(): Observable<Student[]> {
  return of(this.userMockData);
}

}
