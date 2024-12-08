import photoInterieur from "../assets/images/Interieur.jpg";
import photoMuffin from "../assets/images/muffin.jpg";
import photoCookie from "../assets/images/dessert-cookies.webp";

const About = () => {
  return (
    <div className="about">
      <div className="left-side">
        <div className="bloc">
          <h2>Bien manger au rythme des saisons</h2>
          <p>
            Chez MAMACAM vous trouverez une cuisine simple, goûteuse et
            généreuse à consommer sur place ou à emporter.
            <br />
            <br />
            Le menu change quotidiennement et la cuisine y est préparée à partir
            de produits frais, locaux, de saison et issus de l’agriculture
            biologique.
            <br />
            <br />
            Ici, tout le monde pourra se régaler, avec des options végétales et
            sans gluten de l’entrée au dessert.
          </p>
        </div>
        <div className="bloc">
          <h2>Partager</h2>
          <p>
            Plusieurs fois par an, pendant 15 jours, j’accueille au restaurant
            une stagiaire issue de la formation proposée par Marie Curry
            (https://mariecurry.fr/) afin de partager nos visions de la cuisine.
            <br />
            <br />
            Sur les murs du restaurant vous pouvez admirer des illustrations qui
            changent régulièrement. En effet, plusieurs fois par an, un
            vernissage a lieu pour inaugurer une nouvelle exposition qui met en
            avant une illustratrice de la région.
          </p>
        </div>
        <div className="photo-container">
          <img
            src={photoMuffin}
            alt="Photo d'un joli muffin dans une assiette"
          />
          <img src={photoCookie} alt="Photo d'un bocal de tartinade maison" />
        </div>
      </div>
      <div className="right-side">
        <img
          src={photoInterieur}
          alt="Photo de l'intérieur du restaurant MAMACAM"
        />
        <div className="bloc">
          <h2>Consommer local</h2>
          <p>
            Notre terroir et nos agriculteur.trices et producteur.trices nous
            offrent de superbes produits et chez MAMACAM je tiens à les mettre
            en valeur pour vous régaler.
            <br />
            <br />
            La totalité des fruits et légumes viennent de France métropolitaine,
            le plus souvent à moins de 300km de Bordeaux.
          </p>
        </div>
        <div className="bloc">
          <h2>Limiter les déchets</h2>
          <p>
            Tous les déchets compostables sont récupéré et géré par l’entreprise
            partenaire Bicycompost.
            <br />
            <br />
            Concernant la vente à emporter, les client.es sont invité.es à
            apporter leurs contenants réutilisables. Un supplément est compté
            pour les contenants compostables fournis sur place.
            <br />
            <br />
            Sur les tables vous trouverez des serviettes en tissu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
