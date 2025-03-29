// components/keyboard/KeyboardRow.tsx
import styles from "./Keyboard.module.css";

interface KeyboardRowProps {
  chars: string[];
  onKeyClick: (char: string) => void;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export default function KeyboardRow({ chars, onKeyClick, prefix, suffix }: KeyboardRowProps) {
  return (
    <div className={styles.row}>
      {prefix}
      {chars.map((char) => (
        <button
          key={char}
          className={styles.key}
          onClick={() => onKeyClick(char)}
        >
          {char}
        </button>
      ))}
      {suffix}
    </div>
  );
}
