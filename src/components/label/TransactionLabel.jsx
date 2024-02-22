import { CloseRounded, DoneRounded } from "@mui/icons-material";
import { Chip } from "@mui/material";
import React from "react";

export function Success() {
  return (
    <Chip
      label="Success"
      variant="outlined"
      style={{
        color: "#008631",
        backgroundColor: "white",
        borderColor: "#008631",
      }}
      icon={<DoneRounded style={{ color: "#008631" }} />}
    />
  );
}

export function Fail() {
  return (
    <Chip
      label="Fail"
      variant="outlined"
      style={{
        color: "#cc3300",
        backgroundColor: "white",
        borderColor: "#cc3300",
      }}
      icon={<CloseRounded style={{ color: "#cc3300" }} />}
    />
  );
}
