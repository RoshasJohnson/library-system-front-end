import React from "react";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { Button, Icon } from "@mui/material";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import Stack from "@mui/material/Stack";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import { useNavigate } from "react-router-dom";

function SideBar() {

    const navigate = useNavigate();

  return (
    <div style={{ margin: "1%" }}>
      <Stack direction={"column"}>
        <Button  onClick={() => navigate("/admin")} style={{width:"fit-content",}} className="sidebarbtn">
          <DashboardCustomizeIcon /> Dashboard
        </Button>
        <Button   onClick={() => navigate("/admin/books")}  style={{width:"fit-content"}} className="sidebarbtn">
          <MenuBookIcon /> Books
        </Button>
        <Button   onClick={() => navigate("/admin/author")} style={{width:"fit-content"}} className="sidebarbtn">
          <PeopleAltIcon /> Author
        </Button>
        <Button  onClick={() => navigate("/admin/genre")}  style={{width:"fit-content"}} className="sidebarbtn">
          <EditLocationAltIcon /> Genre
        </Button>
      </Stack>
    </div>
  );
}

export default SideBar;
