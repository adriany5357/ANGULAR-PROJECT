import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'angular-project';
  name: string = 'Adrian';
  age: number = 17;
  friends: Array<string> = ["2", "3"];
  random: Array<any> = ["Hola , true, 25"];
  resultado: number | string = '';


  data1: number = 0;
  data2: number = 0;

  public setdata(event: any) {
    this.data1 = Number(event.target.value);

  }
  public setdata2(event: any) {
    this.data2 = Number(event.target.value);
  }



  calculator(number1: number, number2: number, operation: string): number | any {

    switch (operation) {
      case '+':
        return this.resultado = number1 + number2;

      case '-':
        return this.resultado = number1 - number2;



      default:
        //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
        break;
    }
  }


  ngOnInit() {
    // this.executeLoop();
    this.executeIfLoop()

  }

  executeLoop() {
    const arrLooEx: string[] = ["Hola", "Mundo", "hola otra vez", "clase", "6"];
    for (let index = 0; index < arrLooEx.length; index = index + 2) {
      const element = arrLooEx[index];
      console.log(element);

    }
  }

  executeIfLoop() {
    const arrcompl: any[] = ["hola", "2", 2, true, false, "mundo"];
    const arrcomp2: any[] = ["sol", "luna", "zapato", "bbyy", "2", "hola", "mundo"];

    for (let i= 0; i < arrcompl.length; i++) {
      const element1 = arrcompl[i];
    
      for (let j = 0; j < arrcomp2.length; j++) {
        const element2 = arrcomp2[j];
        if(element1===element2) {
          console.log("la posición",i,"del primer array y la posición del segundo array",j,"soniguales")
        }
      }
    }

  }







}












