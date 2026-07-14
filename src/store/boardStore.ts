import { create } from "zustand";

import type { Task } from "../types/task";
import type { TaskFilters } from "../types/filter";
import type { SortOption } from "../types/sort";

const STORAGE_KEY = "team-workflow-board";

const loadTasks = (): Task[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return [];
    }

    return JSON.parse(stored) as Task[];
  } catch (error) {
    console.error("Failed to load tasks", error);
    return [];
  }
};

const saveTasks = (tasks: Task[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error("Failed to save tasks", error);
  }
};

interface BoardStore {
  tasks: Task[];

  filters: TaskFilters;

  sort: SortOption;

  addTask: (task: Task) => void;

  updateTask: (task: Task) => void;

  deleteTask: (id: string) => void;

  setFilters: (filters: TaskFilters) => void;

  setSort: (sort: SortOption) => void;
}

export const useBoardStore = create<BoardStore>((set) => ({
  tasks: loadTasks(),

  filters: {
    status: [],
    priority: [],
    search: "",
  },

  sort: {
    field: "updatedAt",
    direction: "desc",
  },

  addTask: (task) =>
    set((state) => {
      const updatedTasks = [...state.tasks, task];

      saveTasks(updatedTasks);

      return {
        tasks: updatedTasks,
      };
    }),

  updateTask: (task) =>
    set((state) => {
      const updatedTasks = state.tasks.map((t) =>
        t.id === task.id ? task : t,
      );

      saveTasks(updatedTasks);

      return {
        tasks: updatedTasks,
      };
    }),

  deleteTask: (id) =>
    set((state) => {
      const updatedTasks = state.tasks.filter((task) => task.id !== id);

      saveTasks(updatedTasks);

      return {
        tasks: updatedTasks,
      };
    }),

  setFilters: (filters) =>
    set({
      filters,
    }),

  setSort: (sort) =>
    set({
      sort,
    }),
}));
