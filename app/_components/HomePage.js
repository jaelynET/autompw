import Banner from "../_components/Banner";
import Footer from "../_components/Footer";
// import { useCart } from "./CartContext";

import Reviews from "./Reviews";

import BestSellersList from "./BestSellersList";
import Feature1 from "./Feature1";
import LimitedDealsList from "./LimitedDealsList";
import Feature2 from "./Feature2";
import UnderX from "./UnderX";
import ReadyToShip from "./ReadyToShip";

import UnderXList from "./UnderXList";

async function HomePage() {
  return (
    <div className=" ">
      <div className="w-full mb-14">{/* <Banner /> */}</div>
      <section className="mb-14 ">
        <h3 className="font-bold mb-5 ml-4">Most Chosen by Homeowners</h3>
        <BestSellersList />
      </section>
      <section className="mb-8">
        <Feature2 />
      </section>
      <section className=" mb-14">
        <h3 className="font-bold mb-5 ml-4">High Quality Tubs Under $1000</h3>
        <UnderXList />
      </section>

      {/* <section className="mb-3">
        <Feature1 comfortTubs={comfortTubs} />
      </section> */}

      {/*   
    //   <section className="mb-20">
    //     <BestSellers />
    //   </section> 
    //  <section>
    //     <Footer />
    //   </section>  */}
    </div>
  );
}

export default HomePage;
