import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo from '@/assets/logoNav.png'
import { FaRegUser } from "react-icons/fa";


const Navbar = () => {
    const [open, setOpen] = useState<boolean>(false); // Ensure correct type

    return (
        <div className="bg-[#f3fdf7] shadow-md">
            <div className="container py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href={'/'} className="w-[170px] h-[40px]">
                        <Image src={logo} width={170} height={40} alt="logo-img" className="w-full h-full" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex gap-10 items-center">
                        <Link href="/" className="relative group hover:text-primary">
                            For Student
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="/" className="relative group hover:text-primary">
                            For Mentor
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="/" className="relative group hover:text-primary">
                            Job
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="/" className="relative group hover:text-primary">
                            Community
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </div>


                    {/* Actions */}
                    <div className="hidden lg:flex space-x-3">
                        <Button className="bg-primary hover:bg-secondary text-white px-5 py-[14px]">Donate Now</Button>
                        <Button variant="outline" className="px-5 py-3"><FaRegUser /> Log in</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
                                    <Menu className="w-6 h-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="p-6" onInteractOutside={() => setOpen(false)}>
                                <div className="flex flex-col space-y-6">
                                    <Link href="/" onClick={() => setOpen(false)}>For Student</Link>
                                    <Link href="/" onClick={() => setOpen(false)}>For Mentor</Link>
                                    <Link href="/" onClick={() => setOpen(false)}>Job</Link>
                                    <Link href="/" onClick={() => setOpen(false)}>Community</Link>
                                    <Button className="bg-primary hover:bg-secondary text-white w-full py-3" onClick={() => setOpen(false)}>Donate Now</Button>
                                    <Button variant="outline" className="w-full py-3" onClick={() => setOpen(false)}>Log in</Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
