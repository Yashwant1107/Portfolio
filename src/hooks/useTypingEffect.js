import { useEffect, useState } from "react";

export function useTypingEffect(words, typingSpeed = 90, pause = 1500) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentWord.slice(0, displayText.length + 1);
        setDisplayText(nextText);

        if (nextText === currentWord) {
          setIsDeleting(true);
        }
      } else {
        const nextText = currentWord.slice(0, displayText.length - 1);
        setDisplayText(nextText);

        if (!nextText) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, displayText === currentWord && !isDeleting ? pause : isDeleting ? typingSpeed / 1.8 : typingSpeed);

    return () => window.clearTimeout(timeout);
  }, [displayText, isDeleting, pause, typingSpeed, wordIndex, words]);

  return displayText;
}

