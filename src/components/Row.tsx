import type { CSSProperties, FC, PropsWithChildren } from "react";

type RowProps = {
  style?: CSSProperties;
};

export const Row: FC<PropsWithChildren<RowProps>> = function Row({
  style,
  children,
}) {
  const $style: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    ...style,
  };

  return <div style={$style}>{children}</div>;
};
