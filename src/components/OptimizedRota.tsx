"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, MapPin, Car, Cross } from "lucide-react";

const STEPS = [
    {
        id: "pickup-a",
        status: "Picking up Carer A",
        target: "A",
        type: "pickup",
        coords: { x: 180, y: 220 },
    },
    {
        id: "pickup-b",
        status: "Picking up Carer B",
        target: "B",
        type: "pickup",
        coords: { x: 280, y: 140 },
    },
    {
        id: "dropoff-b",
        status: "En-route to Visit B",
        target: "Visit B",
        type: "dropoff",
        coords: { x: 420, y: 200 },
    },
    {
        id: "dropoff-a",
        status: "En-route to Visit A",
        target: "Visit A",
        type: "dropoff",
        coords: { x: 380, y: 340 },
    },
    {
        id: "pickup-c",
        status: "Picking up Carer C",
        target: "C",
        type: "pickup",
        coords: { x: 200, y: 460 },
    },
    {
        id: "dropoff-c",
        status: "En-route to Visit C",
        target: "Visit C",
        type: "dropoff",
        coords: { x: 380, y: 520 },
    },
    {
        id: "return",
        status: "All visits on schedule",
        target: "Hub",
        type: "return",
        coords: { x: 100, y: 120 },
    },
];

const HUB_COORDS = { x: 100, y: 120 };

