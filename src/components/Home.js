import useAuth from "../hooks/useAuth";
import Branches from "./Branches";
import Gallery from "./Gallery";
import Products from "./Products";
import Reviews from "./Reviews";

import TopBanner from "./TopBanner";

const Home = () => {
    const { user } = useAuth();
    return (
        <div>
            <TopBanner></TopBanner>
            <Products></Products>
            <Reviews></Reviews>
            <Branches></Branches>
        </div>
    )
}
export default Home;