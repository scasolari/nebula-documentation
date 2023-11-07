import { useConfig } from 'nextra-theme-docs'
import {BsStars} from "react-icons/bs";
import Link from "next/link";
import {Footer} from "@/components/footer";

export default {
    logo: <div style={{fontWeight: 700, display: 'flex', alignItems: 'center', gap: 10}}>
        <div>
            <BsStars size={24}/>
        </div>
        <div className="mxl-4 font-bold">
            Nebula
        </div>
    </div>,
    project: {
        link: 'https://github.com/placedv/nebula/pkgs/npm/nebula',
    },
    docsRepositoryBase: 'https://github.com/scasolari/nebula-documentation/tree/main',
    head: () => {
        const { frontMatter } = useConfig()

        return <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content={frontMatter.title || 'Nebula'} />
            <title>{frontMatter.title || 'Nebula'}</title>
        </>
    },
    // chat: {
    //     link: 'https://github.com/placedv/nebula/pkgs/npm/nebula',
    //     icon: (
    //         <img src="https://img.shields.io/github/stars/placedv/nebula?label=Stars&style=social" height={160} alt="Nebula"/>
    //     )
    // },
    nextThemes: {
        defaultTheme: 'dark'
    },
    sidebar: {
        toggleButton: true,
        defaultMenuCollapseLevel: 1
    },
    primaryHue: 240,
    primarySaturation: 30,
    footer: {
        component: Footer
    },
}
