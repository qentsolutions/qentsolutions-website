import Hero from "./components/hero";
import FeaturesAccordion from "./components/feature-resume";
import CTA from "./components/cta";
import Stats from "./components/stats"
import Problem from "./components/problem";
import { FeatureBentoGrid } from "./components/bento-grid";

const MarketingPage = () => {

  return (
    <div className="mt-14">
      <Hero />
      <Stats />
      <FeatureBentoGrid />
      <Problem />
      <FeaturesAccordion />
      <CTA />
    </div>
  );
};

export default MarketingPage;
