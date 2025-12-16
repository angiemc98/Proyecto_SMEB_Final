"use client";

import { Button } from "./ui/button";


export default function Header() {
    return (
        <header className="bg-[#0d47a1] text-white flex justify-between items-center py-3 px-6 shadow-md rounded-xl">
            <h1 className="text-lg font-semibold tracking-wide">SMEB - Gestión Biomédica</h1>
            <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-red-500 rounded-full text-xs flex items-center justify-center font-bold">3</div>
                    <Button onClick={() => window.open("/auth/login", "_self")} className="bg-white text-[#0d47a1] px-3 py-1 rounded-full shadow-sm font medium hover:bg-red">CP</Button>
            </div>
        </header>
    );
}