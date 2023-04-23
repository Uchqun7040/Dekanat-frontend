
export interface Page<Type> {
  content: Type[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: any;
  size: number;
  sort: { empty: boolean, sorted: boolean, unsorted: boolean };
  totalElements: number;
  totalPages: number;
}
