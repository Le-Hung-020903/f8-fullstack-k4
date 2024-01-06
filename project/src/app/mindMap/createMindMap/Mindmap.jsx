import { useCallback, useState, useRef } from "react";
import ReactFlow, {
    Background,
    Controls,
    applyEdgeChanges,
    applyNodeChanges,
    addEdge,
    Position,
    Handle,
    MiniMap,
    useNodesState,
    useEdgesState,
    useReactFlow,
    ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";
import TextUpdaterNode from "@/app/components/TextUpdaterNode";

const initialNodes = [
    {
        id: "1",
        position: { x: 0, y: 200 },
        data: { label: "My mindmap", value: 123 },
        type: "input",
    },
    // {
    //     id: "2",
    //     position: { x: 100, y: 100 },
    //     data: { label: "My hung", value: 123 },
    //     type: "textUpdater",
    // },
];

// color minimap
const nodeColor = (node) => {
    switch (node.type) {
        case "input":
            return "#6ede87";
        case "output":
            return "#6865A5";
        default:
            return "#ff0072";
    }
};
const nodeTypes = { textUpdater: TextUpdaterNode };

const rfStyle = {
    backgroundColor: "#B8CEFF",
};
// const initialEdges = [];

//add node
let id = 1;
const getId = () => `${id++}`;

const Mindmap = ({ data }) => {
    // const [nodes, setNodes] = useState(initialNodes);
    // const [edges, setEdges] = useState([]);

    // const onNodesChange = useCallback(
    //     (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    //     []
    // );
    // const onEdgesChange = useCallback(
    //     (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    //     []
    // );

    // add node
    const reactFlowWrapper = useRef(null);
    const connectingNodeId = useRef(null);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const { screenToFlowPosition } = useReactFlow();
    const onConnect = useCallback((params) => {
        // reset the start node on connections
        connectingNodeId.current = null;
        setEdges((eds) => addEdge(params, eds));
    }, []);

    const onConnectStart = useCallback((_, { nodeId }) => {
        connectingNodeId.current = nodeId;
    }, []);

    const onConnectEnd = useCallback(
        (event) => {
            if (!connectingNodeId.current) return;

            const targetIsPane =
                event.target.classList.contains("react-flow__pane");

            if (targetIsPane) {
                // we need to remove the wrapper bounds, in order to get the correct position
                const id = getId();
                const newNode = {
                    id,
                    position: screenToFlowPosition({
                        x: event.clientX,
                        y: event.clientY,
                    }),
                    data: { label: `Node ${id}` },
                    origin: [0.5, 0.0],
                };

                setNodes((nds) => nds.concat(newNode));
                setEdges((eds) =>
                    eds.concat({
                        id,
                        source: connectingNodeId.current,
                        target: id,
                    })
                );
            }
        },
        [screenToFlowPosition]
    );
    return (
        <div className="wrapper" ref={reactFlowWrapper}>
            <ReactFlow
                edges={edges}
                nodes={nodes}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onConnectStart={onConnectStart}
                onConnectEnd={onConnectEnd}
                nodeTypes={nodeTypes}
                fitView
                fitViewOptions={{ padding: 2 }}
                nodeOrigin={[0.5, 0]}
                style={rfStyle}
            >
                <MiniMap
                    nodeColor={nodeColor}
                    nodeStrokeWidth={3}
                    zoomable
                    pannable
                />
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    );
};

// export default Mindmap;

export default () => (
    <ReactFlowProvider>
        <Mindmap />
    </ReactFlowProvider>
);
