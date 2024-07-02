import { Typography } from "@material-tailwind/react";
import { a } from "../../../dist/_astro/index.919b8666";

const partenaires = [
  {
    logo: "public/partenaires/Africtivistes.svg",
    name: "AfricTivistes",
    href: "https://www.africtivistes.com/"
  },
  {
    logo: "public/partenaires/AfEONET.jpg",
    name: "AfEONET",
    href: "https://acfim.org/afeonet/"
  },
  {
    logo: "public/partenaires/E-HORN.jpg",
    name: "E-HORN",
    href: "https://ehorn.org/"
  },
  {
    logo: "public/partenaires/EPD.png",
    name: "EPD",
    href: "https://epd.eu/"
  },
  {
    logo: "public/partenaires/ESN-SA.jpg",
    name: "ESN-SA",
    href: "https://www.esn-sa.org/"
  },
  {
    logo: "public/partenaires/WAEON.png",
    name: "WAEON",
    href: "https://www.waeon.org/"
  },
  {
    logo: "public/partenaires/ZESN.png",
    name: "ZESN",
    href: "https://www.zesn.org.zw/"
  }
];


export function LogoSectionOne() {
  return (
    <section id="partenaire" className="py-8 px-8 lg:py-20">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Typography variant="h2">Partenaires</Typography>
        <Typography>
          Ce projet, financé par l’Union européenne, est mis en oeuvre par un consortium constitué de réseaux d’observation électorale et de soutien à la démocratie: AfricTivistes, Democracy Reporting International (DRI), le Partenariat européen pour la démocratie (EPD), Réseau africain d’observation des élections (AfEONET), Réseau de soutien électoral pour l’Afrique australe (ESN-SA) ; le Réseau des observateurs électoraux de l’Est et de la Corne de l’Afrique (E-HORN),et le Réseau des observateurs électoraux ouest-africain (WAEON)

        </Typography>
      </div>
      <div className="container mx-auto text-center">
        <div className="flex flex-wrap items-center justify-center gap-8">
          {partenaires.map((partenaire) => (
            <a href={partenaire.href} target="_blank">
              <img
              key={partenaire.name}
              src={partenaire.logo}
              alt={partenaire.name}
              className="w-40"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoSectionOne;
