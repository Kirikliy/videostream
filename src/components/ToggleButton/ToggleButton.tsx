import { memo } from "react";
import { Props } from "./types";
import * as styles from "./ToggleButton.module.scss";
import cn from "classnames";

export const ToggleButton = ({ active, className, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className={cn(className, styles.button)}
      data-testid="toggle-button"
    >
      {active ? "⇽" : "⇾"}
    </div>
  );
};

export default memo(ToggleButton);
