export const SearchResultItem = ({ url, clickableUrl }) => {
  return (
    <div style={{ marginTop: 20 }}>
      <p style={{ marginBottom: -5 }}>{url}</p>
      <a href="#">{clickableUrl}</a>
    </div>
  );
};
