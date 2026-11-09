import React, { useState } from "react";
import "./App.scss";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import OldVer from "./v1.0/main";
import Main from "./eva_v1.1/main";

function App() {
  const [isOldVer, setIsOldVer] = useState(false);
  const [legacyDialogOpen, setLegacyDialogOpen] = useState(false);

  const switchToLegacy = () => {
    setLegacyDialogOpen(false);
    setIsOldVer(true);
    window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "auto" }));
  };

  const switchToCurrent = () => {
    setIsOldVer(false);
    window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "auto" }));
  };

  if (isOldVer) {
    return (
      <>
        <Box
          sx={{
            position: "fixed",
            zIndex: 9999,
            left: "50%",
            bottom: 12,
            transform: "translateX(-50%)",
            width: { xs: "calc(100% - 24px)", md: "min(720px, calc(100% - 48px))" },
          }}
        >
          <Alert
            severity="warning"
            variant="filled"
            action={<Button color="inherit" size="small" onClick={switchToCurrent}>Return to current site</Button>}
          >
            <AlertTitle>Archived website</AlertTitle>
            You are viewing the archived website. Some information here is outdated.
          </Alert>
        </Box>
        <OldVer />
      </>
    );
  }

  return (
    <>
      <Main onOpenLegacy={() => setLegacyDialogOpen(true)} />
      <Dialog
        open={legacyDialogOpen}
        onClose={() => setLegacyDialogOpen(false)}
        aria-labelledby="archive-title"
        aria-describedby="archive-description"
        PaperProps={{
          sx: {
            borderRadius: 0,
            border: "2px solid #66349a",
            color: "#1d1820",
            bgcolor: "#ffffff",
            boxShadow: "7px 7px 0 #adf244",
            width: "min(460px, calc(100% - 36px))",
          },
        }}
      >
        <DialogTitle id="archive-title" sx={{ fontWeight: 800 }}>Open the old website?</DialogTitle>
        <DialogContent id="archive-description" sx={{ lineHeight: 1.7 }}>
          The previous website is kept as an archive, so some of the information there is no longer current.
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setLegacyDialogOpen(false)} sx={{ color: "#4b236d" }}>Stay here</Button>
          <Button
            onClick={switchToLegacy}
            variant="contained"
            sx={{ borderRadius: 0, bgcolor: "#66349a", "&:hover": { bgcolor: "#4e2379" } }}
          >
            View archive
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default App;
