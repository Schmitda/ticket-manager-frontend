import {Component, HostListener, NgZone, OnInit} from '@angular/core';
import {TicketService} from '../services/ticket.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TicketInterface} from '../types/TicketInterface';

@Component({
  selector: 'ticket-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {

 /* @HostListener('window:updateTicket', ['$event'])
  updateNodes(event) {
    console.log(event.detail);
    this.ticket = event.detail;
    // Im Browser
    /!*dispatchEvent(new CustomEvent('eventName', {'detail': data}))*!/
  }*/



  public ticket: TicketInterface;

  constructor(private ticketService: TicketService, private router: Router, private route: ActivatedRoute, private ngZone: NgZone) {
    this.route.params.subscribe((val) => {
      if (val['id']) {
        this.ticketService.getById(val['id']).subscribe((val) => {
          this.ticket = val;
        });
      }
    });
    /*this.ticketService.newDataToShow.subscribe((val) => {
      this.ngZone.run(() => {
        this.ticket = val;
      });
    });*/
  }

  public close() {
    this.ticketService.delete(this.ticket._id).subscribe((val) => {
      this.router.navigateByUrl('/home');
    });
  }


  ngOnInit() {
  }

}
