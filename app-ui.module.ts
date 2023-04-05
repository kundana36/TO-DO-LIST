import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatRadioModule} from "@angular/material/radio";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatBadgeModule} from "@angular/material/badge";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatStepperModule} from "@angular/material/stepper";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatPaginatorModule} from "@angular/material/paginator";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatRippleModule} from "@angular/material/core";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatSliderModule} from "@angular/material/slider";
import {OverlayModule} from '@angular/cdk/overlay';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';


export const MY_FORMATS = {
  parse: {
    dateInput: "LL",
  },
  display: {
    dateInput: "LL",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY",
  },
};

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatDividerModule,
    MatTabsModule,
    MatDatepickerModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatToolbarModule,
    MatTableModule,
    MatChipsModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatSelectModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatPaginatorModule,
    MatRippleModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatSliderModule,
    OverlayModule,
    DragDropModule,
    BrowserAnimationsModule,
    FlexLayoutModule

    // NgCircleProgressModule.forRoot({
    //   radius: 20,
    //   outerStrokeWidth: 2,
    //   innerStrokeWidth: 2,
    //   space: -2,
    //   backgroundStrokeWidth: 0,
    //   outerStrokeColor: "#142e2c",
    //   showInnerStroke: true,
    //   innerStrokeColor: "#e7e8ea",
    //   animationDuration: 300,
    //   showSubtitle: false,
    //   titleFontSize: "10",
    // })
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatDividerModule,
    MatTabsModule,
    MatDatepickerModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatToolbarModule,
    MatTableModule,
    MatChipsModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatSelectModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatPaginatorModule,
    MatRippleModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatSliderModule,
    DragDropModule,
    OverlayModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class AngularMaterialModule {}
