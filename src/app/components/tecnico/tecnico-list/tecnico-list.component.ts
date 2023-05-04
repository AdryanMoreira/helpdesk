import { createViewChild } from '@angular/compiler/src/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { Tecnico } from 'src/app/models/tecnico';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit {

  ELEMENT_DATA: Tecnico[] = [
    {
      id: 1,
      nome: 'Valdir Cezar',
      cpf: '123.456.789-10',
      email: 'Valdir@email.com',
      senha: '1234',
      perfis: ['0'],
      dataCriacao: '15/08/2022'
    }

  ]
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', "acoes"];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);
  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}