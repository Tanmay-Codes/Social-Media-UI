import { Avatar, Card, IconButton, TextField, Tooltip } from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import MicIcon from "@mui/icons-material/Mic";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ArticleIcon from "@mui/icons-material/Article";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
import { Stack } from "@mui/system";

function UserPostBox() {
  return (
    <Card sx={{ padding: "18px", marginBottom: "10px", borderRadius: "10px" }}>
      <Stack alignItems="center" justifyContent="space-between">
        <Stack
          direction="row"
          spacing={2}
          sx={{ width: "100%" }}
          justifyContent="center"
          alignItems="center"
        >
          <Avatar
            sx={{
              height: "70px",
              width: "70px",
            }}
            src="https://img.freepik.com/free-photo/male-dj-taking-care-music-entertainment-party_23-2149658401.jpg?w=360&t=st=1669807626~exp=1669808226~hmac=3080c79a29f5982993947e224d2541f7fc134443fad097e2f63780d04a9a4732"
          ></Avatar>
          <TextField
            variant="outlined"
            sx={{ width: "100%" }}
            placeholder="Start a post"
          />
          <IconButton color="primary">
            <SendIcon />
          </IconButton>
        </Stack>
        <Stack spacing={2} direction="row">
          <Tooltip title="Insert Photo" arrow>
            <IconButton color="primary">
              <InsertPhotoIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Insert Audio" arrow>
            <IconButton color="primary">
              <MicIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Capture Image" arrow>
            <IconButton color="primary">
              <CameraAltIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Write an article" arrow>
            <IconButton color="primary">
              <ArticleIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>
    </Card>
  );
}

export default UserPostBox;
