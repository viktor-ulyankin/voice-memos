import Button from "../Button";
import PlusIcon from "../../assets/icons/plus.svg?react";
import type { ButtonProps } from "../Button/Button";

type Props = ButtonProps;

export const AddMemoButton = (props: Props) => (
  <Button startIcon={<PlusIcon width={20} height={20} />} {...props}>
    Add memo
  </Button>
);
