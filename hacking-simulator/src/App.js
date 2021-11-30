import "./App.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { TerminalApp } from "./modules/terminal";
import { ChatApp } from "./modules/chat";
import { BrowserApp } from "./modules/browser";
import { useDnDZIndex } from "./hooks/use-dnd-zindex.hook";
import { useEffect, useState } from "react";
import { ConfirmModal } from "./components";

function App() {
  const useIndex = useDnDZIndex();
  const [showStartModal, setShowStartModal] = useState(null);

  useEffect(() => {
    const inProgress = localStorage.getItem("in-progress");

    if (!inProgress) setShowStartModal(true);
  }, []);

  const handleCloseStartModal = () => {
    setShowStartModal(false);
    localStorage.setItem("in-progress", "true");
  };

  return (
    <>
      <TerminalApp {...useIndex} />
      <ChatApp {...useIndex} />
      <BrowserApp {...useIndex} />

      {showStartModal && (
        <ConfirmModal
          title="Hello, anon"
          content="Here you can find 3 draggable windows. They will help you to descroy the company that killed your father. Follow the instructions given by the guy from the chat"
          onClose={handleCloseStartModal}
        />
      )}
    </>
  );
}

export default App;
