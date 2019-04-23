import { NgModule } from '@angular/core';
import { 
    MatToolbarModule,  
    MatSidenavModule,
    MatIconModule
} from '@angular/material';

@NgModule({
    imports:[
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule
    ],
    exports:[
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule
    ]
})
export class MaterialModule{

}