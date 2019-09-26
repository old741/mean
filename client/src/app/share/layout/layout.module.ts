import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule,MatButtonModule,MatInputModule,MatFormFieldModule,MatCardModule, MatIconModule } from "@angular/material";


const MODULE=[FlexLayoutModule,MatToolbarModule,MatButtonModule,MatInputModule,MatFormFieldModule,MatCardModule,MatIconModule]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MODULE
  ],
  exports:MODULE
})
export class LayoutModule { }
