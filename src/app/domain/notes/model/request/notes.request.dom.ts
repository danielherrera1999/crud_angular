export class NotesRequestDom {
  id: number | null;
  title: string;
  description: string;
  createdAt: Date;
  constructor(
    id: number | null,
    title: string,
    description: string,
    createdAt: Date
  ){
    this.id = id;
    this.title = title;
    this.description = description;
    this.createdAt = createdAt;
  }
}
