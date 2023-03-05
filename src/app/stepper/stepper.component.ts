import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StepperComponent implements AfterViewInit {

  @ViewChild(MatStepper) stepper!: MatStepper;
  stepperOrientation$: Observable<StepperOrientation>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.stepperOrientation$ = breakpointObserver.observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }
  ngAfterViewInit(): void {
    this.stepper._getIndicatorType = () => 'number';
  }
}
