export class Actor {
  Name: string;
  id: string;

  constructor(Name: string, id: number) {
    this.Name = Name;
    this.id = String(id);
  }
}
