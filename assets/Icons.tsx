interface IconProps {
    fill: string
    size?: number
    height?: number
    width?: number
    className?: string
}

export const ChevronDown = ({
    fill,
    size,
    height,
    width,
    ...props
}: IconProps) => {
    return (
        <svg
            fill="none"
            height={size || height || 24}
            viewBox="0 0 24 24"
            width={size || width || 24}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            />
        </svg>
    )
}

export const Lock = ({ fill, size, height, width, ...props }: IconProps) => {
    const color = fill

    return (
        <svg
            height={size || height || 24}
            viewBox="0 0 24 24"
            width={size || width || 24}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g transform="translate(3.5 2)">
                <path
                    d="M9.121,6.653V4.5A4.561,4.561,0,0,0,0,4.484V6.653"
                    fill="none"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth={1.5}
                    transform="translate(3.85 0.75)"
                />
                <path
                    d="M.5,0V2.221"
                    fill="none"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth={1.5}
                    transform="translate(7.91 12.156)"
                />
                <path
                    d="M7.66,0C1.915,0,0,1.568,0,6.271s1.915,6.272,7.66,6.272,7.661-1.568,7.661-6.272S13.4,0,7.66,0Z"
                    fill="none"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth={1.5}
                    transform="translate(0.75 6.824)"
                />
            </g>
        </svg>
    )
}

export const Activity = ({
    fill,
    size,
    height,
    width,
    ...props
}: IconProps) => {
    return (
        <svg
            height={size || height || 24}
            viewBox="0 0 24 24"
            width={size || width || 24}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g
                fill="none"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            >
                <path d="M6.918 14.854l2.993-3.889 3.414 2.68 2.929-3.78" />
                <path d="M19.668 2.35a1.922 1.922 0 11-1.922 1.922 1.921 1.921 0 011.922-1.922z" />
                <path d="M20.756 9.269a20.809 20.809 0 01.194 3.034c0 6.938-2.312 9.25-9.25 9.25s-9.25-2.312-9.25-9.25 2.313-9.25 9.25-9.25a20.931 20.931 0 012.983.187" />
            </g>
        </svg>
    )
}

export const Flash = ({
    fill = 'currentColor',
    size,
    height,
    width,
    ...props
}: IconProps) => {
    return (
        <svg
            fill="none"
            height={size || height}
            viewBox="0 0 24 24"
            width={size || width}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92Z"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            />
        </svg>
    )
}

export const Server = ({
    fill = 'currentColor',
    size,
    height,
    width,
    ...props
}: IconProps) => {
    return (
        <svg
            fill="none"
            height={size || height}
            viewBox="0 0 24 24"
            width={size || width}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M19.32 10H4.69c-1.48 0-2.68-1.21-2.68-2.68V4.69c0-1.48 1.21-2.68 2.68-2.68h14.63C20.8 2.01 22 3.22 22 4.69v2.63C22 8.79 20.79 10 19.32 10ZM19.32 22H4.69c-1.48 0-2.68-1.21-2.68-2.68v-2.63c0-1.48 1.21-2.68 2.68-2.68h14.63c1.48 0 2.68 1.21 2.68 2.68v2.63c0 1.47-1.21 2.68-2.68 2.68ZM6 5v2M10 5v2M6 17v2M10 17v2M14 6h4M14 18h4"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
        </svg>
    )
}

export const TagUser = ({
    fill = 'currentColor',
    size,
    height,
    width,
    ...props
}: IconProps) => {
    return (
        <svg
            fill="none"
            height={size || height}
            viewBox="0 0 24 24"
            width={size || width}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.98c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97Z"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            />
            <path
                d="M12 10a2.33 2.33 0 1 0 0-4.66A2.33 2.33 0 0 0 12 10ZM16 15.66c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
        </svg>
    )
}

export const Scale = ({
    fill = 'currentColor',
    size,
    height,
    width,
    ...props
}: IconProps) => {
    return (
        <svg
            fill="none"
            height={size || height}
            viewBox="0 0 24 24"
            width={size || width}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7ZM18 6 6 18"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
            <path
                d="M18 10V6h-4M6 14v4h4"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
        </svg>
    )
}
export const Create = ({
    fill = 'currentColor',
    size,
    height,
    width,
    ...props
}: IconProps) => {
    return (
        <svg
            fill="none"
            height={size || height}
            viewBox="0 0 24 24"
            width={size || width}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="m9.508 4.067l-5 2.857A2 2 0 0 0 3.5 8.661V15.5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.66a2 2 0 0 0-1.008-1.736l-5-2.857a2 2 0 0 0-1.984 0M10.5 8.5v6m-3-3h6"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
        </svg>
    )
}
export const Options = ({
    fill = 'currentColor',
    size,
    height,
    width,
    ...props
}: IconProps) => {
    return (
        <svg
            fill="none"
            height={size || height}
            viewBox="0 0 24 24"
            width={size || width}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
            />
        </svg>
    )
}
export const Home = ({
    fill = 'currentColor',
    size,
    height,
    width,
    ...props
}: IconProps) => {
    return (
        <svg
            fill="none"
            height={size || height}
            viewBox="0 0 24 24"
            width={size || width}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
        </svg>
    )
}

