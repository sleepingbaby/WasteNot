import { Stack } from "@mui/material";

const backgroundImageUrl =
  "https://cdn.dribbble.com/users/393062/screenshots/14492170/media/67f661f7f825b62980571026e1280675.gif";

const Loading = () => {
  return (
    <Stack
      sx={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
      }}
    ></Stack>
  );
};

export default Loading;
