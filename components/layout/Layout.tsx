import type { ReactNode } from "react";
import { Header } from './header/Header';

type LayoutProps = {
    readonly children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return(
        <>
            <Header/>
            {children}
        </>
    )
}

export default Layout;