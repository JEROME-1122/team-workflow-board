import type { TaskPriority, TaskStatus } from "./task";

export interface TaskFilters {
  status: TaskStatus[];
  priority: TaskPriority[];
  search: string;
}
