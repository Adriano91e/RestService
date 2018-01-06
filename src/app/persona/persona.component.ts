import {Component, OnInit} from '@angular/core';
import {PersonaService} from "../services/persona.service";
import {Persona} from "../persona";

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  private listaPersone: Persona[];

  private persona: Persona = {nome: "Adolf", cognome: "Hitler", eta: 88};

  constructor(private personaService: PersonaService) {
    this.getListPersona();
    this.savePersona(this.persona);
  }

  ngOnInit() {
  }

  getListPersona() {
    this.personaService.getListPersona().subscribe(data => {
      this.listaPersone = data;
      console.log(this.listaPersone);
    }, err => {
      console.error(err);
    })
  }

  savePersona(persona) {
    this.personaService.savePersona(persona).subscribe(data => {
      console.log(data);
    }, err => {
      console.error(err);
    })
  }

  findById(id) {
    this.personaService.findById(id).subscribe(data => {
      console.log(data);
    }, err => {
      console.error(err);
    })
  }

}
