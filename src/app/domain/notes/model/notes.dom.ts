export class NotesDom{
  constructor(
    readonly id: number,
    readonly title: string,
    readonly description: string,
    readonly status: boolean,
    readonly createdAt: Date
  ){}
}
