import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  buttonTitle = 'Título do botão';
  buttonDisabled = false;

  onButtonClick() {
    this.buttonTitle = 'Título alterado!';
    this.buttonDisabled = !this.buttonDisabled;
  }
}
