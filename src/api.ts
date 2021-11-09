import {FILMS_BY_ID, FILM_LIST_DATA} from './data';
import {PreviewFilm, DetailFilm} from './types';

export const fetchFilms = async (): Promise<PreviewFilm[]> => {
  return new Promise((resolve) => resolve(FILM_LIST_DATA.items));
};

export const fetchFilmById = async (id: string): Promise<DetailFilm | undefined> => {
  return new Promise((resolve) => resolve(FILMS_BY_ID[id]));
};
