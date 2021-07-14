import { Category } from "./interface/category";

const categories: Category[] = [
  {
    id: 1,
    name: "cat1",
  },
  {
    id: 2,
    name: "cat2",
  },
  {
    id: 3,
    name: "cat3",
  },
  {
    id: 4,
    name: "cat4",
  },
];

export function getCategory(): Promise<Category[]> {
  return Promise.resolve(categories);
}
