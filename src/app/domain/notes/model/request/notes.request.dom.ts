export class NotesRequestDom {
  id: number | null;
  title: string;
  description: string;
  status: boolean;
  createdAt: Date;
  constructor(
    id: number | null,
    title: string,
    description: string,
    status: boolean,
    createdAt: Date
  ){
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status
    this.createdAt = createdAt;
  }
}
