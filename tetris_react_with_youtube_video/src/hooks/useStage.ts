import React from "react";
import { createStage } from "../gameHelpers";

// Types
import type { PLAYER } from "./usePlayer";
import type { STAGECELL, STAGE } from "../components/Stage/Stage";

export const useStage = (player: PLAYER, resetPlayer: () => void) => {
  const [stage, setStage] = React.useState(createStage());

  React.useEffect(() => {
    if (!player.pos) return;

    const updateStage = (prevStage: STAGE): STAGE => {
      // First flash the stage
      // if it says 'clear' but don't
      const newStage = prevStage.map(
        (row) =>
          row.map((cell) =>
            cell[1] === "clear" ? [0, "clear"] : cell
          ) as STAGECELL[]
      );

      player.tetromino.forEach((row, y) => {
        row.forEach((cell, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? "merged" : "clear"}`,
            ];
          }
        });
      });
    };
  }, []);
};
