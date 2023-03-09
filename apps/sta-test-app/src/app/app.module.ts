import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreDataModule } from '@sta/core-data';
import { CoreStateModule } from '@sta/core-state';
import { MaterialModule } from '@sta/material';
import { AppComponent } from './app.component';
import { HomesComponent } from './homes/homes.component';
import { RoutingModule } from './routing.module';
import { TicketDetailsComponent } from './tickets/ticket-details/ticket-details.component';
import { TicketsListComponent } from './tickets/tickets-list/tickets-list.component';
import { TicketsComponent } from './tickets/tickets.component';

@NgModule({
  declarations: [AppComponent, TicketsComponent, TicketsListComponent, TicketDetailsComponent, HomesComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreDataModule,
    CoreStateModule,
    HttpClientModule,
    MaterialModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
