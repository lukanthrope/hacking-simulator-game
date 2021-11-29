import { useState } from "react";
import { useSelector } from "react-redux";
import logo from "../../../static/duckduckgo.png";
import { SearchResultItem } from "./components/search-result-item.component";

const twitterUrl = "https://twitter.com";
const facebookUrl = "https://facebook.com";

export const DuckDuck = () => {
  const [search, setSearch] = useState("");
  const people = useSelector((state) => state.people.items);
  const [result, setResult] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search) return;

    setResult(
      people.find((it) => it.name.toLowerCase() === search.toLowerCase())
    );
  };

  const renderResult = () => {
    if (result === undefined) return <h2>Nothing found</h2>;
    if (!result) return;

    return (
      <>
        {result.twitter && (
          <SearchResultItem
            url={twitterUrl}
            clickableUrl={`${result.name} - Twitter`}
          />
        )}
        {result.facebook && (
          <SearchResultItem
            url={facebookUrl}
            clickableUrl={`${result.name} - Facebook`}
          />
        )}
      </>
    );
  };

  return (
    <div style={styles.container}>
      <img src={logo} alt="duckduck" />
      <div>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div>
        {renderResult()}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {},
};
