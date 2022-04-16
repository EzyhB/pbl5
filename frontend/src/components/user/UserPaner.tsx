import { Typography } from "@mui/material";
import User from "./User";

interface IUserPanerProps {
  user: User;
}

export default function UserPaner({ user }: IUserPanerProps) {
  return (
    <Typography variant="h6" color="inherit" noWrap>
      UserPaner
    </Typography>
  );
}
