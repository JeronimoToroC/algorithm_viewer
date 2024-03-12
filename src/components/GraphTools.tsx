import { Listbox, ListboxItem, ListboxSection, cn } from '@nextui-org/react'
import { DeleteIcon, EditIcon } from '../../assets/Icons.tsx'
const GraphTools = () => {
    const iconClasses =
        'text-xl text-default-500 pointer-events-none flex-shrink-0'
    return (
        <article className="col-span-2 rounded-small border-medium border-primary-50 px-1 py-2 text-center text-2xl text-white blue-dark">
            <Listbox variant="flat" aria-label="Listbox menu with sections">
                <ListboxSection title="Actions" showDivider>
                    <ListboxItem
                        key="edit"
                        description="Allows you to edit the file"
                        startContent={
                            <EditIcon
                                className={iconClasses}
                                fill="currentColor"
                                size={30}
                            />
                        }
                    >
                        Import
                    </ListboxItem>
                    <ListboxItem
                        key="edit"
                        description="Allows you to edit the file"
                        startContent={
                            <EditIcon
                                className={iconClasses}
                                fill="currentColor"
                                size={30}
                            />
                        }
                    >
                        Export
                    </ListboxItem>
                </ListboxSection>
                <ListboxSection title="Tools" showDivider>
                    <ListboxItem
                        key="edit"
                        description="Allows you to edit the file"
                        startContent={
                            <EditIcon
                                className={iconClasses}
                                fill="currentColor"
                                size={30}
                            />
                        }
                    >
                        Import
                    </ListboxItem>
                </ListboxSection>
                <ListboxSection title="Danger zone">
                    <ListboxItem
                        key="delete"
                        className="text-danger"
                        color="danger"
                        description="Permanently delete the file"
                        startContent={
                            <DeleteIcon
                                className={cn(iconClasses, 'text-danger')}
                                size={30}
                                fill="currentColor"
                            />
                        }
                    >
                        Delete file
                    </ListboxItem>
                </ListboxSection>
            </Listbox>
        </article>
    )
}
export default GraphTools