export const Graph = ({
    fill = 'currentColor',
    size,
    height,
    width,
    ...props
}: IconProps) => {
    return (
        <svg
            fill="none"
            height={size || height}
            width={size || width}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19.5 17c-.14 0-.26 0-.39.04L17.5 13.8c.45-.45.75-1.09.75-1.8a2.5 2.5 0 0 0-2.5-2.5c-.14 0-.25 0-.4.04L13.74 6.3c.47-.46.76-1.09.76-1.8a2.5 2.5 0 0 0-5 0c0 .7.29 1.34.76 1.79L8.65 9.54c-.15-.04-.26-.04-.4-.04a2.5 2.5 0 0 0-2.5 2.5c0 .71.29 1.34.75 1.79l-1.61 3.25C4.76 17 4.64 17 4.5 17a2.5 2.5 0 0 0 0 5A2.5 2.5 0 0 0 7 19.5c0-.7-.29-1.34-.76-1.79l1.62-3.25c.14.04.26.04.39.04s.25 0 .38-.04l1.63 3.25c-.47.45-.76 1.09-.76 1.79a2.5 2.5 0 0 0 5 0A2.5 2.5 0 0 0 12 17c-.13 0-.26 0-.39.04L10 13.8c.45-.45.75-1.09.75-1.8c0-.7-.29-1.33-.75-1.79l1.61-3.25c.13.04.26.04.39.04s.26 0 .39-.04L14 10.21a2.5 2.5 0 0 0 1.75 4.29c.13 0 .25 0 .38-.04l1.63 3.25c-.47.45-.76 1.09-.76 1.79a2.5 2.5 0 0 0 5 0a2.5 2.5 0 0 0-2.5-2.5m-15 3.5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m8.5-1c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1M7.25 12c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1M11 4.5c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1m3.75 7.5c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1m4.75 8.5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"
            />
        </svg>
    )
}

export const EditIcon = ({
    fill = 'currentColor',
    size,
    height,
    width,
    ...props
}: IconProps) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height={size || height}
            width={size || width}
            role="presentation"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                d="M15.48 3H7.52C4.07 3 2 5.06 2 8.52v7.95C2 19.94 4.07 22 7.52 22h7.95c3.46 0 5.52-2.06 5.52-5.52V8.52C21 5.06 18.93 3 15.48 3Z"
                fill={fill}
                opacity={0.4}
            />
            <path
                d="M21.02 2.98c-1.79-1.8-3.54-1.84-5.38 0L14.51 4.1c-.1.1-.13.24-.09.37.7 2.45 2.66 4.41 5.11 5.11.03.01.08.01.11.01.1 0 .2-.04.27-.11l1.11-1.12c.91-.91 1.36-1.78 1.36-2.67 0-.9-.45-1.79-1.36-2.71ZM17.86 10.42c-.27-.13-.53-.26-.77-.41-.2-.12-.4-.25-.59-.39-.16-.1-.34-.25-.52-.4-.02-.01-.08-.06-.16-.14-.31-.25-.64-.59-.95-.96-.02-.02-.08-.08-.13-.17-.1-.11-.25-.3-.38-.51-.11-.14-.24-.34-.36-.55-.15-.25-.28-.5-.4-.76-.13-.28-.23-.54-.32-.79L7.9 10.72c-.35.35-.69 1.01-.76 1.5l-.43 2.98c-.09.63.08 1.22.47 1.61.33.33.78.5 1.28.5.11 0 .22-.01.33-.02l2.97-.42c.49-.07 1.15-.4 1.5-.76l5.38-5.38c-.25-.08-.5-.19-.78-.31Z"
                fill={fill}
            />
        </svg>
    )
}

