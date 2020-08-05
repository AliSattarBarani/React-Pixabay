import React from "react";
import Images from "./Images";
import { myContext } from "../ContextAPI";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VisibilityIcon from "@material-ui/icons/Visibility";
import LabelIcon from "@material-ui/icons/Label";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 0, 0),
  },
}));

export default function ImageGrid() {
  const { fetchedData } = React.useContext(myContext);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [filteredData, setFilteredData] = React.useState([]);

  const handleOpen = (id) => {
    setFilteredData(fetchedData.filter((photo) => photo.id === id));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* Creating the images grid structure */}
      <center>
        <div className="grid-container">
          {fetchedData.map((photo) => (
            <div key={photo.id} onClick={() => handleOpen(photo.id)}>
              <Images imgURL={photo.largeImageURL} />
              <div style={{ width: "100%", marginTop: "10px" }}>
                <h5
                  style={{
                    textAlign: "center",
                    fontSize: "14.7px",
                    fontWeight: "bold",
                    fontFamily: '"Poppins", sans-serif',
                    color: "#283747 ",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <LabelIcon
                      style={{
                        paddingRight: "3px",
                        color: "#283747",
                        fontSize: "22px",
                      }}
                    />
                    {photo.tags}
                  </div>
                </h5>
              </div>
              <div>
                <div style={{ display: "flex", marginTop: "-20px" }}>
                  <AccountCircleIcon
                    style={{
                      marginTop: "15px",
                      color: "#E74C3C",
                      fontSize: "22px",
                    }}
                  />
                  <h3 style={{ color: "#E74C3C", fontSize: "15px" }}>
                    {photo.user}
                  </h3>
                </div>
                <div
                  style={{
                    display: "flex",
                    float: "right",
                    marginTop: "-37px",
                    marginRight: "7px",
                  }}
                >
                  <VisibilityIcon
                    style={{
                      color: "#444",
                      paddingRight: "2px",
                      fontSize: "22px",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: "bold",
                      fontFamily: '"Poppins", sans-serif',
                      marginTop: "0px",
                    }}
                  >
                    {photo.views}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </center>
      {filteredData.map((photo) => (
        <Modal
          className="Modal"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className="CloseModalBtn" onClick={handleClose}>
                  X
                </button>
              </div>
              <img
                src={photo.largeImageURL}
                alt="userImg"
                style={{ width: "100%", height: "500px", marginTop: "-27px" }}
              />
              <h4
                id="transition-modal-title"
                style={{ textAlign: "center", marginTop: "1px" }}
              >
                By: {photo.user}
              </h4>
              <div
                style={{
                  display: "flex",
                  marginTop: "-30px",
                  justifyContent: "space-around",
                }}
              >
                <h5>
                  <div style={{ marginBottom: "-5px" }}>
                    <ThumbUpIcon style={{ color: "#2E86C1 " }} />
                  </div>
                  {photo.likes}
                </h5>
                <h5>
                  <div style={{ marginBottom: "-5px" }}>
                    <FavoriteIcon style={{ color: "#EC7063" }} />
                  </div>
                  {photo.favorites}
                </h5>
                <h5>
                  <div style={{ marginBottom: "-5px" }}>
                    <VisibilityIcon style={{ color: "#333" }} />
                  </div>
                  {photo.views}
                </h5>
                <h5>
                  <div style={{ marginBottom: "-5px" }}>
                    <CloudDownloadIcon style={{ color: "#34495E" }} />
                  </div>
                  {photo.downloads}
                </h5>
              </div>
            </div>
          </Fade>
        </Modal>
      ))}
    </div>
  );
}
