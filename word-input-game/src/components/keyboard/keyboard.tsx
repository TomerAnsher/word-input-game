import styles from "./Keyboard.module.css";
import { actionListener } from "../../utils/action-lisitner";
import KeyboardRow from "./keyboard-row";
import { FIRST_KEYBOARD_ROW, SECOND_KEYBOARD_ROW, THIRD_KEYBOARD_ROW } from "../../constant/keyboard-row";


export default function Keyboard() {
  const handleClick = (char: string) => {
    actionListener.emit("TYPE", char);
  };

  const handleBackspace = () => {
    actionListener.emit("BACKSPACE", undefined);
  };

  const handleEnter = () => {
    actionListener.emit("ENTER", undefined);
  };

  return (
    <div className={styles.wrapper}>
      <KeyboardRow
        chars={FIRST_KEYBOARD_ROW.split("")}
        onKeyClick={handleClick}
      />
      <KeyboardRow
        chars={SECOND_KEYBOARD_ROW.split("")}
        onKeyClick={handleClick}
      />
      <KeyboardRow
        chars={THIRD_KEYBOARD_ROW.split("")}
        onKeyClick={handleClick}
        prefix={
          <button className={`${styles.key} ${styles.wide}`} onClick={handleEnter}>
            ENTER
          </button>
        }
        suffix={
          <button className={`${styles.key} ${styles.wide}`} onClick={handleBackspace}>
            ⌫
          </button>
        }
      />
    </div>
  );
}
