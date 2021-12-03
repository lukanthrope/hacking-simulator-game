/* eslint-disable no-restricted-globals */
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
  const [showEndModal, setShowEndModal] = useState(false);

  useEffect(() => {
    const inProgress = localStorage.getItem("in-progress");

    if (!inProgress) setShowStartModal(true);

    const isEnded = localStorage.getItem("is-ended");

    if (isEnded) setShowEndModal(true);
  }, []);

  const handleCloseStartModal = () => {
    setShowStartModal(false);
    localStorage.setItem("in-progress", "true");
  };

  const handleCloseEndModal = () => {
    localStorage.removeItem("is-ended");
    localStorage.removeItem("in-progress");
    localStorage.removeItem("active-task-id");
    localStorage.removeItem("chat-items");
    location.reload()
  };

  const handleShowEndModal = () => {
    localStorage.setItem("is-ended", 'true');
    setShowEndModal(true)
  };

  return (
    <>
      <TerminalApp finalCallback={handleShowEndModal} {...useIndex} />
      <ChatApp {...useIndex} />
      <BrowserApp {...useIndex} />

      {showStartModal && (
        <ConfirmModal
          title="Hello, anon"
          content="Here you can find 3 draggable windows. They will help you to descroy the company that killed your father. Follow the instructions given by the guy from the chat"
          onClose={handleCloseStartModal}
        />
      )}

      {showEndModal && (
        <ConfirmModal
          title="Success"
          content="The guys smashed their datacenter. Not stonks. You have destroyed the ECorp! Hope you enjoyed the game. You may restart the game"
          onClose={handleCloseEndModal}
        />
      )}
    </>
  );
}

export default App;
