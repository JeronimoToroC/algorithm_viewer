import {
    Listbox,
    ListboxItem,
    ListboxSection,
    cn,
    useDisclosure,
} from '@nextui-org/react'
import {
    CustomGraph,
    DeleteIcon,
    EditIcon,
    Export,
    Import,
} from '../../assets/Icons.tsx'
import CustomGraphModal from './CustomGraphModal.tsx'
const GraphTools = () => {
    const iconClasses =
        'text-xl text-default-500 pointer-events-none flex-shrink-0'
    const { isOpen, onOpen, onOpenChange } = useDisclosure()

    return (
        <article className="col-span-2 rounded-small border-medium border-primary-50 px-1 py-2 text-center text-2xl text-white blue-dark">
            <Listbox variant="flat" aria-label="Listbox menu with sections">
                <ListboxSection title="Actions" showDivider>
                    <ListboxItem
                        key="import"
                        description="Allows you to import a graph"
                        startContent={
                            <Import
                                className={iconClasses}
                                fill="currentColor"
                                size={30}
                            />
                        }
                    >
                        Import
                    </ListboxItem>
                    <ListboxItem
                        key="export"
                        description="Allows you to export a graph"
                        startContent={
                            <div
                                className={cn(
                                    'flex h-7 w-7 items-center justify-center rounded-small text-success'
                                )}
                            >
                                <Export
                                    className={iconClasses}
                                    fill="currentColor"
                                    size={30}
                                />
                            </div>
                        }
                    >
                        Export
                    </ListboxItem>
                </ListboxSection>
                <ListboxSection title="Tools" showDivider>
                    <ListboxItem
                        key="customGraph"
                        description="Allows you to create a customized graph"
                        startContent={
                            <CustomGraph
                                className={`${iconClasses} -mt-4`}
                                fill="currentColor"
                                size={30}
                            />
                        }
                        onPress={onOpen}
                    >
                        Custom graph
                    </ListboxItem>
                    <ListboxItem
                        key="add"
                        description="Allows you to add a new node"
                        startContent={
                            <EditIcon
                                className={iconClasses}
                                fill="currentColor"
                                size={30}
                            />
                        }
                    >
                        Add nodes
                    </ListboxItem>
                </ListboxSection>
                <ListboxSection>
                    <ListboxItem
                        key="delete"
                        className="text-danger"
                        color="danger"
                        description="Permanently delete the graph"
                        startContent={
                            <DeleteIcon
                                className={cn(iconClasses, 'text-danger')}
                                size={30}
                                fill="currentColor"
                            />
                        }
                    >
                        Delete graph
                    </ListboxItem>
                </ListboxSection>
            </Listbox>
            <CustomGraphModal isOpen={isOpen} onOpenChange={onOpenChange} />
        </article>
    )
}
export default GraphTools
