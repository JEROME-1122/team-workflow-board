export type SortField = "createdAt" | "updatedAt" | "priority";

export type SortDirection = "asc" | "desc";

export interface SortOption {
  field: SortField;
  direction: SortDirection;
}
