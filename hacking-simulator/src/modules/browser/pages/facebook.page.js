import { useSelector } from "react-redux";
import { GoBackHeader } from "./components";

export const Facebook = ({ setIndex }) => {
  const activeId = useSelector((state) => state.people.activeItemId);
  const activeRecord = useSelector((state) =>
    state.people.items.find((it) => it.id === activeId)
  );

  const renderResult = () => {
    return activeRecord.facebook.posts.map((it) => (
      <div key={it.id} style={styles.post}>
        <img
          src={activeRecord.avatarUrl}
          alt=""
          style={{ ...styles.avatar, width: 30, height: 30 }}
        />
        <span style={{ marginLeft: 5 }}>{activeRecord.name}</span>
        <div>
          <img src={it.content} alt="" width="80%" height={300} />
        </div>
      </div>
    ));
  };

  if (!activeRecord) return <h2>Loading...</h2>;

  return (
    <div style={styles.container}>
      <GoBackHeader onGoBack={() => setIndex(0)} />
      <header style={styles.header}>
        <h2 style={styles.logo}>Facebook</h2>
      </header>

      <div style={styles.info}>
        <img src={activeRecord.avatarUrl} alt="" style={styles.avatar} />
        <h2 style={{ margin: 2, marginBottom: -20 }}>{activeRecord.name}</h2>
        <p>{activeRecord.facebook.description}</p>
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
  header: {
    width: "100%",
    height: 70,
    display: "flex",
    borderBottom: "1px solid lightblue",
    background: "#4267B2",
    color: "white",
  },
  logo: {
    marginLeft: 30,
  },
  info: {
    width: "85%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginTop: 20,
    borderBottom: "1px solid lightblue",
    marginBottom: 50,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  post: {
    marginTop: 20,
    borderBottom: "1px solid lightblue",
  },
};