export default function OptimizedRota() {
    const [hasMounted, setHasMounted] = useState(false);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [activeVisits, setActiveVisits] = useState<string[]>([]);
    const [completedSteps, setCompletedSteps] = useState<string[]>([]);

    useEffect(() => {
        setHasMounted(true);
        const timer = setInterval(() => {
            setCurrentStepIndex((prev) => {
                const next = (prev + 1) % (STEPS.length + 1);
                if (next === 0) {
                    // Reset loop
                    setActiveVisits([]);
                    setCompletedSteps([]);
                } else {
                    const finishedStep = STEPS[prev];
                    if (finishedStep.type === "dropoff") {
                        setActiveVisits((v) => [...v, finishedStep.target]);
                    }
                    setCompletedSteps((s) => [...s, finishedStep.id]);
                }
                return next;
            });
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    const currentStep = STEPS[currentStepIndex] || { coords: HUB_COORDS, status: "Resetting..." };
    const prevStep = currentStepIndex > 0 ? STEPS[currentStepIndex - 1] : { coords: HUB_COORDS };

    // Calculate the path points for the teal trace
    const getPathD = () => {
        let d = `M ${HUB_COORDS.x} ${HUB_COORDS.y}`;
        for (let i = 0; i < currentStepIndex; i++) {
            if (i < STEPS.length) {
                d += ` L ${STEPS[i].coords.x} ${STEPS[i].coords.y}`;
            }
        }
        return d;
    };

    const fullPathD = `M ${HUB_COORDS.x} ${HUB_COORDS.y} L 180 220 L 280 140 L 420 200 L 380 340 L 200 460 L 380 520 L ${HUB_COORDS.x} ${HUB_COORDS.y}`;

    if (!hasMounted) return <div className="w-full aspect-[4/5] md:aspect-square bg-[#1a202c] rounded-3xl overflow-hidden border border-white/10" />;

    return (
        <div className="relative w-full aspect-[4/5] md:aspect-square bg-[#1a202c] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Background Grid */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `radial-gradient(#4a5568 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                }}
            />

            <div className="absolute inset-0 p-8">
                <svg viewBox="0 0 500 600" className="w-full h-full">
                    {/* Static Route Background */}
                    <path
                        d={fullPathD}
                        fill="none"
                        stroke="#4a5568"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        className="opacity-30"
                    />

                    {/* Glowing Animated Trace */}
                    <motion.path
                        d={getPathD()}
                        fill="none"
                        stroke="#4fd1c5"
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5 }}
                        style={{ filter: "drop-shadow(0 0 8px #4fd1c5)" }}
                    />

                    {/* Hub */}
                    <g transform={`translate(${HUB_COORDS.x - 15}, ${HUB_COORDS.y - 15})`}>
                        <rect width="30" height="30" rx="8" fill="#2d3748" stroke="#4a5568" strokeWidth="2" />
                        <Home className="w-5 h-5 x-1 y-1 text-white opacity-80" x="5" y="5" />
                        <text x="15" y="45" textAnchor="middle" className="text-[10px] fill-gray-400 font-bold uppercase tracking-wider">Driver Hub</text>
                    </g>

                    {/* Pickup Points */}
                    {[
                        { id: "A", x: 180, y: 220 },
                        { id: "B", x: 280, y: 140 },
                        { id: "C", x: 200, y: 460 },
                    ].map((point) => {
                        const isPickedUp = completedSteps.includes(`pickup-${point.id.toLowerCase()}`);
                        const isActive = currentStep.target === point.id && currentStep.type === "pickup";

                        return (
                            <g key={point.id} transform={`translate(${point.x - 12}, ${point.y - 12})`}>
                                <motion.circle
                                    r="12"
                                    cx="12"
                                    cy="12"
                                    fill="#2d3748"
                                    stroke={isPickedUp ? "#68d391" : "#4a5568"}
                                    strokeWidth="2"
                                    animate={isActive ? {
                                        scale: [1, 1.3, 1],
                                        stroke: ["#4a5568", "#68d391", "#4a5568"],
                                        fill: ["#2d3748", "#1a202c", "#2d3748"]
                                    } : {}}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                />
                                <text x="12" y="16" textAnchor="middle" className="text-[10px] fill-white font-bold">{point.id}</text>
                            </g>
                        );
                    })}

                    {/* Visit Points */}
                    {[
                        { id: "Visit A", x: 380, y: 340 },
                        { id: "Visit B", x: 420, y: 200 },
                        { id: "Visit C", x: 380, y: 520 },
                    ].map((point) => {
                        const isVisited = activeVisits.includes(point.id);
                        const isTarget = currentStep.target === point.id && currentStep.type === "dropoff";

                        return (
                            <g key={point.id} transform={`translate(${point.x - 15}, ${point.y - 15})`}>
                                <motion.rect
                                    width="30"
                                    height="30"
                                    rx="6"
                                    fill="#2d3748"
                                    stroke={isVisited ? "#68d391" : "#4a5568"}
                                    strokeWidth="2"
                                    animate={
                                        isTarget
                                            ? { fill: ["#2d3748", "#68d391", "#2d3748"], scale: [1, 1.1, 1] }
                                            : isVisited
                                                ? {
                                                    opacity: [0.7, 1, 0.7],
                                                    stroke: ["#68d391", "#4fd1c5", "#68d391"],
                                                    filter: ["drop-shadow(0 0 2px #4fd1c5)", "drop-shadow(0 0 8px #4fd1c5)", "drop-shadow(0 0 2px #4fd1c5)"]
                                                }
                                                : {}
                                    }
                                    transition={{ repeat: Infinity, duration: 2 }}
                                />
                                <Cross className={`w-4 h-4 x-1 y-1 ${isVisited ? "text-brand-teal" : "text-gray-500"}`} x="7" y="7" />
                                <text x="15" y="45" textAnchor="middle" className="text-[10px] fill-gray-400 font-bold uppercase tracking-widest">{point.id}</text>
                            </g>
                        );
                    })}

                    {/* Vehicle Icon */}
                    <motion.g
                        animate={{ x: currentStep.coords.x, y: currentStep.coords.y }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                    >
                        <foreignObject x="-16" y="-16" width="32" height="32">
                            <motion.div
                                className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.4)] border-2 border-[#4fd1c5] pointer-events-none"
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ repeat: Infinity, duration: 4 }}
                            >
                                <Car className="w-5 h-5 text-[#1a202c]" />
                            </motion.div>
                        </foreignObject>
                    </motion.g>
                </svg>
            </div>

            {/* Status Overlay */}
            <div className="absolute top-6 left-6 z-10 font-[Inter,sans-serif]">
                <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-5 rounded-2xl min-w-[240px] shadow-2xl">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="relative">
                            <div className="w-2 h-2 rounded-full bg-[#68d391] animate-ping absolute" />
                            <div className="w-2 h-2 rounded-full bg-[#68d391] relative" />
                        </div>
                        <span className="text-[10px] text-brand-teal font-black uppercase tracking-[0.2em]">Operational Pulse</span>
                    </div>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep.status}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className="flex flex-col"
                        >
                            <span className="text-white text-lg font-bold tracking-tight">
                                {currentStep.status}
                            </span>
                            <span className="text-gray-500 text-[10px] uppercase font-bold mt-1 tracking-widest leading-none">
                                {currentStepIndex === STEPS.length ? "All visits on schedule" : `Destination: ${currentStep.target}`}
                            </span>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Optimized Badge */}
            <div className="absolute bottom-6 right-6 font-[Inter,sans-serif]">
                <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="flex items-center gap-3 bg-brand-teal/10 backdrop-blur-md border border-brand-teal/30 px-5 py-3 rounded-2xl shadow-lg"
                >
                    <div className="w-2 h-2 rounded-full bg-brand-teal shadow-[0_0_10px_#4fd1c5]" />
                    <span className="text-xs font-black text-brand-teal uppercase tracking-[0.15em]">Real-time Optimization</span>
                </motion.div>
            </div>
        </div>
    );
}
