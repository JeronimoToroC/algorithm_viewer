import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input,
} from '@nextui-org/react'
import { setGraph } from '../../redux/graphSlice'
import { IGraph } from '@/types/types'

interface ImportModalProps {
    isOpen: boolean
    onOpenChange: () => void
}

const ImportModal = ({ isOpen, onOpenChange }: ImportModalProps) => {
    const dispatch = useDispatch()
    const [tempGraphData, setTempGraphData] = useState<IGraph | null>(null)
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
                            Import Graph
                        </ModalHeader>
                        <ModalBody>
                            <Input
                                autoFocus
                                placeholder="Import a graph from a file"
                                variant="bordered"
                                type="file"
                                onChange={(e) => {
                                    const files = e.target?.files
                                    const file = files && files[0]
                                    if (file) {
                                        const reader = new FileReader()
                                        reader.readAsText(file, 'UTF-8')
                                        reader.onload = (event) => {
                                            const result = event.target?.result
                                            if (typeof result === 'string') {
                                                const graphData =
                                                    JSON.parse(result)
                                                setTempGraphData(graphData) // Guarda los datos del grafo temporalmente
                                            }
                                        }
                                    }
                                }}
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="danger"
                                variant="flat"
                                onPress={onClose}
                            >
                                Close
                            </Button>
                            {tempGraphData && (
                                <Button
                                    color="primary"
                                    onClick={() => {
                                        dispatch(setGraph(tempGraphData))
                                        setTempGraphData(null) // Opcional: limpiar después de enviar
                                        onClose() // Cerrar modal después de enviar
                                    }}
                                >
                                    Generate
                                </Button>
                            )}
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

export default ImportModal
