import { Component } from "@angular/core";
import { AcountService } from "../acount.service";

@Component({
    selector: 'app-new-acount',
    templateUrl: './new-acount.component.html'
})
export class NewAcountComponent {
    title: string = '';
    status: string = 'active';

    constructor(private acservice: AcountService){}

    creatNewAcount(){
        if(this.title != '') this.acservice.addNewAcount(this.title, this.status);
        this.title = '';
        this.status = 'active';
    }
}