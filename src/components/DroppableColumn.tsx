import type { CSSProperties, FC, PropsWithChildren } from "react";
import { Column } from "./Column";
import { colors, spacing } from "../theme";

const $columnStyle: CSSProperties = {
  flex: 1,
  border: "1px solid #777",
  borderRadius: spacing.lg,
  minHeight: "400px",
};

const $titleStyle: CSSProperties = {
  fontSize: "1.25rem",
  textAlign: "center",
  color: colors.textPrimary,
  marginBottom: spacing.md,
};

type DroppableColumnProps = {
  title: string;
};

export const DroppableColumn: FC<DroppableColumnProps> =
  function DroppableColumn({ title }) {
    return (
      <Column style={$columnStyle}>
        <h2 style={$titleStyle}>{title}</h2>
      </Column>
    );
  };
