import Button from "../Button";
import TrashIcon from "../../assets/icons/trash.svg?react";
import CheckIcon from "../../assets/icons/check.svg?react";
import LoaderIcon from "../../assets/icons/loader.svg?react";
import { getFormatedDate } from "../../utils/common";
import styles from "./Editor.module.css";
import cn from "classnames";
import { useEffect, useState, type ChangeEvent, type Ref } from "react";
import MicButton from "../MicButton";

type Props = {
  initialValue: string;
  onChange: (value: string) => void;
  onRemove: () => void;
  textareaRef: Ref<HTMLTextAreaElement>;
  isStatusSaving: boolean;
  date: Date;
};

export const Editor = ({
  initialValue,
  onChange,
  onRemove,
  textareaRef,
  isStatusSaving,
  date,
}: Props) => {
  const [value, setVelue] = useState("");
  const [tempValue, setTempValue] = useState("");
  const [isMicOn, setIsMicOn] = useState(false);

  useEffect(() => {
    setVelue(initialValue);
  }, [initialValue]);

  const onFinish = () => {
    if (tempValue) {
      setVelue(tempValue);
      onChange(tempValue);
      setTempValue("");
    }
  };

  const onTranscript = (text: string) => {
    const space = value.length > 0 ? " " : "";

    setTempValue(`${value}${space}${text}`);
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.currentTarget.value;

    setVelue(newValue);
    onChange(newValue);
  };

  return (
    <div className={styles.editor}>
      <div className={styles.header}>
        {isStatusSaving ? (
          <span className={cn(styles.status, styles.saving)}>
            <LoaderIcon
              width={14}
              height={14}
              className={cn(styles.icon, styles.loader)}
            />

            <span>Saveing...</span>
          </span>
        ) : (
          <span className={styles.status}>
            <CheckIcon
              width={14}
              height={14}
              className={cn(styles.icon, styles.check)}
            />

            <span>Saved</span>
          </span>
        )}

        <div>{getFormatedDate(date)}</div>

        <Button
          variant="ghost"
          size="xs"
          startIcon={<TrashIcon width={14} height={14} />}
          className={styles.deleteButton}
          onClick={onRemove}
        />
      </div>

      <textarea
        name="memosValue"
        value={tempValue || value}
        className={cn(styles.textarea, isMicOn && styles.voice)}
        disabled={isMicOn}
        onChange={handleChange}
        ref={textareaRef}
      />

      <MicButton
        onToggleMic={setIsMicOn}
        onTranscript={onTranscript}
        onFinish={onFinish}
      />
    </div>
  );
};
