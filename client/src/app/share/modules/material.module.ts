import { NgModule } from '@angular/core';
import { MatToolbarModule,MatButtonModule,MatInputModule,MatFormFieldModule,MatCardModule, MatIconModule } from "@angular/material";


const MODULE=[MatToolbarModule,MatButtonModule,MatInputModule,MatFormFieldModule,MatCardModule,MatIconModule]
@NgModule({
  declarations:[],
  imports: MODULE
  ,exports:MODULE
})
export class MaterialModule { }
