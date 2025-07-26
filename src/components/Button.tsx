import type { ReactNode, CSSProperties } from "react";
import { colors, spacing } from "../theme";
import "./Button.css";

type ButtonVariant = "contained" | "outlined" | "text";

export type ButtonProps = {
  onClick: () => void;
  variant: ButtonVariant;
  style?: CSSProperties;
  disabled?: boolean;
} & (
  | {
      children: ReactNode;
      icon?: string;
    }
  | {
      children?: never;
      icon: string;
    }
);

const getStyleFromVariant = (variant: ButtonVariant, disabled: boolean) => {
  const baseStyle: CSSProperties = {
    borderRadius: spacing.sm,
    padding: spacing.sm,
    outline: "none",
    inset: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: `1px solid ${colors.outline}`,
  };
  switch (variant) {
    case "contained":
      return {
        backgroundColor: disabled ? `${colors.primary}33` : colors.primary,
        color: disabled ? colors.textPrimary : "white",
        ...baseStyle,
      };
    case "outlined":
      return {
        backgroundColor: "white",
        borderColor: colors.primary,
        color: colors.textPrimary,
        ...baseStyle,
      };
    case "text":
      return {
        backgroundColor: "white",
        borderColor: "white",
        color: colors.textPrimary,
        ...baseStyle,
      };
  }
};

export const Button = function Button({
  onClick,
  children = null,
  icon,
  variant,
  style = {},
  disabled = false,
}: ButtonProps) {
  const $style: CSSProperties = {
    ...style,
    ...getStyleFromVariant(variant, disabled),
  };

  const noop = () => {
    // Whee
  };

  return (
    <button
      className={`button button--${variant}`}
      style={$style}
      onClick={disabled ? noop : onClick}
    >
      {icon && <span className="material-icons">{icon}</span>}
      {children}
    </button>
  );
};
