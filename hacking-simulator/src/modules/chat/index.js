import { DnDWrapper } from "../../components";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import { useDispatch, useSelector } from "react-redux";
import { appendChatMesssage } from "../../store/actions";

export const ChatApp = (props) => {
  const messages = useSelector((state) => state.chat.items);
  const dispatch = useDispatch();

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
            onSend={(v) =>
              dispatch(
                appendChatMesssage({ message: v, direction: "outgoing" })
              )
            }
          />
        </ChatContainer>
      </MainContainer>
    </DnDWrapper>
  );
};
