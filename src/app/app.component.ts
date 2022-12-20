import { Component, OnInit } from '@angular/core';
import { CountiesService } from './counties.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Dependent List';
  countryNames: any = [];
  // state: any = [];
  filteredState: any = [];

  constructor(private countryService: CountiesService) {}

  ngOnInit() {
    this.getCountry();
    // this.getState();
  }

  getCountry() {
    this.countryService.getCountry().subscribe((res) => {
      this.countryNames = res;
      this.countryNames.sort((a, b) => {
        // if (a.country > b.country) {
        //   return 1;
        // }
        // if (a.country < b.country) {
        //   return -1;
        // }
        // return 0;
        return a.country > b.country ? 1 : a.country < b.country ? -1 : 0;
      });
    });
  }

  onSelect(event) {
    this.countryService.getState().subscribe((res) => {
      let state: any = [];
      state = res;
      state?.filter((s) => {
        if (event.value == s.country_id) {
          this.filteredState = [];
          s.state.forEach((element) => {
            this.filteredState.push(element);
          });
        }
      });
    });
  }
}
