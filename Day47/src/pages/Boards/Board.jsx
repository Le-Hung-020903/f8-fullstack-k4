import { Container } from "@mui/material";
import BoardContent from "./BoardContent/BoardContent";
import { mockData } from "~/apis/mock-data";
const Board = () => {
    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{ height: "100vh", backgroundColor: "primary.main" }}
        >
            <BoardContent board={mockData?.board} />
        </Container>
    );
};

export default Board;
