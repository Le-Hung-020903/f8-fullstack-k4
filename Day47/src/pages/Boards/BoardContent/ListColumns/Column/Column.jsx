import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ListCards from "./ListCards/ListCards";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { mapOrder } from "~/utils/sort";

const Column = ({ column }) => {
    const oderedCards = mapOrder(column?.cards, column?.cardOrderIds, "_id");

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: column._id, data: { ...column } });

    const dndKitColumnStyles = {
        transform: CSS.Translate.toString(transform),
        transition,
        height: "100%",
        opacity: isDragging ? 0.5 : undefined,
    };

    return (
        <div ref={setNodeRef} style={dndKitColumnStyles} {...attributes}>
            <Box
                {...listeners}
                sx={{
                    minWidth: "300px",
                    manWidth: "300px",
                    ml: 2,
                    borderRadius: "6px",
                    bgcolor: "#fff",
                    height: "fit-content",
                    maxHeight: "600px",
                }}
            >
                <Box
                    sx={{
                        height: "50px",
                        p: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Typography>{column?.title}</Typography>
                </Box>

                {/* box column list */}
                <ListCards cards={oderedCards} />

                <Box
                    sx={{
                        height: "50px",
                        p: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Button startIcon={<AddIcon />}>Add Task</Button>
                </Box>
            </Box>
        </div>
    );
};

export default Column;
