import { Input, EventEmitter, Output } from '@angular/core';
import { Component } from "@angular/core";

declare const module;

@Component({
    selector: 'color-picker',
    moduleId: module.id,
    templateUrl: 'color-picker.component.html'
})
export class ColorPicker {
    @Input()
    color: string;

    @Output("selectedColor")
    colorOutput = new EventEmitter();

    choose(choosenColor: string) {
        console.log('choose..' + choosenColor);
        this.colorOutput.emit(choosenColor);
    }

    reset() {
        console.log('reset..');
        this.choose('black');
    }
}    