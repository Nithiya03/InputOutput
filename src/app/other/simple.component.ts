import { Component, Input,OnChanges, SimpleChanges,OnInit, Output,EventEmitter} from "@angular/core";
@Component({
    selector:'simple',
    templateUrl:'./simple.component.html'
})
export class simplecomponent implements OnChanges,OnInit{
    name:string='nithiya';
    entername:string='sri';
    @Input() simpleInput:string='';
    @Input() simpleInput1:string='';
    @Output() onNameChange:EventEmitter<string>=new EventEmitter<string>();

    ngOnChanges(changes: SimpleChanges): void {
        for(let propertyName in changes){
            let change = changes[propertyName];
            let current = change.currentValue;
            let previous = change.currentValue;
            console.log(propertyName + ': currentValue - ' + current +' previousValue - '+previous);
        }
    }
    outputChange(event:string):void{
        this.onNameChange.emit(event);
    }                                                                                        
    ngOnInit(): void {
        console.log (this.name);
    }

}  