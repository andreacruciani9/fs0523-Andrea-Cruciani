import { ITodo } from '../Modules/itodo';

export class Frasi implements ITodo {
  id!: number;
  completed!: boolean;

  constructor(public title: string) {}
}
