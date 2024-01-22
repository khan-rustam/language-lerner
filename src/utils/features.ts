/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { generate } from "random-words";
import _ from "lodash";

const generateMCQ = (meaning: { Text: string }[], idx: number): string[] => {
  const correctAnswer: string = meaning[idx].Text;

  const allMeaningExceptCorrect = meaning.filter(
    (i) => i.Text !== correctAnswer
  );

  const wrongAnswer: string[] = _.sampleSize(allMeaningExceptCorrect, 3).map(
    (i) => i.Text
  );

  const mcqOptions = _.shuffle([...wrongAnswer, correctAnswer]);

  return mcqOptions;
};

export const translateWords = async (language: LangType) => {
  try {
    const words = generate(10).map((i) => ({
      Text: i,
    }));

    const apiKey = import.meta.env.VITE_MICROSOFT_API;


    const responce = await axios.post(
      "https://microsoft-translator-text.p.rapidapi.com/translate",
      words,
      {
        params: {
          "to[0]": language,
          "api-version": "3.0",
          profanityAction: "NoAction",
          textType: "plain",
        },
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
        },
      }
    );

    const recieve: FetchDataType[] = responce.data;

    const arr: WordType[] = recieve.map((i, idx) => {
      const options: string[] = generateMCQ(words, idx);

      return {
        word: i.translations[0].text,
        meaning: words[idx].Text,
        options: options,
      };
    });

    return arr;
  } catch (error) {
    console.log(error);
  }
};

export const countMatchingElements = (
  arr1: string[],
  arr2: string[]
): number => {
  if (arr1.length !== arr2.length) throw new Error("Arrays are not equal");

  let matchingCount = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) matchingCount++;
  }

  return matchingCount;
};

export const fetchAudio = async (
  text: string,
  language: LangType
): Promise<string> => {
  const key = import.meta.env.VITE_TEXT_TO_SPEECH_API;
  const rapidKey = import.meta.env.VITE_RAPID_API;

  const encodedParams = new URLSearchParams({
    src: text,
    r: "0",
    c: "mp3",
    f: "8khz_8bit_mono",
    b64: "true",
  });

  if (language === "ja") encodedParams.set("hl", "ja-jp");
  else if (language === "es") encodedParams.set("hl", "es-es");
  else if (language === "fr") encodedParams.set("hl", "fr-fr");
  else encodedParams.set("hl", "hi-in");

  const { data }: { data: string } = await axios.post(
    "https://voicerss-text-to-speech.p.rapidapi.com/",
    encodedParams,
    {
      params: { key },
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": rapidKey,
        "X-RapidAPI-Host": "voicerss-text-to-speech.p.rapidapi.com",
      },
    }
  );

  return data;
};
