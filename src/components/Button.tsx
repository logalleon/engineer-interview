import type { ReactNode, CSSProperties } from "react";
import { colors } from "../theme";

enum ButtonVariant {
  Contained,
  Text,
  Outlined,
}

export type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
  icon?: string;
  variant: ButtonVariant;
  style?: CSSProperties;
};

const getStyleFromVariant = (variant: ButtonVariant) => {
  switch (variant) {
    case ButtonVariant.Contained:
      return {
        backgroundColor: colors.primary,
        color: "white",
      };
    case ButtonVariant.Outlined:
      return {
        backgroundColor: "white",
        borderColor: colors.primary,
        color: colors.textPrimary,
      };
    case ButtonVariant.Text:
      return {
        backgroundColor: "white",
        borderColor: "white",
        color: colors.textPrimary,
      };
  }
};

export const Button = function Button({
  onClick,
  children,
  icon,
  variant,
  style = {},
}: ButtonProps) {
  const $style: CSSProperties = {
    ...style,
    ...getStyleFromVariant(variant),
  };

  return (
    <button style={$style} onClick={onClick}>
      {icon && <span className="material-icons">{icon}</span>}
      {children}
    </button>
  );
};
