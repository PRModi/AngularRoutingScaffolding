import { HeaderComponent } from './../../shared/component/header/header.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from '../../shared/component/footer/footer.component';
import { PageRoutingModule } from './page/page.routing.module';



@NgModule({
    imports: [
        CommonModule,
        PageRoutingModule
    ],
    exports: [HeaderComponent, FooterComponent],

    declarations: [HeaderComponent, FooterComponent]
})
export class SharedModule { }
