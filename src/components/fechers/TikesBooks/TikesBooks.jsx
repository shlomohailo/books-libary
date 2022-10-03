import "./TikesBooks.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function TikesBooks({ author, link, title ,year}) {
  const onGetMoreDetailsClick = (url) => {
    return window.open(url);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://img.freepik.com/free-vector/open-blue-book-white_1308-69339.jpg?w=2000"
        alt="image place holder"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
         Book name:  {title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Author: {author}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          year: {year}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onGetMoreDetailsClick(link)}>
          Get More details
        </Button>
      </CardActions>
    </Card>
  );
}

export default TikesBooks;
