import  { useEffect } from "react";
import styles from "./wordInputGame.module.css";
import useWordInput from "../../hooks/use-word-input";
import { actionListener } from "../../utils/action-lisitner";
import WordInput from "../word-input/word-input";
import Keyboard from "../keyboard/keyboard";

export default function WordInputGame() {
  const {
    letters,
    status,
    addLetter,
    removeLetter,
    submitWord,
  } = useWordInput();

  useEffect(() => {
    actionListener.registerListener("TYPE", addLetter);
    actionListener.registerListener("BACKSPACE", removeLetter);
    actionListener.registerListener("ENTER", submitWord);

    return () => {
      actionListener.removeListener("TYPE");
      actionListener.removeListener("BACKSPACE");
      actionListener.removeListener("ENTER");
    };
  }, [addLetter, removeLetter, submitWord]);


  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Word Input Game</h1>
        <p className={styles.subtitle}>Guess a valid 6-letter English word</p>
        <WordInput letters={letters} status={status} />
        <Keyboard />
      </div>
    </div>
  );
}