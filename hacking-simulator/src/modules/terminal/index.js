import { useEffect, useRef, useState } from "react";
import Terminal from "react-console-emulator";
import { DnDWrapper } from "../../components";

const createCommands = (terminal) => ({
  echo: {
    description: "Echo a passed string.",
    usage: "echo <string>",
    fn: function () {
      return `${Array.from(arguments).join(" ")}`;
    },
  },
  wait: {
    description: "Waits one second and sends a message.",
    fn: () => {
      setTimeout(
        () => terminal.current.pushToStdout("Hello after 1 second!"),
        1500
      );
      return "Running, please wait...";
    },
  },
});

export const TerminalApp = (props) => {
  const terminal = useRef(null);
  const [commands, setCommands] = useState();

  useEffect(() => {
    console.log(terminal);
    if (terminal) setCommands(createCommands(terminal));
  }, [terminal]);

  return (
    <DnDWrapper
      {...props}
      style={{ width: 500, height: 'auto' }}
      title="terminal@user"
    >
      <div>
        <Terminal
          ref={terminal}
          commands={commands || {}}
          welcomeMessage={"Terminal@user"}
          promptLabel={"me@React:~$"}
          style={{ height: 500 }}
        />
      </div>
    </DnDWrapper>
  );
};
