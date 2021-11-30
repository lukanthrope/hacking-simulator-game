import { APPEND_CHAT_MESSAGE } from "../actions";

export const initialState = {
  items: JSON.parse(localStorage.getItem("chat-items")) || [
    {
      message:
        "Hey, big boy. I can help u destroy the corporation that killed your father. I know you know he learned they were selling drugs globally. Check out his buddy Bob Dylan. In his chats you may find the phone number of head of HR. Here's his phone number btw: +113452. Then we'll continue",
    },
  ],
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPEND_CHAT_MESSAGE:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    default:
      return state;
  }
};
