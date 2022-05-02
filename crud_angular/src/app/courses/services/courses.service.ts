import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Course } from '../model/course';
import { delay, first, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  // injecao de dependencias
  constructor(private httpClient: HttpClient) { }

  list(){
    return this,this.httpClient.get<Course[]>(this.API).pipe(
      first(),
      delay(5000),
      tap(courses => console.log(courses))
    );
  }
}
