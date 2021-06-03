import { Component, OnInit } from '@angular/core';
import { LearnerService } from 'src/app/services/learner.service';

@Component({
  selector: 'app-learner-create',
  templateUrl: './learner-create.component.html',
  styleUrls: ['./learner-create.component.css']
})
export class LearnerCreateComponent implements OnInit {
  learner = {
    name: '',
    email: '',
    courseId: 0,
    available: false
  };
  submitted = false;

  constructor(private learnerService: LearnerService) { }

  ngOnInit(): void {
  }

  createLearner(): void {
    const data = {
      learner_name: this.learner.name,
      learner_email: this.learner.email,
      course_Id: this.learner.courseId
    };

    this.learnerService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        }
      );
  }

  newLearner(): void {
    this.submitted = false;
    this.learner = {
      name: '',
      email: '',
      courseId: 0,
      available: false
    };
  }
}
