
import Bio from "./components/Bio";
import Hero from "./components/Hero";
import PopularProduct from "./components/PopularProduct";
import ProductGrid from "./components/ProductGrid";
import SignupSection from "./components/SignupSection";
import TrustedBrand from "./components/common/TrustedBrand";





export default function Home() {
  return (
    <div>
     <Hero />
     <TrustedBrand/>
     <ProductGrid />
     <PopularProduct/>
     <SignupSection /> 
     <Bio />
    
    </div>
  );
}
