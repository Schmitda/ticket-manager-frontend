import {Component, NgZone, OnInit} from '@angular/core';
import {TicketService} from '../services/ticket.service';
import {TicketInterface} from '../types/TicketInterface';

@Component({
  selector: 'ticket-ticket-overview',
  templateUrl: './ticket-overview.component.html',
  styleUrls: ['./ticket-overview.component.css']
})
export class TicketOverviewComponent implements OnInit {
  public myTickets: TicketInterface[];


  public updateTickets(val: { tickets: TicketInterface[], searchTerm: string }) {
    console.log(val);
    if (val.searchTerm === '') {
      this.loadAll();
    } else {
      this.myTickets = val.tickets;
    }
  }

  public loadAll() {
    this.ticketService.getAll().subscribe((val) => {
      this.myTickets = val;
      console.log(val);
    });
  }

  constructor(private ticketService: TicketService, private _ngZone: NgZone) {
    this.loadAll();
    window['ticketOverViewObject'] = {component: this, zone: this._ngZone};
    /*ticketOverViewObject.zone.run(() => {
      ticketOverViewObject.component.myTickets = [{subject: 'Test', create: new Date(), owner: null}];
    });*/
  }


  public deleteTicket(ticket: TicketInterface) {
    this.ticketService.delete(ticket._id).subscribe((val) => {

    });
  }

  ngOnInit() {
  }

}
