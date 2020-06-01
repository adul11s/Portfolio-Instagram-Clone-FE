import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";

const Post = (props) => {
  return (
    <div>
      <Card
        style={{
          marginTop: "20px",
          color: "#fafafa",
        }}
      >
        <CardHeader
          avatar={<Avatar aria-label="recipe">UN</Avatar>}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Username"
        ></CardHeader>
        <CardMedia title="Paella dish">
          <img src={require("../images/people.jpg")} alt="" />
        </CardMedia>
        <CardContent>
          <CardActions disableSpacing style={{ display: "flex" }}>
            <IconButton aria-label="add to favorites">
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton aria-label="add comments">
              <ModeCommentOutlinedIcon />
            </IconButton>
            <IconButton aria-label="share this post">
              <SendOutlinedIcon />
            </IconButton>
            <IconButton
              aria-label="bookmark this post"
              style={{ marginLeft: "auto" }}
            >
              <BookmarkBorderOutlinedIcon />
            </IconButton>
          </CardActions>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default Post;
