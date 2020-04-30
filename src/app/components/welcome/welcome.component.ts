import { Component, OnInit, OnChanges } from '@angular/core';
import { CoursesService } from 'src/app/shared/courses.service';
import { Course } from 'src/app/models/course';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  courses: Course[];

  constructor(
    private coursesService: CoursesService
  ) { }

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe(courses => {
      this.courses = courses.courses;
      console.log(this.courses);
    });
  }

}
