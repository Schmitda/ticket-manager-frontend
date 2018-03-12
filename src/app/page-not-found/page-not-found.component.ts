import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ticket-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  public timer: number = 5;

  constructor(private router: Router) {
    const interval = setInterval(() => {
      this.timer--;
      if (this.timer === 0) {
        this.router.navigateByUrl('/home');
        clearInterval(interval);
      }
    }, 1000);
  }

  ngOnInit() {
  }

}
