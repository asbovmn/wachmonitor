import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {animate, animateChild, group, query, stagger, state, style, transition, trigger} from '@angular/animations';
import {Fahrzeug} from '../../models/fahrzeug';
import {StatusService} from '../../services/status.service';
import {Status} from '../../models/status';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-fahrzeug-row',
  templateUrl: './fahrzeug-row.component.html',
  styleUrls: ['./fahrzeug-row.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'scale(1)', opacity: '1'})),
      transition(':enter', [
        style({transform: 'scale(0)', opacity: '0'}),
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)')
      ]),
      transition(':leave', [
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({transform: 'scale(0)', opacity: '0'}))
      ])
    ])
  ]
})
export class FahrzeugRowComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  private fahrzeugeInput: string[] = [];
  public fahrzeugList: Fahrzeug[] = [];

  constructor(private statusService: StatusService) {
  }

  ngOnInit(): void {
    this.init();
  }

  private init(): void {
    const self = this;
    this.fahrzeugeInput.forEach(item => {
      const f = new Fahrzeug();
      f.rufname = item;

      self.statusService.getAndWatchStatus(f.rufname).pipe(takeUntil(this.unsubscribe$)).subscribe((status: Status) => f.status = status);

      this.fahrzeugList.push(f);
    });
  }

  @Input()
  set fahrzeuge(fahrzeuge: string[]) {
    this.fahrzeugList = [];
    this.unsubscribe();
    this.unsubscribe$ = new Subject<void>();
    this.init();

    this.fahrzeugeInput = fahrzeuge;
  }

  filterFahrzeug(fahrzeug: Fahrzeug) {
    return fahrzeug.status && fahrzeug.status.value !== 6;
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }

  private unsubscribe() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
