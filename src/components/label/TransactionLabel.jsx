import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
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

export function Pending() {
  return (
    <Chip
      label="Pending"
      variant="outlined"
      style={{
        color: "black.400",
        backgroundColor: "white",
        borderColor: "black.400",
      }}
      icon={<MoreHorizRoundedIcon style={{ color: "black.400" }} />}
    />
  );
}
