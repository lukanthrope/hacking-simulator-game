import Terminal from 'react-console-emulator'
import { DnDWrapper } from '../../components';

const commands = {
  echo: {
    description: 'Echo a passed string.',
    usage: 'echo <string>',
    fn: function () {
      return `${Array.from(arguments).join(' ')}`
    }
  }
}


export const TerminalApp = (props) => {
  return (
    <DnDWrapper {...props} style={{ width: 500, height: 500 }} title="terminal@user">
      <div>
      <Terminal
        commands={commands}
        welcomeMessage={'Terminal@user'}
        promptLabel={'me@React:~$'}
        style={{height: 'auto', width: 'auto'} }
      />
      </div>
    </DnDWrapper>
  );
}
