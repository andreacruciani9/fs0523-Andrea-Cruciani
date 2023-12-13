import { ICordinate } from './i-cordinate';
import { iNomeCitta } from './i-nome-citta';

export interface IloveIt {
  geodataCity: ICordinate | undefined;
  WeatherCity: iNomeCitta | undefined;
  Iduser: string | undefined;

  id?: number | undefined;
}
