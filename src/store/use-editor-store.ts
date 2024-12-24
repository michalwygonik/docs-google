import { create } from "zustand";
import { type Editor } from "@tiptap/react";

interface EditorState {
  editor: Editor | null;
  setEditor: (editor: Editor | null) => void;
}
export const UseEditorStore = create<EditorState>((set) => ({
  editor: null,
  setEditor: (editor) => set({ editor }),
}));
