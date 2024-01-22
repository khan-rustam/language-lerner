import { Button, Container, Stack, Typography } from "@mui/material";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const languages = [
  {
    name: "Japanese",
    code: "ja",
  },
  {
    name: "Hindi",
    code: "hi",
  },
  {
    name: "Spanish",
    code: "es",
  },
  {
    name: "French",
    code: "fr",
  },
];

const Home = () => {
  const languageSelectHandler = (language: string): void => {
    navigate(`/learn?language=${language}`);
  };

  const navigate = useNavigate();

  return (
    <Container maxWidth={"sm"}>
      <Typography variant="h3" p={"2rem 0"} textAlign={"center"}>
        Welcome to LinguaQuest!
      </Typography>
      <Typography variant="h6">
        Start your language-learning journey with LinguaQuest.
      </Typography>

      <Stack
        direction={"column"}
        mt={"2rem"}
        p={"2rem"}
        alignItems={"center"}
        justifyItems={"center"}
      >
        <Typography variant="h5">
          Choose your language which you want to learn.
        </Typography>
        <ChevronDown size={32} />
      </Stack>

      <Stack
        direction={"row"}
        spacing={"2rem"}
        p={"2rem"}
        alignItems={"center"}
        justifyItems={"center"}
      >
        <div style={{display:"flex", gap:"1rem", flexWrap:"wrap"}}>
          {languages.map((i) => (
            <Button
              variant="contained"
              key={i.code}
              fullWidth
              onClick={() => languageSelectHandler(i.code)}
            >
              {i.name}
            </Button>
          ))}
        </div>
      </Stack>
    </Container>
  );
};

export default Home;
