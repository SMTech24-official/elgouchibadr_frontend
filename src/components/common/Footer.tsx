'use client';

import Image from 'next/image';
import Link from 'next/link';
import footerLogo from '@/assets/footerLogo.png'
import { FaYoutube, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="py-6 border-t border-gray-200 text-center">
            <div className="container mx-auto px-4">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    {/* Logo */}
                    <div className="w-[307px] h-[60px] space-x-2">
                        <Image src={footerLogo} width={307} height={60} alt="logo" />
                        {/* <span className="text-xl font-semibold">Alma Atma <span className="text-yellow-500">Network</span></span> */}
                    </div>

                    {/* Navigation Links */}
              

                    {/* Social Icons */}
                    <div className="flex space-x-4 mt-4 lg:mt-0">
                        <Link href="#" className="text-black hover:text-gray-700"><FaYoutube size={20} /></Link>
                        <Link href="#" className="text-black hover:text-gray-700"><FaLinkedin size={20} /></Link>
                        <Link href="#" className="text-black hover:text-gray-700"><FaTwitter size={20} /></Link>
                        <Link href="#" className="text-black hover:text-gray-700"><FaInstagram size={20} /></Link>
                        <Link href="#" className="text-black hover:text-gray-700"><FaFacebook size={20} /></Link>
                        <Link href="#" className="text-black hover:text-gray-700"><FaTiktok size={20} /></Link>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-6  border-gray-200 pt-2 flex flex-col lg:flex-row justify-between items-center">
                    <nav className="flex flex-wrap justify-center gap-6 mt-4 lg:mt-0">
                        <Link href="/find-mentors" className="hover:underline">Find Mentors</Link>
                        <Link href="/become-mentor" className="hover:underline">Become a Mentor</Link>
                        <Link href="/about-us" className="hover:underline">About Us</Link>
                        <Link href="/community" className="hover:underline">Community</Link>
                        <Link href="/faqs" className="hover:underline">FAQs</Link>
                    </nav>
                    <div className="flex space-x-6 mt-2 lg:mt-0">
                        <Link href="/contact" className="underline">Contact us</Link>
                        <Link href="/privacy-policy" className="underline">Privacy Policy</Link>
                        <Link href="/terms-of-use" className="underline">Terms of use</Link>
                    </div>
                </div>
                    <p className="text-sm text-black-600 pt-5">Copyright 2025 - your website</p>
            </div>
        </footer>
    );
};

export default Footer;
