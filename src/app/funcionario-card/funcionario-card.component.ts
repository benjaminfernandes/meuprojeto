import { Component, Input, OnInit, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  //styleUrls: ['./funcionario-card.component.css']
  styles: [`
    .card {
      text-transform: uppercase;
      color: blue;
    }
  `]
})
export class FuncionarioCardComponent {

  @Input() funcionario: any;

  //getClassesCss(){
  //  return ['badge', 'badge-primary']
  //}

  isAdmin(){
    return this.funcionario.nome.startsWith('B');
  }

  getEstilosCartao(){
    return {
      borderWidth: this.funcionario.id + 'px',
      backgroundColor : this.funcionario.id % 2 == 0 ? 'lightblue' : 'lightgreen'
    }
  }

}
