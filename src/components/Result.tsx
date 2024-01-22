import {
  Button,
  Container,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { clearState } from "../redux/slices";
import { useNavigate } from "react-router-dom";
import { countMatchingElements } from "../utils/features";

/* eslint-disable @typescript-eslint/no-unused-vars */

const Result = () => {
  const { words, result } = useSelector(
    (state: { root: StateType }) => state.root
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const correctAns = countMatchingElements(
    result,
    words.map((i) => i.meaning)
  );

  const percentage = (correctAns / words.length) * 100;

  const resetHandler = (): void => {
    dispatch(clearState());
    navigate("/");
  };

  return (
    <Container maxWidth={"sm"}>
      <Typography variant="h3" color={"primary"} m={"2rem 0"}>
        Result
      </Typography>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography variant="h6" m={"1rem"}>
          You got {correctAns} right out of {words?.length}.
        </Typography>
        <Typography
          m={"1rem"}
          variant="h5"
          color={percentage > 50 ? "green" : "red"}
        >
          {percentage > 50 ? "Pass" : "Fail"}
        </Typography>
      </Stack>

      <Stack direction={"row"} justifyContent={"space-evenly"}>
        <Stack>
          <Typography m={"1rem 0"} variant="h5">
            Your Ans
          </Typography>
          <List>
            {result.map((i, idx) => (
              <ListItem key={idx}>
                <Typography>
                  {idx + 1} - {i}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Stack>
        <Stack>
          <Typography m={"1rem 0"} variant="h5">
            Correct Ans
          </Typography>
          <List>
            {words.map((i, idx) => (
              <ListItem key={idx}>
                <Typography>
                  {idx + 1} - {i.meaning}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Stack>
      </Stack>
      <Button
        sx={{ margin: "1rem 0" }}
        variant="contained"
        fullWidth
        onClick={resetHandler}
      >
        Reset
      </Button>
    </Container>
  );
};

export default Result;
