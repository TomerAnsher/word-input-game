import { MAX_INPUT_LENGTH } from "../../constant/input-length";
import { Status } from "../../types/types";
import styles from "./WordInput.module.css";

type WordInputProps = {
  letters: string[];
  status: Status;
}

export default function WordInput({ letters, status }: WordInputProps) {
  const boxes = Array.from({ length: MAX_INPUT_LENGTH }, (_, i) => letters[i] || "");

  console.log(boxes);
  
  return (
    <div className={styles.wrapper}>
      {boxes.map((char, idx) => (
        <div key={idx} className={`${styles.box} ${styles[status]}`}>
          {char}
        </div>
      ))}
    </div>
  );
}
