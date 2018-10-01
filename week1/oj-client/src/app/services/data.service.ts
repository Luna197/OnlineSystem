import { Injectable } from '@angular/core';
// injectable: can be used(injected) by others

import{ Problem } from '../models/problem.model'
import { PROBLEMS } from '../mock-problems'


@Injectable()
export class DataService {

  constructor() { }

  // get the const PROBLEM
    getProblems(): Problem[]{
      return PROBLEMS;
    }

    // show single problem, array,
    getProblem(id: number): Problem{
    return PROBLEMS.find((problem) => problem.id === id)
  }
}
