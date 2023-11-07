import cn from "classnames";
import { ThemeSwitch } from "nextra-theme-docs";
import {BiPlanet} from "react-icons/bi";
import {BsStars} from "react-icons/bs";
import Link from "next/link";

export function FooterContent() {
    return (
        <div className="w-full" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="w-full mx-auto">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <div className="flex items-center gap-2">
                            <BsStars size={24}/> Nebula
                        </div>
                        <p className="mt-4 text-xs text-gray-500 dark:text-[#888888]">
                            Nebula &copy; {new Date().getFullYear()}. Build with &#9829; by <Link className="underline dark:text-white hover:no-underline" href="https://sergiocasolari.com" target="_blank">Sergio Casolari</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export function Footer({ menu }){
    return (
        <footer className="bottom-0 w-full">
            <hr className="dark:border-neutral-800" />
            <div className="nx-mx-auto nx-flex nx-max-w-[90rem] nx-justify-center nx-py-12 nx-text-gray-600 dark:nx-text-gray-400 md:nx-justify-start nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)]">
                <FooterContent />
            </div>
        </footer>
    );
}
