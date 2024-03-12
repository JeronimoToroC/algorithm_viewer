import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    Link,
} from '@nextui-org/react'

import { IconLogo } from '../../assets/IconLogo.tsx'
import { Create, Home, Options, icons } from '../../assets/Icons.tsx'
import { useLocation } from 'react-router-dom'

export default function Header() {
    const location = useLocation()

    return (
        <Navbar>
            <NavbarBrand>
                <Link href="/">
                    <IconLogo />
                    <p className="text-2xl font-bold text-inherit text-white">
                        Algorith Viewer
                    </p>
                </Link>
            </NavbarBrand>
            <NavbarContent className="hidden gap-4 sm:flex" justify="center">
                <NavbarItem className="flex text-center">
                    <Home
                        height={20}
                        width={20}
                        fill="currentColor"
                        className="mr-1 mt-0.5 text-primary-500 purple-dark"
                    />
                    <Link
                        href="/"
                        className={
                            location.pathname === '/'
                                ? 'text-primary-600'
                                : 'text-white'
                        }
                    >
                        Home
                    </Link>
                </NavbarItem>
                <Dropdown>
                    <NavbarItem className="flex items-center justify-center text-center">
                        <Options
                            height={20}
                            width={20}
                            fill="currentColor"
                            className="mr-1 mt-0.5 h-full text-warning"
                        />
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="bg-transparent p-0 data-[hover=true]:bg-transparent"
                                endContent={icons.chevron}
                                radius="sm"
                                variant="light"
                            >
                                Options
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="ACME Options"
                        className="w-[340px]"
                        itemClasses={{
                            base: 'gap-4',
                        }}
                    >
                        <DropdownItem
                            key="usage_metrics"
                            description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                            startContent={icons.activity}
                        >
                            Usage Metrics
                        </DropdownItem>
                        <DropdownItem
                            key="production_ready"
                            description="ACME runs on ACME, join us and others serving requests at web scale."
                            startContent={icons.flash}
                        >
                            Production Ready
                        </DropdownItem>
                        <DropdownItem
                            key="99_uptime"
                            description="Applications stay on the grid with high availability and high uptime guarantees."
                            startContent={icons.server}
                        >
                            +99% Uptime
                        </DropdownItem>
                        <DropdownItem
                            key="supreme_support"
                            description="Overcome any challenge with a supporting team ready to respond."
                            startContent={icons.user}
                        >
                            +Supreme Support
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>

                <NavbarItem className="flex justify-center text-center">
                    <Create
                        height={20}
                        width={20}
                        fill="currentColor"
                        className="mr-1 mt-0.5 text-primary"
                    />
                    <Link
                        href="/graph-maker"
                        className={
                            location.pathname === '/graph-maker'
                                ? 'text-primary-600'
                                : 'text-white'
                        }
                    >
                        Graph Maker
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    {/* <Link to="/">Customers</Link> */}
                </NavbarItem>
                <NavbarItem>
                    {/* <Link to="/">Integrations</Link> */}
                </NavbarItem>
            </NavbarContent>
            <NavbarContent></NavbarContent>
        </Navbar>
    )
}
