import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Usuario } from '../core/models';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent{
  showFiller = false;

  authUser: Usuario | null = null;
  authUserObs$: Observable<Usuario>;

  constructor(private authService: AuthService) {

    this.authUserObs$ = this.authService.obtenerUsuarioAutenticado();
  }
    
}