export const DeleteIcon = ({
    fill = 'currentColor',
    size,
    height,
    width,
    ...props
}: IconProps) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height={size || height}
            width={size || width}
            role="presentation"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                d="M21.07 5.23c-1.61-.16-3.22-.28-4.84-.37v-.01l-.22-1.3c-.15-.92-.37-2.3-2.71-2.3h-2.62c-2.33 0-2.55 1.32-2.71 2.29l-.21 1.28c-.93.06-1.86.12-2.79.21l-2.04.2c-.42.04-.72.41-.68.82.04.41.4.71.82.67l2.04-.2c5.24-.52 10.52-.32 15.82.21h.08c.38 0 .71-.29.75-.68a.766.766 0 0 0-.69-.82Z"
                fill={fill}
            />
            <path
                d="M19.23 8.14c-.24-.25-.57-.39-.91-.39H5.68c-.34 0-.68.14-.91.39-.23.25-.36.59-.34.94l.62 10.26c.11 1.52.25 3.42 3.74 3.42h6.42c3.49 0 3.63-1.89 3.74-3.42l.62-10.25c.02-.36-.11-.7-.34-.95Z"
                fill={fill}
                opacity={0.399}
            />
            <path
                clipRule="evenodd"
                d="M9.58 17a.75.75 0 0 1 .75-.75h3.33a.75.75 0 0 1 0 1.5h-3.33a.75.75 0 0 1-.75-.75ZM8.75 13a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z"
                fill={fill}
                fillRule="evenodd"
            />
        </svg>
    )
}

export const Import = ({
    fill = 'currentColor',
    size,
    height,
    width,
    ...props
}: IconProps) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height={size || height}
            width={size || width}
            role="presentation"
            viewBox="0 0 24 24"
            {...props}
        >
            <g fill="none">
                <path
                    fill={fill}
                    d="m12 14l-.707.707l.707.707l.707-.707zm1-9a1 1 0 1 0-2 0zM6.293 9.707l5 5l1.414-1.414l-5-5zm6.414 5l5-5l-1.414-1.414l-5 5zM13 14V5h-2v9z"
                />
                <path
                    stroke={fill}
                    strokeWidth="2"
                    d="M5 16v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1"
                />
            </g>
        </svg>
    )
}
export const Export = ({
    fill = 'currentColor',
    size,
    height,
    width,
    ...props
}: IconProps) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height={size || height}
            width={size || width}
            role="presentation"
            viewBox="0 0 24 24"
            {...props}
        >
            <g fill="none">
                <path
                    fill={fill}
                    d="m12 5l-.707-.707l.707-.707l.707.707zm1 9a1 1 0 1 1-2 0zM6.293 9.293l5-5l1.414 1.414l-5 5zm6.414-5l5 5l-1.414 1.414l-5-5zM13 5v9h-2V5z"
                />
                <path
                    stroke={fill}
                    strokeWidth="2"
                    d="M5 16v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1"
                />
            </g>
        </svg>
    )
}

export const ChevronRight = ({
    fill = 'currentColor',
    size,
    height,
    width,
    ...props
}: IconProps) => {
    return (
        <svg
            fill="none"
            height={size || height || 24}
            viewBox="0 0 24 24"
            width={size || width || 24}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            />
        </svg>
    )
}

export const CustomGraph = ({
    fill = 'currentColor',
    size,
    height,
    width,
    ...props
}: IconProps) => {
    return (
        <svg
            fill="none"
            height={size || height || 24}
            viewBox="0 0 32 32"
            width={size || width || 24}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M30 6a3.992 3.992 0 0 0-7.977-.224L9.586 8.263A3.99 3.99 0 1 0 5 13.858v8.284A3.992 3.992 0 1 0 9.858 27h8.284a3.991 3.991 0 1 0 5.595-4.586l2.487-12.437A3.995 3.995 0 0 0 30 6m-4-2a2 2 0 1 1-2 2a2.002 2.002 0 0 1 2-2M4 10a2 2 0 1 1 2 2a2.002 2.002 0 0 1-2-2m2 18a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2m12.142-3H9.858A3.994 3.994 0 0 0 7 22.142v-8.284a3.987 3.987 0 0 0 2.977-3.634l12.437-2.487a4.005 4.005 0 0 0 1.849 1.85l-2.487 12.436A3.987 3.987 0 0 0 18.142 25M22 28a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
        </svg>
    )
}
export const icons = {
    chevronDown: <ChevronDown fill="currentColor" size={20} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
        <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
    create: <Create className="text-primary" fill="currentColor" size={30} />,
    options: <Options className="text-warning" fill="currentColor" size={30} />,
    home: <Home className="text-primary" fill="currentColor" size={30} />,
    delete: (
        <DeleteIcon className="text-danger" fill="currentColor" size={30} />
    ),
    edit: <EditIcon className="text-primary" fill="currentColor" size={30} />,
    import: <Import className="text-primary" fill="currentColor" size={30} />,
    export: <Export className="text-primary" fill="currentColor" size={30} />,
    chevronRight: (
        <ChevronRight className="text-primary" fill="currentColor" size={30} />
    ),
    customGraph: (
        <CustomGraph className="text-primary" fill="currentColor" size={30} />
    ),
}
//TODO: Se deben cambiar los nombres de los iconos para que sean más descriptivos
