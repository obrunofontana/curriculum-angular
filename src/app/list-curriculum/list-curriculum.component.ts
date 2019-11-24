import { Component, OnInit } from '@angular/core';
import { Curriculum } from '../models/curriculum';
import { CurriculumService } from '../services/curriculum.service';

@Component({
  selector: 'app-list-curriculum',
  templateUrl: './list-curriculum.component.html',
  styleUrls: ['./list-curriculum.component.css']
})
export class ListCurriculumComponent implements OnInit {

  listCurriculum: Curriculum[];

  constructor(private curricullumService: CurriculumService) { }

  ngOnInit() {
    this.loadCurriculums();
  }

  loadCurriculums() {

    this.listCurriculum = this.curricullumService.getAll();
    
  }

  removeRegistry(curriculum) {
    this.curricullumService.remove(curriculum);

    this.loadCurriculums();
  }

  editarRegistry(curriculum){
    alert('Opcao em desenvolvimento xD, pois o dev. não sabia passar as informações para o modal')
  }

}
