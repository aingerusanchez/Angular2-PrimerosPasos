import { Injectable } from '@angular/core';
import { Receta } from '../model/receta';
import { MOCK_RECETA } from './mock.recetas';

@Injectable()
export class RecetasService {

  // Variable global
  recetas = new Array<Receta>();

  constructor() {
    console.log('RecetasService constructor()');
  }

  /**
   * Retorna todas las recetas
   */
  getAll(): Array<Receta> {
    console.log('RecetasService getAll()');
    // tslint:disable-next-line:prefer-const
    this.recetas = [];
    let receta;

    const jsonRecetas = JSON.parse(MOCK_RECETA);

    jsonRecetas.forEach( element => {

      receta = new Receta(
                          element.nombre,
                          element.descripcion,
                          element.foto,
                          element.likes,
                          element.isGlutenFree,
                          element.cocinero
                          );
      element.ingredientes.forEach(ingrediente => {
        receta.addIngrediente(ingrediente);
      });
      this.recetas.push(receta);

    });

    return this.recetas;
  }

  /**
   * Añadir nuevas recetas introducidas por el usuario
   * @param receta : nueva receta a añadir
   */
  add( receta: Receta ) {
    console.log('RecetasService add(receta)');
    this.recetas.unshift(receta);
  }

}
