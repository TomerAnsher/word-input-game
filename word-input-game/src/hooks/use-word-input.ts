import { useState, useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { fetchWordInfo } from "../api/dictionary";
import { Status } from "../types/types";
import { MAX_INPUT_LENGTH } from "../constant/input-length";

export default function useWordInput() {
  const [letters, setLetters] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("default");

  const queryClient = useQueryClient();

  const addLetter = useCallback((char: string) => {
    setStatus("default");
    setLetters((prev) => {
      if (prev.length >= MAX_INPUT_LENGTH) return prev;
      return [...prev, char];
    });
  }, []);

  const removeLetter = useCallback(() => {
    setStatus("default");
    setLetters((prev) => prev.slice(0, -1));
  }, []);

  const submitWord = useCallback(async () => {
    if (letters.length < MAX_INPUT_LENGTH) return;

    const word = letters.join("").toLowerCase();

    try {
      await queryClient.ensureQueryData ({
        queryKey: ["validateWord", word],
        queryFn: () => fetchWordInfo(word),
      });
      setStatus("success");
    } catch {        
      setStatus("error");
    }
  }, [letters, queryClient]);

  return {
    letters,
    status,
    addLetter,
    removeLetter,
    submitWord,
  };
}
