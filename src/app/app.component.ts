import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputText = "Texto Inicial Alterado";
  inputType = "password";
  isDisabled = false;

  enableInput() {
    this.isDisabled = false;
  }

  disableInput() {
    this.isDisabled = true;
  }

  setInputText() {
    this.inputText = "Gustavo Teixeira";
  }

  setInputType() {
    this.inputType = "text";
  }
}
