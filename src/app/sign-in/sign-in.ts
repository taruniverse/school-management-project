import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  imports: [],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {
  emailEntered: boolean = false;
  intervalId: any;
  time = signal(10);
  formattedTime = signal('');
  resentOTP: boolean = false;

  constructor() {
    effect(() => {
      this.formattedTime.set(this.transform(this.time()));
    });
  }

  sendOTP() {
    this.emailEntered = true;
    this.startTimer();
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      if (this.time() > 0) {
        this.time.update((v) => v - 1);
      } else {
        this.clearTimer();
      }
    }, 1000);
  }

  transform(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  clearTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  ngOnDestroy() {
    this.clearTimer();
  }
}
