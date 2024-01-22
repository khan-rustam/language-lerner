/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Container, Stack, Typography } from "@mui/material";
import { ChevronLeft, Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchAudio, translateWords } from "../utils/features";
import { useDispatch, useSelector } from "react-redux";
import {
  clearState,
  getWordsFail,
  getWordsRequest,
  getWordsSuccess,
} from "../redux/slices";
import Loader from "./Loader";

const Learning = () => {
  const [count, setCount] = useState<number>(0);
  const params = useSearchParams()[0].get("language") as LangType;

  const [audioSrc, setAudioSrc] = useState<string>("");
  const audioRef = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { words, loading, error } = useSelector(
    (state: { root: StateType }) => state.root
  );

  const audioHandler = async () => {
    const player: HTMLAudioElement = audioRef.current!;

    if (player) {
      player.play();
    } else {
      const data: string = await fetchAudio(words[count]?.word, params);
      setAudioSrc(data);
    }
  };

  const nextHandler = () => {
    setCount((prev) => prev + 1);
    setAudioSrc("")
  };

  useEffect(() => {
    dispatch(getWordsRequest());

    translateWords(params || "hi")
      .then((arr) => dispatch(getWordsSuccess(arr)))
      .catch((err) => dispatch(getWordsFail(err)));

    if (error) {
      alert(error);
      dispatch(clearState());
    }
  }, []);

  if (loading) return <Loader />;
  return (
    <Container
      maxWidth={"sm"}
      sx={{
        padding: "1rem",
      }}
    >
      {audioSrc && <audio src={audioSrc} autoPlay ref={audioRef}></audio>}
      <Button
        sx={{ color: "black" }}
        onClick={
          count === 0 ? () => navigate("/") : () => setCount((prev) => prev - 1)
        }
      >
        <ChevronLeft size={32} />
      </Button>
      <Typography m={"2rem 0"}>Learning is fun and interactive.</Typography>

      <Stack mt={"5rem"} direction={"row"} spacing={"1rem"}>
        <Typography variant="h4">
          {count + 1} - {words[count]?.word}
        </Typography>
        <Typography color={"blue"} variant="h4">
          {" "}
          : {words[count]?.meaning}
        </Typography>
        <Button sx={{ borderRadius: "50%" }}>
          <Volume2 size={32} onClick={audioHandler} />
        </Button>
      </Stack>
      <Button
        sx={{ margin: "5rem 0" }}
        variant="contained"
        fullWidth
        onClick={
          count == words.length - 1 ? () => navigate("/quiz") : nextHandler
        }
      >
        {count == words.length - 1 ? "Start Quiz" : "Next"}
      </Button>
    </Container>
  );
};

export default Learning;
