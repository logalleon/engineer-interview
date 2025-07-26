import type { CSSProperties, FC, PropsWithChildren } from "react";

type ColumnProps = {
  style?: CSSProperties;
};

export const Column: FC<PropsWithChildren<ColumnProps>> = function Column({
  style,
  children,
}) {
  const $style: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    ...style,
  };

  return <div style={$style}>{children}</div>;
};
