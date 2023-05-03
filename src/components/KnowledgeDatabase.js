import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import { Card } from "@mui/material";
import Divider from "@mui/material/Divider";

import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SourceIcon from "@mui/icons-material/Source";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MenuBookIcon from "@mui/icons-material/MenuBook";

import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";

export default function KnowledgeDatabase( bgImage ) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const textStyling = {
    fontSize: "13px",
    color: "white"
    };

  return (
    <Box sx={{ width: "200", position: "relative", overflow: "hidden", background: bgImage }}>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition style={{ overflow: "hidden"}}>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={2000}>
       
            <Paper sx={{ width: 230, background:"#0047ab", zIndex: "9999999", overflow: "scroll" }}>
              <MenuList>
                <MenuItem>
                  <ListItemIcon>
                    <QuestionMarkIcon fontSize="small" style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primaryTypographyProps={{ style: textStyling }}>General Enquiry</ListItemText>
                  {/* <Typography variant="body2" color="text.secondary">
                    ⌘X
                  </Typography> */}
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <GroupAddIcon fontSize="small" style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primaryTypographyProps={{ style: textStyling }}>Creating Account</ListItemText>
                  {/* <Typography variant="body2" color="text.secondary">
                    ⌘C
                  </Typography> */}
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <ContentPaste fontSize="small" style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primaryTypographyProps={{ style: textStyling }}>Help Desk</ListItemText>
                  {/* <Typography variant="body2" color="text.secondary">
                    ⌘V
                  </Typography> */}
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <Cloud fontSize="small" style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primaryTypographyProps={{ style: textStyling }}>X-100 Enterprise</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <LocalPoliceIcon fontSize="small" style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primaryTypographyProps={{ style: textStyling }}>About Arm Officer</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <SupportAgentIcon fontSize="small" style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primaryTypographyProps={{ style: textStyling }}>Customer Care</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <SourceIcon fontSize="small" style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primaryTypographyProps={{ style: textStyling }}>Source Branch</ListItemText>
                </MenuItem>
                {/* <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <ProductionQuantityLimitsIcon fontSize="small" style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primaryTypographyProps={{ style: textStyling }}>Product Description</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <MoreHorizIcon fontSize="small" style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primaryTypographyProps={{ style: textStyling }}>Status</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <Cloud fontSize="small" style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primaryTypographyProps={{ style: textStyling }}>Account Number</ListItemText>
                </MenuItem>
                <Divider /> */}
                <MenuItem>
                  <br /><br /><br />
                </MenuItem>
              </MenuList>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Grid container justifyContent="center">
        <Grid
          className="absolute bottom-0 right-0 cursor-pointer  "
          sx={{ width: 255, maxWidth: "100%", position: "fixed", zIndex: "1000" }}
        >
          <Card
            style={{ backgroundColor: "#f5f5f5", color: "#0047ab", }}
            className="p-2 border-2 shadow-xl shadow-black font-bold "
            onClick={handleClick("top")}
            // onMouseEnter={handleClick("top")}
            // onMouseLeave={handleClick("top")}
          >
            &nbsp; KNOWLEDGE &nbsp;DATABASE <MenuBookIcon fontSize="large" style={{backgroundColor: "#f5f5f5", borderRadius: "100px", padding: "2px", fontWeight:"lighter", color: "#0047ab"}} className="bg-slate-300 rounded-full p-2" />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}