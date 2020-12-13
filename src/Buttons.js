import React from "react";
import "./Buttons.css";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ReplayIcon from "@material-ui/icons/Replay";
import StarRateIcon from "@material-ui/icons/StarRate";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { IconButton } from "@material-ui/core";

function Buttons() {
  return (
    <div className="buttons">
      <IconButton className='button__repeat' >
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className='button__left'>
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className='button__star'>
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className='button__right'>
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className='button__light'>
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Buttons;
