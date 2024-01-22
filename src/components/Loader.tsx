import { CircularProgress } from "@mui/material";

const loaderContainer = () => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  };
};

const Loader = () => {
  return (
    <div style={loaderContainer()}>
      <CircularProgress color="primary" size={100} thickness={4} />
    </div>
  );
};

export default Loader;
