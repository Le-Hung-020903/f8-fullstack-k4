import Box from "@mui/material/Box";
import ListColumns from "./ListColumns/ListColumns";
import {
    DndContext,
    PointerSensor,
    useSensor,
    useSensors,
    DragOverlay,
    defaultDropAnimationSideEffects,
    closestCorners,
} from "@dnd-kit/core";
import { mapOrder } from "~/utils/sort";
import { arrayMove } from "@dnd-kit/sortable";
import { useEffect, useState } from "react";
import { cloneDeep } from "lodash";
import Column from "./ListColumns/Column/Column";
import Card from "./ListColumns/Column/ListCards/Card/Card";
const ACTIVE_DRAG_ITEM_TYPE = {
    COLUMN: "ACTIVE_DRAG_ITEM_TYPE_COLUMN",
    CARD: "ACTIVE_DRAG_ITEM_TYPE_CARD",
};
const BoardContent = ({ board }) => {
    const pointerSensor = useSensor(PointerSensor, {
        activationConstraint: { distance: 10 },
    });

    const mySensors = useSensors(pointerSensor);
    const [oderedColumnsState, setOderedColumnsState] = useState([]);

    const [activeDragItemId, setActiveDragItemId] = useState(null);
    const [activeDragItemType, setActiveDragItemType] = useState(null);
    const [activeDragItemData, setActiveDragItemData] = useState(null);
    const [oldColumnWhenDraggingCard, setOldColumnWhenDraggingCard] =
        useState(null);
    const handleDragStart = (e) => {
        setActiveDragItemId(e?.active?.id);
        setActiveDragItemType(
            e?.active?.data?.current?.columnId
                ? ACTIVE_DRAG_ITEM_TYPE.CARD
                : ACTIVE_DRAG_ITEM_TYPE.COLUMN
        );
        setActiveDragItemData(e?.active?.data?.current);
        if (e?.active?.data?.current?.columnId) {
            setOldColumnWhenDraggingCard(findColumnByCardId(e?.active?.id));
        }
    };
    const findColumnByCardId = (cardId) => {
        return oderedColumnsState.find((column) =>
            column?.cards.map((card) => card._id)?.includes(cardId)
        );
    };

    const handleDragOver = (e) => {
        const { active, over } = e;
        if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) return;
        if (!active || !over) return;
        const {
            id: activeDraggingCardId,
            data: { current: activeDraggingCardData },
        } = active;
        const { id: overCardId } = over;

        const activeColumn = findColumnByCardId(activeDraggingCardId);
        const overColumn = findColumnByCardId(overCardId);

        if (!activeColumn || !overColumn) return;
        if (activeColumn._id !== overColumn._id) {
            setOderedColumnsState((prevColumns) => {
                const overCardIndex = overColumn?.cards?.findIndex(
                    (card) => card._id === overCardId
                );
                let newCardIndex;

                const isBelowOverItem =
                    active.rect.current.translated &&
                    active.rect.current.translated.top >
                        over.rect.top + over.rect.height;
                const modifier = isBelowOverItem ? 1 : 0;

                newCardIndex =
                    overCardIndex >= 0
                        ? overCardIndex + modifier
                        : overColumn?.cards?.length + 1;
                const nextColumns = cloneDeep(prevColumns);
                const nextActiveColumn = nextColumns.find(
                    (column) => column._id === activeColumn._id
                );
                const nextOverColumn = nextColumns.find(
                    (column) => column._id === overColumn._id
                );
                if (nextActiveColumn) {
                    nextActiveColumn.cards = nextActiveColumn.cards.filter(
                        (card) => card._id !== activeDraggingCardId
                    );
                    nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(
                        (card) => card._id
                    );
                }
                if (nextOverColumn) {
                    nextOverColumn.cards = nextOverColumn.cards.filter(
                        (card) => card._id !== activeDraggingCardId
                    );
                    const rebuild_activeDraggingCardData = {
                        ...activeDraggingCardData,
                        columnId: nextOverColumn._id,
                    };
                    nextOverColumn.cards = nextOverColumn.cards.toSpliced(
                        newCardIndex,
                        0,
                        rebuild_activeDraggingCardData
                    );
                    nextOverColumn.cardOrderIds = nextOverColumn.cards.map(
                        (card) => card._id
                    );
                }
                return nextColumns;
            });
        }
    };
    const handleDargEnd = (e) => {
        const { active, over } = e;
        if (!active || !over) return;

        if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) {
            const {
                id: activeDraggingCardId,
                data: { current: activeDraggingCardData },
            } = active;
            const { id: overCardId } = over;

            const activeColumn = findColumnByCardId(activeDraggingCardId);
            const overColumn = findColumnByCardId(overCardId);

            if (!activeColumn || !overColumn) return;
            if (activeColumn._id !== overColumn._id) {
                setOderedColumnsState((prevColumns) => {
                    const overCardIndex = overColumn?.cards?.findIndex(
                        (card) => card._id === overCardId
                    );
                    let newCardIndex;

                    const isBelowOverItem =
                        active.rect.current.translated &&
                        active.rect.current.translated.top >
                            over.rect.top + over.rect.height;
                    const modifier = isBelowOverItem ? 1 : 0;

                    newCardIndex =
                        overCardIndex >= 0
                            ? overCardIndex + modifier
                            : overColumn?.cards?.length + 1;
                    const nextColumns = cloneDeep(prevColumns);
                    const nextActiveColumn = nextColumns.find(
                        (column) => column._id === activeColumn._id
                    );
                    const nextOverColumn = nextColumns.find(
                        (column) => column._id === overColumn._id
                    );
                    if (nextActiveColumn) {
                        nextActiveColumn.cards = nextActiveColumn.cards.filter(
                            (card) => card._id !== activeDraggingCardId
                        );
                        nextActiveColumn.cardOrderIds =
                            nextActiveColumn.cards.map((card) => card._id);
                    }
                    if (nextOverColumn) {
                        nextOverColumn.cards = nextOverColumn.cards.filter(
                            (card) => card._id !== activeDraggingCardId
                        );
                        const rebuild_activeDraggingCardData = {
                            ...activeDraggingCardData,
                            columnId: nextOverColumn._id,
                        };
                        nextOverColumn.cards = nextOverColumn.cards.toSpliced(
                            newCardIndex,
                            0,
                            rebuild_activeDraggingCardData
                        );
                        nextOverColumn.cardOrderIds = nextOverColumn.cards.map(
                            (card) => card._id
                        );
                    }
                    return nextColumns;
                });
            } else {
                const oldCardIndex =
                    oldColumnWhenDraggingCard?.cards?.findIndex(
                        (c) => c._id === activeDragItemId
                    );
                const newCardIndex = overColumn?.cards?.findIndex(
                    (c) => c._id === overCardId
                );
                const dndOderedCards = arrayMove(
                    oldColumnWhenDraggingCard?.cards,
                    oldCardIndex,
                    newCardIndex
                );
                setOderedColumnsState((prevColumns) => {
                    const nextColumns = cloneDeep(prevColumns);
                    const targetColumn = nextColumns.find(
                        (c) => c._id === overColumn._id
                    );
                    targetColumn.cards = dndOderedCards;
                    targetColumn.cardOrderIds = dndOderedCards.map(
                        (card) => card._id
                    );
                    return nextColumns;
                });
            }
        }
        if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
            if (active.id !== over.id) {
                const oldColumnIndex = oderedColumnsState.findIndex(
                    (c) => c._id === active.id
                );
                const newColumnIndex = oderedColumnsState.findIndex(
                    (c) => c._id === over.id
                );
                const dndOderedColumns = arrayMove(
                    oderedColumnsState,
                    oldColumnIndex,
                    newColumnIndex
                );
                setOderedColumnsState(dndOderedColumns);
            }
        }

        setActiveDragItemId(null),
            setActiveDragItemType(null),
            setActiveDragItemData(null);
        setOldColumnWhenDraggingCard(null);
    };

    useEffect(() => {
        const oderedColumns = mapOrder(
            board?.columns,
            board?.columnOrderIds,
            "_id"
        );
        setOderedColumnsState(oderedColumns);
    }, [board]);
    const customdropAnimation = {
        sideEffects: defaultDropAnimationSideEffects({
            styles: {
                active: {
                    opacity: "0.5",
                },
            },
        }),
    };
    return (
        <DndContext
            collisionDetection={closestCorners}
            sensors={mySensors}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDargEnd}
        >
            <Box
                sx={{
                    width: " 100%",
                    pt: "50px",
                }}
            >
                <ListColumns columns={oderedColumnsState} />
                <DragOverlay dropAnimation={customdropAnimation}>
                    {!activeDragItemType && null}
                    {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && (
                        <Column column={activeDragItemData} />
                    )}
                    {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && (
                        <Card card={activeDragItemData} />
                    )}
                </DragOverlay>
            </Box>
        </DndContext>
    );
};

export default BoardContent;
