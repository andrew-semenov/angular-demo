import { Component } from "@angular/core";

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html',
    styleUrls: ['./password.component.scss']
})

export class PasswordComponent {
    password: string = ''

    span1: string = 'gray'
    span2: string = 'gray'
    span3: string = 'gray'

    regExpLetters: RegExp = /[a-zA-Z]/
    regExpDigits: RegExp = /[0-9]/
    regExpSymbols: RegExp = /.[`,~,!,@,#,$,%,^,,&,*,(,),_,+,,=,|,-,;,',{,},/,<,>,?]/

    changeHandler(value: any) {
        this.password = value

        if (value.length >= 8) {
            if (
                value.match(this.regExpDigits) ||
                value.match(this.regExpLetters) ||
                value.match(this.regExpSymbols)
            ) {
                this.span1 = 'red'
                this.span2 = 'gray'
                this.span3 = 'gray'
            }
            if (
                (value.match(this.regExpLetters) && value.match(this.regExpSymbols)) ||
                (value.match(this.regExpLetters) && value.match(this.regExpDigits)) ||
                (value.match(this.regExpDigits) && value.match(this.regExpSymbols))
            ) {
                this.span1 = 'yellow'
                this.span2 = 'yellow'
                this.span3 = 'gray'
            }
            if (value.match(this.regExpDigits) && value.match(this.regExpLetters) && value.match(this.regExpSymbols)) {
                this.span1 = 'green'
                this.span2 = 'green'
                this.span3 = 'green'
            }
        } else if (value.length) {
            this.span1 = 'red'
            this.span2 = 'red'
            this.span3 = 'red'
        } else {
            this.span1 = 'gray'
            this.span2 = 'gray'
            this.span3 = 'gray'
        }
    }
}
