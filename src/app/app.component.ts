import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthButton1 = '110px';
  widthButton2 = 130;

  stylesObj = {
    width: '160px',
    backgroundColor: 'grey'
  }

  updateStyleObj() {
    console.log("updateStyleObj");
    this.stylesObj.backgroundColor = 'green';
    this.stylesObj.width = '200px';
  }

  updateStyleObjCorrect() {
    console.log("updateStyleObjCorrect");
    this.stylesObj = {
      width: '170px',
      backgroundColor: 'lightblue'
    }
  }

  updateWidth() {
    console.log('updateWidth')
    this.widthButton2 = 200;
  }
}
