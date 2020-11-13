import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {timer} from 'rxjs';

@Component({
  selector: 'example-component',
  templateUrl: 'example-component.html',
  styleUrls: ['example-component.css'],
})
export class ExampleComponent implements OnInit, AfterViewInit {

  @ViewChild('audioElement') audioElement: ElementRef<HTMLAudioElement>;

  showProgress: boolean;

  ngOnInit(): void {
    timer(0, 100)
      .subscribe(() => {
        // just something to trigger change detection
      });
  }

  ngAfterViewInit(): void {
  }

  getProgress(): number {
    return this.getCurrentSeconds() / this.getTotalTime() * 100;
  }

  getCurrentSeconds(): number {
    return this.audioElement.nativeElement.currentTime;
  }

  getTotalTime(): number {
    return this.audioElement.nativeElement.duration;
  }

  onProgressChanged(value: number) {
    this.audioElement.nativeElement.currentTime = this.getTotalTime() * (value / 100);
  }

  onPlayClicked() {
    this.showProgress = true;
    this.audioElement.nativeElement.play();
  }
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license */
