"use client";

import { Button } from "./ui/button";


export default function Header() {
    return (
        <header className="bg-[#0d47a1] text-white flex justify-between items-center py-3 px-6 shadow-md rounded-xl">
            <h1 className="text-lg font-semibold tracking-wide">SMEB - Gestión Biomédica</h1>
            <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-red-500 rounded-full text-xs flex items-center justify-center font-bold">3</div>
                <div className="flex items-center bg-white text-[#1565c0] px-3 py-1 rounded-lg shadow-sm">TC</div>
                    <span className="text-sm font-medium">Carlos Perez</span>
                    <Button variant="secondary" className="text-primary">
                    Cerrar
                    </Button>
            </div>
        </header>
    );
}