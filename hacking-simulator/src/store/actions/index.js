export const SET_ACTIVE_PEOPLE_ITEM_ID = "SET_ACTIVE_PEOPLE_ITEM_ID";

export const APPEND_CHAT_MESSAGE = "APPEND_CHAT_MESSAGE";

export const appendChatMesssage = (payload) => (dispatch, getState) => {
  const messages = [...getState().chat.items];

  messages.push(payload);
  localStorage.setItem("chat-items", JSON.stringify(messages));

  dispatch({ type: APPEND_CHAT_MESSAGE, payload });
};
