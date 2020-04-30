import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
    private http: HttpClient
  ) { }

  getCourses(): Observable<any> {
    return this.http.get<any>('https://golf-courses-api.herokuapp.com/courses');
  }
  
  getCourseById() {

  }
}
