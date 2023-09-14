export interface NotesRequestDto {
    id: number | null,
    title: string,
    description: string,
    status: boolean,
    createdAt: Date
}
