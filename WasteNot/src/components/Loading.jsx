import { Stack } from "@mui/material";
import Meat2 from "./Meat2";
import Hamburger from "./Hamburger";

const Loading = () => {
  return (
    // <Stack
    //   sx={{
    //     backgroundImage: `url(${backgroundImageUrl})`,
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    //     backgroundPosition: "center",
    //     height: "100%",
    //     width: "100%",
    //   }}
    // ></Stack>
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ height: "calc(100% - 200px)", width: "100%", postion: "relative" }}
    >
      <Meat2 />
      <Hamburger />
      <img
        src="src/assets/wastenot.png"
        style={{ height: "50%", zIndex: "999999", position: "absolute" }}
      />
    </Stack>
  );
};

export default Loading;
