import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar, Button, Card, CardContent, Container, Divider, IconButton, Input, Link, List, ListItem, TextField, Toolbar, Typography, useTheme } from '@material-ui/core';


function App() {
  const theme = useTheme();
  const [filename, setFilename] = useState<String>("");
  type errorType = {
    text: string;
  }
  return (
    <>
      <AppBar
        position="static"
        style={{ backgroundColor: `${theme.palette.success.main}` }}
      >
        <Toolbar>
          <Typography variant="h6">Spielwiese</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h4">Spielwiese</Typography>
        <Typography variant="subtitle1">
          A demo poject on how to handle a file upload
        </Typography>
        <br></br>
        <Typography variant="h6">Used technologies:</Typography>
        <List>
          <ListItem>React</ListItem>
          <ListItem>Material-UI</ListItem>
          <ListItem>TypeScript</ListItem>
        </List>
        <br></br>
        <Typography variant="h6">
          The Form (*dramatic music intensifies*)
        </Typography>
        <form>
          <Typography variant="body1">Selected File: {filename.length > 0 ? filename : "None"}</Typography>
          <Button
            variant="outlined"
            component="label"
            style={{
              borderColor: `${theme.palette.success.main}`,
              color: `${theme.palette.success.main}`,
            }}
          >
            Upload File
            <input type="file" name="file" style={{ display: "none" }} onChange={(event: React.ChangeEvent<HTMLInputElement>) => { 
              setFilename((event.target.files?.item(0)?.name ?? ""));
            }} accept=".png, .jpg,  .jpeg" />
          </Button>{" "}
          <Button
            variant="contained"
            style={{
              backgroundColor: `${theme.palette.success.main}`,
              color: "white",
            }}
            type="submit"
          >
            Beam It Up Scotty!
          </Button>
        </form>
      </Container>
    </>
  );
}

export default App;
