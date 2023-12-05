import Box from "@mui/material/Box";
import Card from "./Card/Card";
import {
    SortableContext,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const ListCards = ({ cards }) => {
    return (
        <SortableContext
            items={cards?.map((c) => c._id)}
            strategy={verticalListSortingStrategy}
        >
            <Box
                sx={{
                    p: "0 5px",
                    m: "0 5px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    overflowX: "hidden",
                    overflowY: "auto",
                    maxHeight: "500px",
                }}
            >
                {cards?.map((card) => (
                    <Card key={card._id} card={card} />
                ))}
            </Box>
        </SortableContext>
    );
};

export default ListCards;
