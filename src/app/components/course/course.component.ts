import { Component, OnInit, Input, Output } from '@angular/core';
import { Course } from 'src/app/models/course';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  animations: [
    trigger('enterLeave', [
      transition(':enter', [
        style({
          height: 0,
          opacity: 0
        }),
        animate('0.5s ease-out', style({
          height: '*',
          opacity: 1
        }))
      ]),
      transition(':leave', [
        style({
          height: '*',
          opacity: 1
        }),
        animate('0.5s ease-in', style({
          height: 0,
          opacity: 0
        }))
      ])
    ]),
    trigger('openClose', [
      state('open', style({
        height: '*',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '*',
        opacity: 0,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('0.35s')
      ]),
      transition('closed => open', [
        animate('0.35s')
      ])
    ])  
  ]
})
export class CourseComponent implements OnInit {
  @Input() course: Course;
  isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  showOptions() {
    this.isOpen = !this.isOpen;
  }

}
