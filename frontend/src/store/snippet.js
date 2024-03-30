import { create } from "zustand";

export const useSnippetStore = create((set) => ({
  snippets: [],
  addSnippet: (snippet) =>
    set((state) => ({ snippets: [...state.snippets, snippet] })),
  deleteSnippet: (id) =>
    set((state) => ({
      snippets: state.snippets.filter((snippet) => snippet.id !== id),
    })),
  updateSnippet: (id, updatedSnippet) =>
    set((state) => ({
      snippets: state.snippets.map((snippet) =>
        snippet.id === id ? updatedSnippet : snippet
      ),
    })),
}));
