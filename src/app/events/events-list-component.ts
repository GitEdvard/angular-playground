import { Component } from '@angular/core'

@Component ({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr>
      <event-thumbnail #thumbnail [event]="event1"></event-thumbnail>
      <h3>{{thumbnail.someProperty}}</h3>
      <button class="btn btn-primary" (click) = "thumbnail.logFoo()">Log me some foo</button>
    </div>
  `
})
export class EventsListComponent {
  event1 = {
    id: 1,
    name: 'Angular connect',
    date: '230131',
    time: '14:30:00',
    price: 10,
    imageUrl: '/assets/images/angularconnectl-shield.png',
    location: {
      address: '1035 DT',
      city: 'London',
      country: 'England',
    }
  }
}
