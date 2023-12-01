import { ITodo } from '../Modules/itodo';

export class Frasi implements ITodo {
  id!: number;
  completed!: boolean;
  static id: Promise<void>;
  constructor(public title: string) {}
}
