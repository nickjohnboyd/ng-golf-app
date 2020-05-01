import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CoursesService } from 'src/app/shared/courses.service';
import { Animations } from '../../animations';
import { Router } from '@angular/router';
import { BuildOptionsService } from 'src/app/shared/build-options.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  animations: [
    Animations.enterLeaveTrigger
  ]
})
export class CourseComponent implements OnInit {
  @Input() course: Course;
  
  isOpen = false;
  fullCourse: Course;
  teeTypes = [];

  teeType: string;
  playersNum: number;

  constructor(
    private coursesService: CoursesService,
    private buildOptionsService: BuildOptionsService
  ) { }

  ngOnInit(): void {
  }

  showOptions(id: number) {
    this.isOpen = !this.isOpen;
    this.coursesService.getCourseById(id).subscribe(course => {
      this.fullCourse = course;
      console.log(this.fullCourse);
      this.setTeeTypes(this.fullCourse);
    });
  }

  setTeeTypes(course) {
    course.data.holes[0].teeBoxes.map(teeBox => {
      if(teeBox.teeTypeId === 5) return;
      this.teeTypes.push(teeBox.teeType.charAt(0).toUpperCase() + teeBox.teeType.slice(1));
    });
    console.log(this.teeTypes);
  }

  buildScorecard() {
    this.buildOptionsService.setOptions(this.teeType, this.playersNum);
    const teeType = this.buildOptionsService.getTeeType();
    console.log(teeType);
  }

  
}
