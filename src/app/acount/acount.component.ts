import { Component, Input } from "@angular/core";
import { AcountService } from "../acount.service";

@Component({
    selector: 'app-acount',
    templateUrl: './acount.component.html'
})
export class AcountComponent {
    @Input() title?: string;
    @Input() status?: string;
    @Input() id!: number;

    constructor(private acservice: AcountService){}

    toActive() {
        this.acservice.changeStatus('active', this.id);
    }
    toInActive() {
        this.acservice.changeStatus('inActive', this.id);
    }
    toUknown() {
        this.acservice.changeStatus('unknown', this.id);
    }
}