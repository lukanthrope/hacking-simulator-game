import { DnDWrapper } from '../../components';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";

export const ChatApp = (props) => {
  return (
    <DnDWrapper { ...props } style={{ width: 500, height: 'auto' }} title="Telegamach">
      <MainContainer style={{ height: 500 }}>
        <ChatContainer>
          <MessageList>
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "just now",
                sender: "Joe",
              }}
            />
          </MessageList>
          <MessageInput placeholder="Type message here" />
        </ChatContainer>
      </MainContainer>
    </DnDWrapper>)
}
