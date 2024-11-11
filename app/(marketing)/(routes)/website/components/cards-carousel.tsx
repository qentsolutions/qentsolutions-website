"use client";
import { Card, Carousel } from "@/app/(marketing)/components/apple-cards-carousel";
import { Button } from "@/components/ui/button";
import { Smartphone, Monitor, ZoomIn, ZoomOut } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CardsCarousel() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} layout={true} />
    ));

    return (
        <div className="w-full h-full py-20">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-4">
                Our Latest Projects
            </h2>
            <p className="max-w-7xl pl-4 mx-auto text-gray-600 mb-12">
                Discover how we&apos;ve helped businesses transform their digital presence
            </p>
            <Carousel items={cards} />
        </div>
    );
}

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
};

const WebsitePreview = ({ url, viewMode }: { url: string; viewMode: "desktop" | "mobile" }) => {
    const [zoom, setZoom] = useState(0.65);
    const isMobile = useIsMobile();

    return (
        <div className="space-y-4">
            {!isMobile && (
                <div className="flex justify-end gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setZoom(prev => Math.max(0.5, prev - 0.1))}
                        className="flex items-center gap-2"
                    >
                        <ZoomOut className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setZoom(prev => Math.min(1, prev + 0.1))}
                        className="flex items-center gap-2"
                    >
                        <ZoomIn className="h-4 w-4" />
                    </Button>
                    <span className="inline-flex items-center px-2 text-sm text-gray-600">
                        {Math.round(zoom * 100)}%
                    </span>
                </div>
            )}
            <div className={`relative w-full overflow-hidden ${(viewMode === "mobile" || isMobile) ? "max-w-[375px] mx-auto" : ""}`}>
                <div className={`
          bg-white rounded-lg shadow-lg overflow-hidden
          ${(viewMode === "mobile" || isMobile) ? "h-[667px]" : "h-[600px]"}
        `}>
                    <div className="w-full h-full" style={{ overflow: 'hidden' }}>
                        <div style={{
                            width: `${100 / zoom}%`,
                            height: `${100 / zoom}%`,
                            transform: `scale(${zoom})`,
                            transformOrigin: '0 0',
                        }}>
                            <iframe
                                src={url}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    border: 'none',
                                }}
                                title="Website Preview"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ViewModeToggle = ({ viewMode, onChange }: {
    viewMode: "desktop" | "mobile";
    onChange: (mode: "desktop" | "mobile") => void;
}) => {
    const isMobile = useIsMobile();

    if (isMobile) {
        return null;
    }

    return (
        <div className="flex items-center gap-2 mb-6">
            <Button
                variant={viewMode === "desktop" ? "default" : "outline"}
                size="sm"
                onClick={() => onChange("desktop")}
                className="flex items-center gap-2"
            >
                <Monitor className="h-4 w-4" />
                Desktop
            </Button>
            <Button
                variant={viewMode === "mobile" ? "default" : "outline"}
                size="sm"
                onClick={() => onChange("mobile")}
                className="flex items-center gap-2"
            >
                <Smartphone className="h-4 w-4" />
                Mobile
            </Button>
        </div>
    );
};

const ProjectContent = ({ url }: { url: string }) => {
    const isMobile = useIsMobile();
    const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");

    useEffect(() => {
        if (isMobile) {
            setViewMode("mobile");
        }
    }, [isMobile]);

    return (
        <div className="space-y-6">
            <ViewModeToggle viewMode={viewMode} onChange={setViewMode} />
            <AnimatePresence mode="wait">
                <motion.div
                    key={viewMode}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <WebsitePreview url={url} viewMode={viewMode} />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

const WME = () => {
    return (
        <div className="space-y-8">
            <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Workflow Made Easy (WME)
                </h3>
                <p className="text-gray-600 text-lg mb-8">
                    A comprehensive workflow automation platform that revolutionizes how businesses manage their processes. WME streamlines operations, enhances collaboration, and boosts productivity through intuitive interfaces and powerful automation tools.
                </p>
                <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-gray-900">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Drag-and-drop workflow builder</li>
                        <li>Real-time collaboration tools</li>
                        <li>Advanced analytics dashboard</li>
                        <li>Custom automation rules</li>
                        <li>Integration with popular business tools</li>
                    </ul>
                </div>
                <ProjectContent url="https://wme.us.com" />
            </div>
        </div>
    );
};

const Blab = () => {
    return (
        <div className="space-y-8">
            <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    B-Lab - Laboratory Management System
                </h3>
                <p className="text-gray-600 text-lg mb-8">
                    A state-of-the-art laboratory management system that transforms how research facilities operate. B-Lab combines powerful data management capabilities with an intuitive interface, making it easier for labs to focus on their research while maintaining impeccable organization.
                </p>
                <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-gray-900">Core Features:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Sample tracking and management</li>
                        <li>Equipment maintenance scheduling</li>
                        <li>Experiment documentation</li>
                        <li>Data visualization tools</li>
                        <li>Compliance management</li>
                    </ul>
                </div>
                <ProjectContent url="https://b-lab.app" />
            </div>
        </div>
    );
};

const data = [
    {
        category: "Showcase website",
        title: "WME",
        src: "/website/wme-logo.png",
        content: <WME />,
    },
    {
        category: "Showcase website",
        title: "B-Lab",
        src: "/website/blab-logo.png",
        content: <Blab />,
    }
];