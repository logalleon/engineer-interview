export type HexCode = string;

export enum ColorKeys {
  primary = "primary",
  secondary = "secondary",
  textPrimary = "textPrimary",
  success = "success",
  warning = "warning",
  error = "error",
}

export const colors: Record<ColorKeys, HexCode> = {
  // Generated from https://coolors.co
  primary: "#3A86FF", // Azure...which I just learned you're supposed to pronounce AZH-ur
  secondary: "#32161F", // Dark Purple
  textPrimary: "#121619", // Night
  success: "#3C896D", // Viridian
  warning: "FFBE0B", // Amber
  error: "#AA5042", // Redwood - love the names it comes up with
};
