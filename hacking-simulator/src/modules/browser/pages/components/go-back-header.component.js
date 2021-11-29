export const GoBackHeader = ({ onGoBack }) => {
  return (
    <header style={{ height: 40, width: '100%' }}>
      <button onClick={() => onGoBack()}>&#8592;</button>
    </header>
  );
};
