import { Injectable } from '@angular/core';
import { Curriculum } from '../models/curriculum';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  constructor() { }

  loadDb() {
    return JSON.parse(window.localStorage.getItem('curriculums') || '[]');
  }

  save(curriculum: Curriculum) {

    return new Promise((resolve, reject) => {
      // Pega a lista já cadastrada, se não houver vira um array vazio
      let curriculums = this.loadDb();

      // Adiciona curriculum à lista de curriculums
      curriculums.push({
        id: parseInt(new Date().getTime().toString()),
        fullName: curriculum.fullName,
        address: curriculum.address,
        email: curriculum.email,
        phone: curriculum.phone,
        genero: curriculum.genero,
        professionalExp: curriculum.professionalExp,
        positionWish: curriculum.positionWish
      });

      // Salva a lista alterada
      window.localStorage.setItem("curriculums", JSON.stringify(curriculums));
      resolve();

    });
  }

  remove(curriculum) {

    let db = this.loadDb();

    //Retorno somente os id's
    let ids = db.map(function (e) {
      return e.id;
    });

    let index = ids.indexOf(curriculum.id); // Busco pelo indice desse id

    db.splice(index, 1); //Removo o indice do array

    // Salva a lista alterada
    window.localStorage.setItem("curriculums", JSON.stringify(db));

  }


  getById(id: string) {

    let listAux = this.loadDb();

    let filtered = listAux.filter(function (obj) {
      return obj.id == id;
    });


    return filtered[0];
  }

  getAll() {
    return this.loadDb();
  }


}