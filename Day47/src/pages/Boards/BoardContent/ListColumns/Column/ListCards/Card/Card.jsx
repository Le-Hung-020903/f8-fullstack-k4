import Typography from "@mui/material/Typography";
import { Card as MuiCard } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
const Card = ({ card }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: card._id, data: { ...card } });

    const dndKitCardStyles = {
        transform: CSS.Translate.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : undefined,
        border: isDragging ? "1px solid #009900" : undefined,
    };
    return (
        <MuiCard
            ref={setNodeRef}
            style={dndKitCardStyles}
            {...attributes}
            {...listeners}
            sx={{
                maxWidth: 345,
                cursor: "pointer",
                boxShadow:
                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                overflow: "unset",
            }}
        >
            {card?.cover && (
                <CardMedia sx={{ height: 140 }} image={card?.cover} />
            )}
            <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
                <Typography>{card?.title}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </MuiCard>
    );
};

export default Card;
