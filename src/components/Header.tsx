"use client"
import Link from "next/link"
import Container from "./ui/container"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BiMenu } from "react-icons/bi";
import { useTheme } from "next-themes"
import { BsSun, BsMoonStars } from "react-icons/bs";


export default function Header() {
    
    const { theme, setTheme } = useTheme();
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
                        <Button
                            variant="ghost"
                            size="icon"
                            aria-label="Toggle Theme"
                            className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-items-center sm:justify-center"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        >
                            <BsSun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <BsMoonStars className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle Theme</span>
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    );
};