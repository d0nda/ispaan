import Link from "next/link"
import Container from "./ui/container"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BiMenu } from "react-icons/bi";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import ProfileButton from "./ui/ProfileButton";



export default async function Header() {
    const session = await getServerSession(authOptions);
    //"use client" : const { data: session, status } = useSession()
    console.log("useSession Hook session object", session)

    const routes = [
        {
            id: 1,
            title: "Home",
            url: "/",
        },
        {
            id: 2,
            title: "Find Jobs",
            url: "/findjob",
        },
        {
            id: 3,
            title: "About us",
            url: "/about",
        },
        {
            id: 4,
            title: "Contact us",
            url: "/contact",
        },
    ];

    return (
        <header className="sm:flex sm:justify-between py-3 px-4">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
                    <div className="flex items-center">
                        <Sheet>
                            <SheetTrigger>
                                <BiMenu className="h-6 md:hidden w-6" />
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                                <nav className="flex flex-col gap-4">
                                    {routes.map(({ id, title, url }) => (
                                        <Link
                                            key={id}
                                            href={url}
                                            className="block px-2 py-1 text-lg"
                                        >
                                            {title}
                                        </Link>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                        <Link href="/" className="ml-4 lg:ml-0">
                            {/*<Image src="/logo.svg" alt="Logo" width={130} height={230} className="h-12" />*/}
                            ISPAAN
                        </Link>
                    </div>
                    <nav className="mx-6 flex-0 items-center space-x-4 lg:space-x-6 hidden md:block">
                        {routes.map(({ id, url, title }) => (
                            <Button asChild variant="ghost" key={id}>
                                <Link
                                    href={url}
                                    className="text-sm font-medium transition-colors"
                                >
                                    {title}
                                </Link>
                            </Button>
                        ))}
                    </nav>
                    <div className="flex items-center">
                        {session && (
                            <>
                                <ProfileButton />
                            </>
                        )}
                        {/* Only show the sign in and get started links if the user is not logged in */}
                        {!session && (
                            <Button>
                                <Link href="/signin">Sign in</Link>
                            </Button>
                        )}

                    </div>
                </div>
            </Container>
        </header>
    );
};