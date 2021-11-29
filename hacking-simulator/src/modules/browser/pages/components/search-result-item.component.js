export const SearchResultItem = ({ url, clickableUrl, onClick }) => {
  return (
    <div style={{ marginTop: 20 }}>
      <p style={{ marginBottom: -5 }}>{url}</p>
      <a href="#" onClick={() => onClick()}>
        {clickableUrl}
      </a>
    </div>
  );
};
