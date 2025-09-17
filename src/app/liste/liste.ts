import {Component, inject} from '@angular/core';
import {FilmService} from '../services/film-service';
import {MatCard, MatCardModule} from '@angular/material/card';
import {Film} from '../interfaces/film';

@Component({
  selector: 'app-liste',
  imports: [
    MatCardModule
  ],
  templateUrl: './liste.html',
  styleUrl: './liste.scss'
})
export class Liste {
  private filmService = inject(FilmService);
  public films = this.filmService.getFilms();
  public selectedFilm : Film | undefined;

  public selectFilm(index: number){
    this.selectedFilm=this.films[index];
  }
}
