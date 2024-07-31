import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

const ProductCard = ({ title, description, price, img, id }) => {
  return (
    <Card sx={{ Width: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        width="100%"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${id}`}>
          <Button size="small" variant="outlined" color="#1a4e52">
            Ver más
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
export default ProductCard;
