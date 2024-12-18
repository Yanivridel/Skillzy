import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { ModeToggle } from "./mode-toggle"
// Icons
import { Home, User, ShieldHalf, Search, Contact, User2, ChevronUp, LogIn, UserPlus ,BookOpenIcon} from "lucide-react"
import { useNavigate } from "react-router-dom"
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenu } from "@radix-ui/react-dropdown-menu"
import { unsetUser } from "@/store/slices/userSlices"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { RootState } from "@/store"


const navList = [
    {
    title: "Home",
    url: "/",
    icon: Home,
    },
    {
    title: "Profile",
    url: "/profile",
    icon: User,
    },
    {
    title: "Lessons",
    url: "/lessons",
    icon: BookOpenIcon,
    },
    {
    title: "About Us",
    url: "/about",
    icon: ShieldHalf,
    },
    {
    title: "Contact",
    url: "/contact",
    icon: Contact,
    }
]
const navUser = [
    {
    title: "Login",
    url: "/login",
    icon: LogIn,
    },
    {
    title: "Sign Up",
    url: "/signup",
    icon: UserPlus,
    },
]

export function AppSidebar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userLogged = useSelector((state: RootState) => state.userLogged);
    console.log(userLogged)
    const handleSignOut = () => {
        dispatch(unsetUser());
        navigate('/login');
    }

    return (
    <Sidebar 
    >
        <SidebarHeader>

            <h1 className="bubble-font text-center  text-[var(--button-bg)] ">SKILLZY</h1>
        </SidebarHeader>

        {/* Content */}
        <SidebarContent>
            <SidebarGroup>
                {/* <SidebarGroupLabel>SKILLZY</SidebarGroupLabel> */}
                <SidebarGroupContent>
                <SidebarMenu>
                {navList.map((link) => (
  <SidebarMenuItem key={link.title}>
    <SidebarMenuButton asChild>
      <a
        className="cursor-pointer flex items-center space-x-2  p-2 rounded-lg"
        onClick={() => navigate(link.url)}
      >
        <link.icon className="w-5 h-5 " />
        <span className="text-lg text-center bg-[var-(--button-bg)] hover:bg-[var-(--button-bg)]">
          {link.title}
        </span>
      </a>
    </SidebarMenuButton>
  </SidebarMenuItem>
))}

                </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
        {/* End Content */}

        {/* Footer */}
        <SidebarFooter>
            <SidebarMenu>
                <SidebarMenuItem>
                <ModeToggle/>
                {userLogged.isLogged ? 
                <DropdownMenu>
                    {/* UserLogged */}
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton>
                            <User2 /> {userLogged.fName + " " + userLogged.lName}
                            <ChevronUp className="ml-auto" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                    side="top"
                    className="w-[--radix-popper-anchor-width] p-2 rounded-xl bg-[var(--dropdown-bg)]"
                    >
                        <DropdownMenuItem className="dropdown-bg-hover p-2 pl-4 rounded-xl cursor-pointer">
                            <span onClick={() => navigate('/profile')}>Account</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="dropdown-bg-hover p-2 pl-4 rounded-xl cursor-pointer">
                            <span>Billing</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="dropdown-bg-hover p-2 pl-4 rounded-xl cursor-pointer"
                        onClick={handleSignOut}
                        >
                            <span>Sign out</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                :
                <SidebarMenu>
                {navUser.map((link) => (
                    <SidebarMenuItem key={link.title}>
                        <SidebarMenuButton asChild>
                        <a className="cursor-pointer"
                        onClick={() => navigate(link.url)}
                        >
                            <link.icon />
                            <span>{link.title}</span>
                        </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
                </SidebarMenu>
                }
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
        {/* End Footer */}
    </Sidebar>
    )
}