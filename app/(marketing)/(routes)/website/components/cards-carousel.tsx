"use client";
import { Card, Carousel } from "@/app/(marketing)/components/apple-cards-carousel";
import Image from "next/image";
import React from "react";

export function CardsCarousel() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} layout={true} />
    ));

    return (
        <div className="w-full h-full py-20">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                Our projects </h2>
            <Carousel items={cards} />
        </div>
    );
}

const WME = () => {
    return (
        <>
            {[...new Array(3).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                            <span className="font-bold text-neutral-700">
                                The first rule of Apple club is that you boast about Apple club.
                            </span>{" "}
                            Keep a journal, quickly jot down a grocery list, and take amazing
                            class notes. Want to convert those notes to text? No problem.
                            Langotiya jeetu ka mara hua yaar is ready to capture every
                            thought.
                        </p>
                        <Image
                            src="/data-chart.png"
                            alt="Macbook mockup from Aceternity UI"
                            height="500"
                            width="500"
                            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                        />
                        <iframe
                            src="https://wme.us.com"
                            width="100%"
                            height="600px"
                            style={{ border: 'none' }}
                            title="External Site"
                        ></iframe>
                    </div>
                );
            })}
        </>
    );
};


const Blab = () => {
    return (
        <>
            {[...new Array(3).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                            <span className="font-bold text-neutral-700">
                                The first rule of Apple club is that you boast about Apple club.
                            </span>{" "}
                            Keep a journal, quickly jot down a grocery list, and take amazing
                            class notes. Want to convert those notes to text? No problem.
                            Langotiya jeetu ka mara hua yaar is ready to capture every
                            thought.
                        </p>
                        <Image
                            src="/data-chart.png"
                            alt="Macbook mockup from Aceternity UI"
                            height="500"
                            width="500"
                            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                        />
                        <iframe
                            src="https://b-lab.app"
                            width="100%"
                            height="600px"
                            style={{ border: 'none' }}
                            title="External Site"
                        ></iframe>
                    </div>
                );
            })}
        </>
    );
};

const data = [
    {
        category: "Showcase website",
        title: "Creation of showcase site : Your showcase site is much more than just an online presence. It represents your brand, highlights your values and engages your customers. Depending on your needs, we create tailor-made sites and intuitive navigation to captivate your visitors and make their experience unique. The result? A site that inspires trust, encourages engagement, and helps you gain visibility.",
        src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <WME />,
    },
    {
        category: "Website redesign",
        title: "Website redesign : Do you already have a site, but it no longer reflects your image, lacks modernity or no longer meets the expectations of your visitors? We offer you a complete overhaul to transform your site into a high-performance and attractive asset.",
        src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <Blab />,
    },



];
