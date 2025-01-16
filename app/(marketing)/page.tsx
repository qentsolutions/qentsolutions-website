import Hero from "./components/hero";
import Problem from "./components/problem";
import FeaturesAccordion from "./components/feature-resume";
import FeatureDesign from "./components/feature-design";
import CTA from "./components/cta";
import { FeatureCarousel } from "./components/feature-carousel";
import Stats from "./components/stats"
import { FeatureBento } from "./components/feature-bento";

const MarketingPage = () => {

  return (
    <div className="mt-14 ">
      <Hero />
      <Stats />
      <FeatureDesign />
      <Problem />
      <FeaturesAccordion />
      <CTA />
    </div>
  );
};

export default MarketingPage;
