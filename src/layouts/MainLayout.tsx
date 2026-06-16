import type { ReactNode } from "react";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

import "./MainLayout.css";

interface MainLayoutProps {
    children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="layout">

            <Header />

            <div className="layout__content">

                <Sidebar />

                <main className="layout__main">
                    {children}
                </main>

            </div>

        </div>
    );
}