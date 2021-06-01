import { Component, OnInit } from '@angular/core';
import { LearnerService } from 'src/app/services/learner.service';

@Component({
  selector: 'app-learner-list',
  templateUrl: './learner-list.component.html',
  styleUrls: ['./learner-list.component.css']
})
export class LearnerListComponent implements OnInit {

  learners: any;
  currentLearner = null;
  currentIndex = -1;
  name = '';

  constructor(private learnerService: LearnerService) { }

  ngOnInit(): void {
    this.readLearners();
  }

  readLearners(): void {
    this.learnerService.readAll()
      .subscribe(
        learners => {
          this.learners = learners;
          console.log(learners);
        },
        error => {
          console.log(error);
        }
      );
  }

  refresh(): void {
    this.readLearners();
    this.currentLearner = null,
    this.currentIndex = -1;
  }

  setCurrentLearner(learner, index): void {
    this.currentLearner = learner;
    this.currentIndex = index;
  }

  deleteAllLearners(): void {
    this.learnerService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.readLearners();
        },
        error => {
          console.log(error);
        }
      );
  }

  searchByName(): void {
    this.learnerService.searchByName(this.name)
      .subscribe(
        learners => {
          this.learners = learners;
          console.log(learners);
        },
        error =>  {
          console.log(error);
        }
      );
  }
}
