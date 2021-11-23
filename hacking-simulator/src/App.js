import './App.css';
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { TerminalApp } from './modules/terminal';
import { ChatApp } from './modules/chat';
import { BrowserApp } from './modules/browser';
import { useDnDZIndex } from './hooks/use-dnd-zindex.hook';

function App() {
  const useIndex = useDnDZIndex()
  return (
    <>
      <TerminalApp { ...useIndex } />
      <ChatApp { ...useIndex } />
      <BrowserApp { ...useIndex } />
    </>
  );
}

export default App;

// TODO: news site
// TODO: stock site
