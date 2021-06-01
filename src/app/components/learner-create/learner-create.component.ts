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
    description: '',
    available: false
  };
  submitted = false;

  constructor(private learnerService: LearnerService) { }

  ngOnInit(): void {
  }

  createLearner(): void {
    const data = {
      name: this.learner.name,
      description: this.learner.description
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
      description: '',
      available: false
    };
  }
}
