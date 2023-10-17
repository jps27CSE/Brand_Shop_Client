import Support from "../Support/Support";
import AllProducts from "./AllProducts/AllProducts";
import Banner from "./Banner/Banner";
import BrandsDetails from "./BrandsDetails/BrandsDetails";

const Home = () => {
  return (
    <div>
      <Banner />
      <BrandsDetails />
      <AllProducts />
      <Support />
    </div>
  );
};

export default Home;
