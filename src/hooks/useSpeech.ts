import { useEffect, useRef, useState } from "react";
import { formatPunctuation } from "../utils/speech";
import { SPEECH_RECOGNITION_LANG } from "../constants";

type UseSpeechResult = {
  text: string;
  isListening: boolean;
  isSupported: boolean;
  error: string | null;
  start: () => void;
  stop: () => void;
};

export function useSpeech(
  lang: string = SPEECH_RECOGNITION_LANG
): UseSpeechResult {
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const finalTranscriptRef = useRef("");
  const isManuallyStopped = useRef(false);

  useEffect(() => {
    const SpeechRecognitionClass =
      window.SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognitionClass) {
      setIsSupported(false);
      return;
    }

    const recognition = new SpeechRecognitionClass();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = lang;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let interim = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];

        if (result.isFinal) {
          finalTranscriptRef.current += result[0].transcript;
        } else {
          interim += result[0].transcript;
        }
      }

      setText(formatPunctuation(finalTranscriptRef.current + interim));
    };

    recognition.onstart = () => {
      setIsListening(true);
      setError(null);
    };

    recognition.onend = () => {
      if (isManuallyStopped.current) {
        setIsListening(false); // explicitly reset isListening when manually stopped
      } else {
        // Fix 60-seconds limit
        setTimeout(() => {
          try {
            recognition.start();
          } catch {
            // Ignore the error if it is already running
          }
        }, 100); // 500ms is possible for maximum stability
      }
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      const error = event.error;

      if (error !== "no-speech") {
        setError(error);
      }

      if (
        error === "not-allowed" ||
        error === "permission-denied" ||
        error === "service-not-allowed"
      ) {
        isManuallyStopped.current = true;
        recognition.stop();
        setIsListening(false);
      }
    };

    recognitionRef.current = recognition;
    setIsSupported(true);
  }, [lang]);

  const start = () => {
    isManuallyStopped.current = false;
    setError(null);
    finalTranscriptRef.current = "";
    setText("");

    try {
      recognitionRef.current?.start();
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const stop = () => {
    isManuallyStopped.current = true;
    recognitionRef.current?.stop();
  };

  return { text, isListening, isSupported, error, start, stop };
}
