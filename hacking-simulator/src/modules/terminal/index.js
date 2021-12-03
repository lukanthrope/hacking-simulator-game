import { useEffect, useRef, useState } from "react";
import Terminal from "react-console-emulator";
import { DnDWrapper } from "../../components";
import { bankService, contacts, passwordService, randomString, securityService } from "./data";

const pythonScripts = {
  "get_contacts.py": {
    arguments: 2,
    data: contacts,
  },
  "passx3_leek.py": {
    arguments: 2,
    data: passwordService,
  },
  "moneystealer.py": {
    arguments: 2,
    data: bankService,
  },
  "ddos_attack.py": {
    arguments: 2,
    data: securityService,
  }
};

const createCommands = (terminal, finalCallback) => ({
  echo: {
    description: "Echo a passed string.",
    usage: "echo <string>",
    fn: function () {
      return `${Array.from(arguments).join(" ")}`;
    },
  },
  python: {
    description:
      `python - executes a script (python get_contacts.py arg1 arg2)\nScripts: ${Object.keys(pythonScripts).join(', ')}`,
    fn: function () {
      const args = Array.from(arguments);
      const script = pythonScripts[args[0]];
      if (!script) return `ERROR: ${args[0]} not found`;

      if (!args[script.arguments])
        return `ERROR: must be ${script.arguments} arguments`;

      let i = 0;
      const interval = setInterval(() => {
        if (i === 3) {
          const res = script.data[args[1]];
          if (res?.password !== args[2])
            terminal.current.pushToStdout("ACCESS DENIED");
          else terminal.current.pushToStdout(res.content);
          clearInterval(interval);

          if (args[0] === 'ddos_attack.py') finalCallback()

          return
        }
        i++;
        terminal.current.pushToStdout(randomString);
      }, 200);
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
    if (terminal) setCommands(createCommands(terminal, props.finalCallback));
  }, [terminal, props.finalCallback]);

  return (
    <DnDWrapper
      {...props}
      style={{ width: 500, height: "auto" }}
      title="terminal@user"
    >
      <div>
        <Terminal
          ref={terminal}
          commands={commands || {}}
          welcomeMessage={"Terminal@user\nType 'help' to see the commands"}
          promptLabel={"me@React:~$"}
          style={{ height: 500 }}
        />
      </div>
    </DnDWrapper>
  );
};
