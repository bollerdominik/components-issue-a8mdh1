import {Component, OnInit} from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'example-component',
  templateUrl: 'example-component.html',
  styleUrls: ['example-component.css'],
})
export class ExampleComponent implements OnInit {

    progress = 0;

  ngOnInit(): void {
    timer(0, 500)
      .subscribe(() => {
        this.progress += 0.5
      });
  }

    onProgressChanged(progress: number): void {
      console.log(progress);
      this.progress = progress;
  }
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */