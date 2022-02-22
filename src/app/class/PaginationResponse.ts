import {Signalement} from "./signalement";

export class PaginationResponse{
    elements!: Signalement[];
    pageNo!: number;
    pageSize!: number;
    totalElements!: number;
    totalPages!: number;
    last!: boolean;
    first!: boolean;
  }
