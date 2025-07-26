import { CSSProperties, FC } from "react";
import { colors, spacing } from "../theme";

type TextInputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value: string;
};

export const TextInput: FC<TextInputProps> = function TextInput({
  onChange,
  placeholder = "",
  value,
}) {
  const $style: CSSProperties = {
    borderRadius: spacing.sm,
    padding: spacing.sm,
    outline: "none",
    inset: "none",
    border: `1px solid ${colors.outline}`,
  };

  return (
    <input
      style={$style}
      onChange={onChange}
      value={value}
      type="text"
      placeholder={placeholder}
    />
  );
};
