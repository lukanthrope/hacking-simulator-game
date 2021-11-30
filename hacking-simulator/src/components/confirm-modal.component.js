import { useEffect, useRef, useState } from "react";

export const ConfirmModal = ({ title, content, onClose, children }) => {
  const [under, setUnder] = useState('_')
  const ref = useRef(null)

  useEffect(() => {
    ref.current = setInterval(() => {
      setUnder(prev => prev ? '' : '_')
    }, 500)

    return () => {
      clearInterval(ref.current)
    }
  }, [])

  return (
    <div style={styles.container}>
      <h1>{title}</h1>
      <p style={styles.p}>{content}<strong style={{ fontWeight: 800, fontSize: '2rem', lineHeight: 0.3 }}>{under}</strong></p>
      <button style={styles.button} onClick={() => onClose()}>
        Ok
      </button>
      {children}
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    zIndex: 5,
    width: "70%",
    height: "60%",
    background: "black",
    color: "#00FF00",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  button: {
    width: 100,
    height: 60,
    color: "black",
    background: "#00FF00",
    marginTop: 30,
  },
  p: {
    width: "40%",
  },
};
