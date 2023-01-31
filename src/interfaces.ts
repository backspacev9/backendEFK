export interface Category {
  id: number;
  name: string;
  image: string;
}
export interface Card {
  id: number;
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
}
export interface CategoryWithCards {
  category: Category;
  cards: Array<Card>;
}
export interface FileResponse {
  public_id: string;
  folder: string;
  filename: string;
  format: string;
  resource_type: string;
  uploaded_at: string;
  bytes: number;
  url: string;
}

export interface AudioFileResponse extends FileResponse {
  duration: number;
}
export interface VideoFileResponse extends FileResponse {
  duration: number;
}
