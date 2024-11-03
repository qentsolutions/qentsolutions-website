import Footer from "./components/footer";
import { Navbar } from "./components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex items-center justify-center mb-14">
        <Navbar />
      </div>

      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
