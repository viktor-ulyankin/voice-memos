import Button from "../Button";
import TrashIcon from "../../assets/icons/trash.svg?react";
import CheckIcon from "../../assets/icons/check.svg?react";
import LoaderIcon from "../../assets/icons/loader.svg?react";
import {
  getFormattedDate,
  lowercaseFirstChar,
  splitTextBySelection,
} from "../../utils/common";
import styles from "./Editor.module.css";
import cn from "classnames";
import { memo, useEffect, useState, type ChangeEvent, type Ref } from "react";
import MicButton from "../MicButton";
import { useCursorSelection } from "../../hooks/useCursorSelection";
import { mergeRefs } from "../../utils/react";

const CURSOR = "<i>|</i>";

type Props = {
  initialValue: string;
  onChange: (value: string) => void;
  onRemove: () => void;
  textareaRef: Ref<HTMLTextAreaElement>;
  isStatusSaving: boolean;
  date: Date;
};

export const Editor = memo(
  ({
    initialValue,
    onChange,
    onRemove,
    textareaRef,
    isStatusSaving,
    date,
  }: Props) => {
    const [value, setVelue] = useState(initialValue);
    const [tempValue, setTempValue] = useState("");
    const [tempValueHTML, setTempValueHTML] = useState("");
    const [isMicOn, setIsMicOn] = useState(false);
    const { ref: cursorSelectionTextareaRef, selection } = useCursorSelection();

    useEffect(() => {
      setVelue(initialValue);
    }, [initialValue]);

    useEffect(() => {
      if (isMicOn) {
        const [leftText, selectedText, rightText] = splitTextBySelection(
          value,
          selection[0],
          selection[1]
        );

        setTempValueHTML(
          `${leftText}<b>${selectedText}</b>${CURSOR}${rightText}`
        );
      }
    }, [isMicOn, value, selection]);

    const onTranscript = (transcriptedText: string) => {
      if (transcriptedText.length) {
        const [leftText, , rightText] = splitTextBySelection(
          value,
          selection[0],
          selection[1]
        );

        const firstSpace =
          leftText.length > 0 && !leftText.endsWith(" ") ? " " : "";

        const secondSpace =
          rightText.length > 0 && !rightText.startsWith(" ") ? " " : "";

        const trimedLeftText = leftText.trim();

        const isCapitalLetterNeeded =
          trimedLeftText.endsWith(".") ||
          trimedLeftText.endsWith("!") ||
          trimedLeftText.endsWith("?");

        const formatedTranscriptedText = isCapitalLetterNeeded
          ? transcriptedText
          : lowercaseFirstChar(transcriptedText);

        setTempValue(
          `${leftText}${firstSpace}${formatedTranscriptedText}${secondSpace}${rightText}`
        );

        setTempValueHTML(
          `${leftText}${firstSpace}<span>${formatedTranscriptedText}</span>${CURSOR}${secondSpace}${rightText}`
        );
      }
    };

    const onFinish = () => {
      if (tempValue) {
        setVelue(tempValue);
        onChange(tempValue);
        setTempValue("");
        setTempValueHTML("");
      }

      // Reset cursor position
      setTimeout(() => {
        const len = cursorSelectionTextareaRef.current?.value.length || 0;

        cursorSelectionTextareaRef.current?.setSelectionRange(len, len);
      }, 100);
    };

    const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
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

              <span>Saving...</span>
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

          <div>{getFormattedDate(date)}</div>

          <Button
            variant="ghost"
            size="xs"
            startIcon={<TrashIcon width={14} height={14} />}
            className={styles.deleteButton}
            onClick={onRemove}
            aria-label="Delete memo"
          />
        </div>

        <div className={styles.textareaWrapper}>
          <textarea
            name="textareaMemo"
            value={value}
            className={styles.textarea}
            disabled={isMicOn}
            onChange={handleTextareaChange}
            ref={mergeRefs(textareaRef, cursorSelectionTextareaRef)}
          />

          <div
            className={cn(
              styles.textarea,
              styles.pseudoTextarea,
              isMicOn && styles.active
            )}
            dangerouslySetInnerHTML={{ __html: tempValueHTML || value }}
          />
        </div>

        <MicButton
          onToggleMic={setIsMicOn}
          onTranscript={onTranscript}
          onFinish={onFinish}
        />
      </div>
    );
  }
);
