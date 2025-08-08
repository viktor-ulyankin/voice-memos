import styles from "./MicButton.module.css";
import { useEffect } from "react";
import Button from "../Button";
import MicIcon from "../../assets/icons/mic.svg?react";
import MicOffIcon from "../../assets/icons/mic-off.svg?react";
import cn from "classnames";
import Timer from "../Timer";
import { useSpeech } from "../../hooks/useSpeech";
import { showError } from "../../utils/common";

type Props = {
  onToggleMic: (isOn: boolean) => void;
  onTranscript: (text: string) => void;
  onFinish?: () => void;
};

export const MicButton = ({ onToggleMic, onTranscript, onFinish }: Props) => {
  const { text, isListening, isSupported, error, start, stop } = useSpeech();

  useEffect(() => {
    if (text.length) {
      onTranscript(text);
    }
  }, [text]);

  useEffect(() => {
    if (error) {
      showError(`Speech recognition - ${error}`);
    }
  }, [error]);

  useEffect(() => {
    onToggleMic(isListening);
  }, [isListening]);

  const handleMicButtonClick = () => {
    if (isListening) {
      stop();
      onFinish?.();
    } else {
      start();
    }
  };

  if (!isSupported) {
    return (
      <div role="status" className={styles.fallback}>
        <MicOffIcon width={16} height={16} />
        Speech recognition is not supported in this browser.
      </div>
    );
  }

  return (
    <Button
      className={cn(styles.micButton, isListening && styles.active)}
      size="lg"
      fullWidth
      onClick={handleMicButtonClick}
      startIcon={<MicIcon width={40} height={40} />}
      variant="ghost"
    >
      {isListening ? "Stop" : "Start"}

      {isListening && (
        <span className={styles.timer}>
          <Timer />
        </span>
      )}
    </Button>
  );
};
