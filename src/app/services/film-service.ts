import { Injectable } from '@angular/core';
import {Film} from '../interfaces/film';

@Injectable({
  providedIn: 'root'
})

export class FilmService {
  public getFilms(): Film[]{
    return [
      {titre: "La La Land", affiche: "lalaland.jpg"},
      {titre: "Se7en", affiche: "se7en.jpg"},
      {titre: "The Truman Show", affiche: "thetrumanshow.jpg"},
      {titre: "The Nice Guys", affiche: "theniceguys.jpg"},
      {titre: "F1", affiche: "f1.jpg"}
    ]
  }
}
