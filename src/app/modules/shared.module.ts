import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RequireFalseDirective} from '../require-false.directive';
import {SearchTicketComponent} from '../search-ticket/search-ticket.component';
import {StringToBrPipe} from '../string-to-br.pipe';
import {PhonePipe} from '../phone.pipe';
import {RandomNumberPipe} from '../random-number.pipe';
import {ConvertLinkPipe} from '../convert-link.pipe';
import {MessageComponent} from '../messages/message/message.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    RequireFalseDirective,
    SearchTicketComponent,
    ReactiveFormsModule,
    StringToBrPipe,
    PhonePipe,
    RandomNumberPipe,
    ConvertLinkPipe,
    MessageComponent
  ],
  declarations: [
    RequireFalseDirective,
    SearchTicketComponent,
    StringToBrPipe,
    PhonePipe,
    RandomNumberPipe,
    ConvertLinkPipe,
    MessageComponent
  ],
  providers: [],
})
export class SharedModule {
}
