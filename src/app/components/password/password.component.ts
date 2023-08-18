import { Component } from "@angular/core";

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html',
    styleUrls: ['./password.component.scss']
})

export class PasswordComponent {
    showPassword = false;
    passValue: string = ''

    show = false

    span1: string = ''
    span2: string = ''
    span3: string = ''

    regExpLetters: RegExp = /[a-zA-Z]/
    regExpDigits: RegExp = /[0-9]/
    regExpSymbols: RegExp = /.[`,~,!,@,#,$,%,^,,&,*,(,),_,+,,=,|,-,;,',{,},/,<,>,?]/

    changeHandler(value: any) {
        this.passValue = value

        const hasDigits = value.match(this.regExpDigits)
        const hasLetters = value.match(this.regExpLetters)
        const hasSymbols = value.match(this.regExpSymbols)

        this.span1 = 'gray'
        this.span2 = 'gray'
        this.span3 = 'gray'

        if (value.length >= 8) {
            if (hasDigits || hasLetters || hasSymbols) {
                this.span1 = 'red'
            }
            if ((hasLetters && hasSymbols) || (hasLetters && hasDigits) || (hasDigits && hasSymbols)) {
                this.span1 = 'yellow'
                this.span2 = 'yellow'
            }
            if (hasDigits && hasLetters && hasSymbols) {
                this.span1 = 'green'
                this.span2 = 'green'
                this.span3 = 'green'
            }
        } else if (value.length) {
            this.span1 = 'red'
            this.span2 = 'red'
            this.span3 = 'red'
        }
    }
}
