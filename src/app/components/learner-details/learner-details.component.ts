import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LearnerService } from 'src/app/services/learner.service';

interface Learner {
  learner_name: string;
  learner_email: string;
  course_Id: number;
  available: boolean;
  learner_id: number;
}

@Component({
  selector: 'app-learner-details',
  templateUrl: './learner-details.component.html',
  styleUrls: ['./learner-details.component.css']
})
export class LearnerDetailsComponent implements OnInit {
  currentLearner: Learner = {
    learner_name: '',
    learner_email: '',
    course_Id: 0,
    available: false,
    learner_id: 0
  };
  message = '';

  constructor(
    private learnerService: LearnerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    const id = this.route.snapshot.paramMap.get('id');
    this.getLearner(id ? parseInt(id) : 0 );
    console.log(id);
  }

  getLearner(id: number): any {
    this.learnerService.read(id)
      .subscribe(
        learner => {
          this.currentLearner = learner[0];
          console.log(learner);
          console.log(this.currentLearner);
        },
        error => {
          console.log(error);
        }
      );
  }

  setAvailableStatus(status: boolean): void {
    const data = {
      learner_name: this.currentLearner.learner_name,
      learner_email: this.currentLearner.learner_email,
      course_Id: this.currentLearner.course_Id,
      available: status
    };

    this.learnerService.update(this.currentLearner.learner_id, data)
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
    this.learnerService.update(this.currentLearner.learner_id, this.currentLearner)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The learner was updated!';
          this.router.navigate(['/learners']);
        },
        error => {
          console.log(error);
        }
      );
  }

  deleteLearner(): void {
    this.learnerService.delete(this.currentLearner.learner_id)
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
