"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Check } from "lucide-react";

interface FeatureCardProps {
    title: string;
    subtitle: string;
    color: string;
    image: string;
    features?: string[];
    isRecommended?: boolean;
}

export function FeatureCard({ title, subtitle, color, image, features, isRecommended }: FeatureCardProps) {
    return (
        <Card className="snap-start flex-none w-[400px] h-[400px] rounded-3xl overflow-hidden group relative">
            <div className={`h-full w-full ${color} transition-all duration-300 relative`}>
                {/* Default View */}
                <div className="absolute inset-0 p-8 flex flex-col transition-opacity duration-300 group-hover:opacity-0">
                    <div className="flex items-start gap-2 text-white/80 mb-4">
                        <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
                            {subtitle === "Work Management" && "⚡️"}
                            {subtitle === "CRM" && "📊"}
                            {subtitle === "Service" && "🛠"}
                        </div>
                        <span className="text-sm">{subtitle}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-auto">{title}</h3>

                    {/* Conteneur de l'image positionné en bas à droite */}
                    <div className="absolute bottom-0 right-0 w-full h-64 overflow-hidden"> {/* Ajustez la hauteur ici pour une image plus grande */}
                        <Image
                            src={image}
                            alt={title}
                            fill
                            style={{ transform: 'translate(20%, 20%)' }}

                            className="object-cover" // Utiliser object-cover pour agrandir l'image
                        />
                    </div>
                </div>

                {/* Hover View */}
                <div className="absolute inset-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/90">
                    {isRecommended && (
                        <div className="text-white/80 mb-4">
                            Produit recommandé
                        </div>
                    )}
                    <div className="flex items-start gap-2 text-white/80 mb-4">
                        <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
                            {subtitle === "Work Management" && "⚡️"}
                            {subtitle === "CRM" && "📊"}
                            {subtitle === "Service" && "🛠"}
                        </div>
                        <span>{subtitle}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-8">{title}</h3>

                    {features && features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 text-white mb-4">
                            <Check className="w-5 h-5" />
                            <span>{feature}</span>
                        </div>
                    ))}

                    <Button className="mt-8 bg-[#6366F1] hover:bg-[#5558DD] text-white rounded-full px-8">
                        Commencer
                    </Button>
                </div>
            </div>
        </Card>
    );
}
