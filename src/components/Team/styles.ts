export const teamStyles = () => ({
  root: {
    margin: "0",
    padding: "0",
    backgroundColor: "#0B1432",
    boxSizing: "border-box",
    minHeight: "100vh",
    width: "100%",
    color: "white",
  },
  itemContainer: {
    marginTop: "0%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imgStyle: {
    width: "100%",
    height: "auto",
    aspectRatio: "1/1",
    objectFit: "cover",
    borderRadius: "5%",
  },
}) as const;


