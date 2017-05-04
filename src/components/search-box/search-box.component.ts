
import { Component, Input } from "@angular/core"

declare const module;

@Component({
    selector: 'search-box',
    moduleId: module.id,
    templateUrl: 'search-box.component.html',
    styleUrls: ['search-box.component.css']
})
export class SearchBox {
    @Input('placeholderText')
    text = 'Type your search here';

    clear(input) {
        console.log('Clear is clicked');
        input.value = '';
    }
}