import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),

  messages: [],  // Initialize as an empty array
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
