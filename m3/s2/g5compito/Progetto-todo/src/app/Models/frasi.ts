import { ITodo } from '../Modules/itodo';

export class Frasi implements ITodo {
  id!: number;

  constructor(public title: string, public completed: boolean) {}
}
