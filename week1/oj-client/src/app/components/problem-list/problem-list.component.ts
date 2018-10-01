import { Component, OnInit, Inject } from '@angular/core';
import { Problem } from '../../models/problem.model';
import { PROBLEMS } from '../../mock-problems';



@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
  // only declarate a const PROBLEM, but no meaning, here is to create a comppnent varialbe and function

  problems: Problem[];
  // declarate - Problem[] class
  // force type Problem[]

// make it get the services -> in provider. and make it named data - private
  constructor(@Inject("data") private data) { }

  ngOnInit() {
    // this.problems = PROBLEMS;
    // component create would use consructor funciton, so the variable problems = const PROBLEMS

    // however, we should not just uset the const, is not best, we use services to make it can be useb by others
    // so we use this to connect to the services not the const value, and then via data services, to get the const
    this.getProblems();
  }

  getProblems(): void{
    this.problems = this.data.getProblems();
  }

}
