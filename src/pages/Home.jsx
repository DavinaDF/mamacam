import Banner from "../components/Banner";
import Info from "../components/Info";
import MenuJour from "../components/MenuDuJour";
import homeInfo from "../data/homeInfo.json";
import imageCantine from "../assets/images/cantine.jpg";
import imageEcoR from "../assets/images/ecoresponsable.jpg";
// import imageVG from "../assets/images/VG.jpg";

const Home = () => {
    return (
        <div className="home">
            <Banner />
            <div className="container">
                <div className="home-left">
                    <Info 
                    title={"Cantine écoresponsable"} 
                    subtitle={"Sur place ou à emporter"}
                    items={homeInfo}
                    />
                    <div className="social-link">
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-solid fa-envelope"></i>
                        <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="image-container">
                        <img src={imageCantine} alt="Photo d'un plat avec la légende Cantine"/>
                        <img src={imageEcoR} alt="Photo d'un plat avec la légende Ecoresponsable"/>
                        {/* <img src={imageVG} alt="Photo d'un gateau avec café avec la légende Végétarienne"/> */}
                    </div>
                </div>
                <div className="home-right">
                    <MenuJour/>
                </div>
            </div>
        </div>
    );
};

export default Home;