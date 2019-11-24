import { Component, OnInit } from '@angular/core';
import { Curriculum } from '../models/curriculum';
import { CurriculumService } from '../services/curriculum.service';
import { NgForm, FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ListCurriculumComponent } from '../list-curriculum/list-curriculum.component';


@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent implements OnInit {

  curriculum: Curriculum;


  constructor(private curricullumService: CurriculumService, private c : ListCurriculumComponent) {  }

  ngOnInit() {
    this.curriculum = new Curriculum();
    
  }
  onSubmit(form : NgForm) {
    this.curriculum = form.value;
    this.curriculum.id = new Date().getTime().toString(); //Macetezinho para gerar um "id" automatico
   
    
    this.curricullumService.save( this.curriculum).then(result => {
      form.reset();
    });

    //Depois de salvar, carrego os registros novamente
    this.c.loadCurriculums();
 }

}
