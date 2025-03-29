import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WordInputGame from "./components/word-input-game/word-input-game";

export default function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <WordInputGame/>
    </QueryClientProvider>
  );
}