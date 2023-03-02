import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SelectivePreloadingStrategyService } from 'src/app/selective-preloading-strategy.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

sessionId!: Observable<string>;
  private _token!: Observable<string>;
  public get token(): Observable<string> {
    return this._token;
  }
  public set token(value: Observable<string>) {
    this._token = value;
  }
modules: string[] = [];

constructor(private route: ActivatedRoute, private preloadStrategy: SelectivePreloadingStrategyService) { 
  this.modules = this.preloadStrategy.preloadedModules;
}

  ngOnInit() {
    // Capture the session ID if available
    this.sessionId = this.route
      .queryParamMap
      .pipe(map(params => params.get('session_id') || 'None'));

    // Capture the fragment if available
    this.token = this.route
      .fragment
      .pipe(map(fragment => fragment || 'None'));

    // Capture the preloaded modules
    this.modules = this.preloadStrategy.preloadedModules;
  }

}
