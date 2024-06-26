import { IGraph } from '@/types/types'
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input,
    Switch,
    cn,
} from '@nextui-org/react'
import { setGraph } from '../../redux/graphSlice'
import { useDispatch } from 'react-redux'

interface CustomGraphModalProps {
    isOpen: boolean
    onOpenChange: () => void
    graphData: IGraph
    setGraphData: (graphData: IGraph) => void
}

const CustomGraphModal = ({
    isOpen,
    onOpenChange,
    graphData,
    setGraphData,
}: CustomGraphModalProps) => {
    const dispatch = useDispatch()

    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="top-center"
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            Custom Graph
                        </ModalHeader>
                        <ModalBody>
                            <Input
                                autoFocus
                                label="name"
                                placeholder="Enter a name of the graph"
                                variant="bordered"
                                type="text"
                                onChange={(evt) =>
                                    setGraphData({
                                        ...graphData,
                                        name: evt.target.value,
                                    })
                                }
                            />
                            <Input
                                autoFocus
                                label="nodes"
                                placeholder="Enter number of nodes"
                                variant="bordered"
                                type="number"
                                onChange={(evt) =>
                                    setGraphData({
                                        ...graphData,
                                        nodesNumber: Number(evt.target.value),
                                    })
                                }
                            />
                            <Switch
                                classNames={{
                                    base: cn(
                                        'inline-flex flex-row-reverse w-full max-w-md bg-content1 hover:bg-content2 items-center',
                                        'justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent',
                                        'data-[selected=true]:border-primary'
                                    ),
                                    wrapper: 'p-0 h-4 overflow-visible',
                                    thumb: cn(
                                        'w-6 h-6 border-2 shadow-lg',
                                        'group-data-[hover=true]:border-primary',
                                        //selected
                                        'group-data-[selected=true]:ml-6',
                                        // pressed
                                        'group-data-[pressed=true]:w-7',
                                        'group-data-[selected]:group-data-[pressed]:ml-4'
                                    ),
                                }}
                                onChange={(event) =>
                                    setGraphData({
                                        ...graphData,
                                        isConnected: event.target.checked,
                                    })
                                }
                            >
                                <div className="flex flex-col gap-1">
                                    <p className="text-medium">
                                        Connected Graph
                                    </p>
                                    <p className="text-tiny text-default-400">
                                        A graph where there´s a path between
                                        every pair of vertices.
                                    </p>
                                </div>
                            </Switch>
                            <Switch
                                classNames={{
                                    base: cn(
                                        'inline-flex flex-row-reverse w-full max-w-md bg-content1 hover:bg-content2 items-center',
                                        'justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent',
                                        'data-[selected=true]:border-primary'
                                    ),
                                    wrapper: 'p-0 h-4 overflow-visible',
                                    thumb: cn(
                                        'w-6 h-6 border-2 shadow-lg',
                                        'group-data-[hover=true]:border-primary',
                                        //selected
                                        'group-data-[selected=true]:ml-6',
                                        // pressed
                                        'group-data-[pressed=true]:w-7',
                                        'group-data-[selected]:group-data-[pressed]:ml-4'
                                    ),
                                }}
                                onChange={(event) =>
                                    setGraphData({
                                        ...graphData,
                                        isComplete: event.target.checked,
                                    })
                                }
                            >
                                <div className="flex flex-col gap-1">
                                    <p className="text-medium">
                                        Complete Graph
                                    </p>
                                    <p className="text-tiny text-default-400">
                                        A graph in which every pair of distinct
                                        vertices is connected by a unique edge.
                                    </p>
                                </div>
                            </Switch>
                            <Switch
                                classNames={{
                                    base: cn(
                                        'inline-flex flex-row-reverse w-full max-w-md bg-content1 hover:bg-content2 items-center',
                                        'justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent',
                                        'data-[selected=true]:border-primary'
                                    ),
                                    wrapper: 'p-0 h-4 overflow-visible',
                                    thumb: cn(
                                        'w-6 h-6 border-2 shadow-lg',
                                        'group-data-[hover=true]:border-primary',
                                        //selected
                                        'group-data-[selected=true]:ml-6',
                                        // pressed
                                        'group-data-[pressed=true]:w-7',
                                        'group-data-[selected]:group-data-[pressed]:ml-4'
                                    ),
                                }}
                                onChange={(event) =>
                                    setGraphData({
                                        ...graphData,
                                        isWeighted: event.target.checked,
                                    })
                                }
                            >
                                <div className="flex flex-col gap-1">
                                    <p className="text-medium">
                                        Weighted Graph
                                    </p>
                                    <p className="text-tiny text-default-400">
                                        Each edge of the graph has an associated
                                        weight or cost.
                                    </p>
                                </div>
                            </Switch>
                            <Switch
                                classNames={{
                                    base: cn(
                                        'inline-flex flex-row-reverse w-full max-w-md bg-content1 hover:bg-content2 items-center',
                                        'justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent',
                                        'data-[selected=true]:border-primary'
                                    ),
                                    wrapper: 'p-0 h-4 overflow-visible',
                                    thumb: cn(
                                        'w-6 h-6 border-2 shadow-lg',
                                        'group-data-[hover=true]:border-primary',
                                        //selected
                                        'group-data-[selected=true]:ml-6',
                                        // pressed
                                        'group-data-[pressed=true]:w-7',
                                        'group-data-[selected]:group-data-[pressed]:ml-4'
                                    ),
                                }}
                                onChange={(event) =>
                                    setGraphData({
                                        ...graphData,
                                        isDirected: event.target.checked,
                                    })
                                }
                            >
                                <div className="flex flex-col gap-1">
                                    <p className="text-medium">
                                        Directed Graph
                                    </p>
                                    <p className="text-tiny text-default-400">
                                        A graph where edges have a direction
                                        from one vertex to another.
                                    </p>
                                </div>
                            </Switch>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="danger"
                                variant="flat"
                                onPress={onClose}
                            >
                                Close
                            </Button>
                            <Button
                                color="primary"
                                onClick={() => dispatch(setGraph(graphData))}
                            >
                                Generate
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}
export default CustomGraphModal
//TODO: Agregar validaciones en los switches para que tengan sentido con el tipo de grafo que se quiere crear
