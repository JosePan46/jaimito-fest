import { Component } from '@angular/core';

export interface Productos {
  name: string;
  position: number;
  tipo: string;
  cant_vendida: number;
}

const ELEMENT_DATA: Productos[] = [
  {position: 1, name: 'Coca cola', tipo: "Bebida", cant_vendida: 1120},
  {position: 2, name: 'Hot dog', tipo: "Comida", cant_vendida: 750},
  {position: 3, name: 'Combinado', tipo: "Bebida", cant_vendida: 730},
  {position: 4, name: 'Hamburguesas', tipo: "Comida", cant_vendida: 678},
  {position: 5, name: 'Pizza', tipo: "Comida", cant_vendida: 650},
  {position: 6, name: 'Red Bull', tipo: "Bebida", cant_vendida: 620},
  {position: 7, name: 'Mojito', tipo: "Bebida", cant_vendida: 589},
  {position: 8, name: 'Sex on the Beach', tipo: "Bebida", cant_vendida: 550},
  {position: 9, name: 'Agua', tipo: "Bebida", cant_vendida: 533},
  {position: 10, name: 'Bocadillos', tipo: "Comida", cant_vendida: 460},
];



@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  displayedColumns = ['position', 'name', 'tipo', 'cant_vendida'];
  dataSource = ELEMENT_DATA;
}
