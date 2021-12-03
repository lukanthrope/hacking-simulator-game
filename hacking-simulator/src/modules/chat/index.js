import { DnDWrapper } from "../../components";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import { useDispatch, useSelector } from "react-redux";
import { appendChatMesssage, completeTask } from "../../store/actions";

export const ChatApp = (props) => {
  const messages = useSelector((state) => state.chat.items);
  const tasks = useSelector((state) => state.tasks.items);
  const activeItemId = useSelector((state) => state.tasks.activeItemId);
  const dispatch = useDispatch();

  const onSend = (v) => {
    const message = v
    dispatch(appendChatMesssage({ message, direction: "outgoing" }));

    if (message?.includes(tasks.find((it) => it.id === activeItemId).toSolve)) {
      dispatch(
        appendChatMesssage({
          message: tasks.find((it) => it.id === activeItemId + 1).description,
        })
      );
      dispatch(completeTask());
      return;
    }

    dispatch(
      appendChatMesssage({ message: "That's not what we're looking for" })
    );
  };

  return (
    <DnDWrapper
      {...props}
      style={{ width: 500, height: "auto" }}
      title="Telegamach"
    >
      <MainContainer style={{ height: 500 }}>
        <ChatContainer>
          <MessageList>
            {messages.map((item, index) => (
              <Message
                key={index}
                model={{
                  message: item.message,
                  direction: item.direction,
                }}
              />
            ))}
          </MessageList>
          <MessageInput
            placeholder="Type message here"
            onSend={(v) => onSend(v)}
          />
        </ChatContainer>
      </MainContainer>
    </DnDWrapper>
  );
};
