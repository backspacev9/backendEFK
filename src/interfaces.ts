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
