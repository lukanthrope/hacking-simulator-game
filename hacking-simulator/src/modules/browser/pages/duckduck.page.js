import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../../static/duckduckgo.png";
import { SET_ACTIVE_PEOPLE_ITEM_ID } from "../../../store/actions";
import { SearchResultItem } from "./components/search-result-item.component";

const twitterUrl = "https://twitter.com";
const facebookUrl = "https://facebook.com";

export const DuckDuck = ({ setIndex, search, setSearch }) => {
  const people = useSelector((state) => state.people.items);
  const [result, setResult] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (search)
      setResult(
        people.find((it) => it.name.toLowerCase() === search.toLowerCase())
      );
  }, []);

  const handleSearch = () => {
    if (!search) return;

    setResult(
      people.find((it) => it.name.toLowerCase() === search.toLowerCase())
    );
  };

  const redirect = (pageId) => {
    dispatch({ type: SET_ACTIVE_PEOPLE_ITEM_ID, payload: { id: result.id } });
    setIndex(pageId);
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
            onClick={() => redirect(1)}
          />
        )}
        {result.facebook && (
          <SearchResultItem
            url={facebookUrl}
            clickableUrl={`${result.name} - Facebook`}
            onClick={() => redirect(2)}
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

      <div>{renderResult()}</div>
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
