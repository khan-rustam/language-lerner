// import { Button, Container, Stack, Typography } from "@mui/material";
// import { Link } from "react-router-dom";

// const NotFound = () => {
//   return (
//     <Container>
//       <Stack direction={"column"} justifyContent={"center"}>
//         <Typography variant="h1">404</Typography>
//         <Typography variant="h3">You have found a secret place.</Typography>
//         <Typography>
//           Unfortunately, You may have mistyped the address.
//         </Typography>
//         <Typography>
//           <Link to={"/"}>
//             <Button variant="outlined">Take me back to home page</Button>
//           </Link>
//         </Typography>
//       </Stack>
//     </Container>
//   );
// };

// export default NotFound;

// NotFound.tsx

import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h1" sx={{ marginBottom: "2rem" }}>
        404 - Not Found
      </Typography>
      <Typography variant="body1" mb={"2rem"}>
        The page you are looking for might be in another castle.
      </Typography>
      <Link to="/">
        <Button variant="contained" color="primary">
          Go Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
