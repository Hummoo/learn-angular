import { ColorPicker } from './components/color-picker/color-picker.component';
import { SearchBox } from './components/search-box/search-box.component';
import { Component } from "@angular/core";
import { NgModule } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { BrowserModule } from "@angular/platform-browser";

@Component({
    selector: 'my-app',
    template: '<color-picker #picker [color]="color" (selectedColor)="onchangeColor($event)"></color-picker><button (click)="picker.reset()">Reset</button>'
})
export class HelloWorld {    
    color:string;

    onchangeColor(color) {
        console.log("onchangeColor.." + color);
        this.color = color;
    }
}


@NgModule({
    declarations: [HelloWorld, ColorPicker],
    imports: [BrowserModule],
    bootstrap: [HelloWorld]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);


