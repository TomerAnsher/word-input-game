const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en';

export const fetchWordInfo = async (word: string): Promise<boolean> =>  {
    const response = await fetch(`${BASE_URL}/${word}`);
    if (!response.ok) {
      throw new Error(`Word not found: ${word}`);
    }
    return response.json();
  }