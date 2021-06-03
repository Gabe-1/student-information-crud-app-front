import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LearnerService } from 'src/app/services/learner.service';

interface Learner {
  name: string,
  email: string,
  courseId: 0,
  available: boolean,
  id: number
}

@Component({
  selector: 'app-learner-details',
  templateUrl: './learner-details.component.html',
  styleUrls: ['./learner-details.component.css']
})
export class LearnerDetailsComponent implements OnInit {
  currentLearner: Learner | any = undefined;
  message = '';

  constructor(
    private learnerService: LearnerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getLearner(this.route.snapshot.paramMap.get('courseId'));
  }

  getLearner(courseId: any): void {
    this.learnerService.read(courseId)
      .subscribe(
        learner => {
          this.currentLearner = learner;
          console.log(learner);
        },
        error => {
          console.log(error);
        }
      );
  }

  setAvailableStatus(status: boolean): void {
    const data = {
      learner_name: this.currentLearner.name,
      learner_email: this.currentLearner.email,
      course_Id: this.currentLearner.courseId,
      available: status
    };

    this.learnerService.update(this.currentLearner.id, data)
      .subscribe(
        response => {
          this.currentLearner.available = status;
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }

  updateLearner(): void {
    this.learnerService.update(this.currentLearner.id, this.currentLearner)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The learner was updated!';
        },
        error => {
          console.log(error);
        }
      );
  }

  deleteLearner(): void {
    this.learnerService.delete(this.currentLearner.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/learners']);
        },
        error => {
          console.log(error);
        }
      );
  }
}
