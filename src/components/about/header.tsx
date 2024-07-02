import React from "react";
import {
  Button,
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../defaultNavbar"
import {
  ArrowSmallRightIcon,
  ArrowDownRightIcon
} from "@heroicons/react/24/outline";

export function HeroSectionTwo() {
 
  return (
    <ThemeProvider>
      <Navbar />
      <section id="projet" className="py-10 px-4">
      
      <header className="h-full w-screen place-items-center bg-white px-8 py-28">
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <div className="mb-8 inline-flex items-center rounded-lg border border-dark/30 py-1 pl-1 pr-3">
              <Typography
                color="blue"
                variant="small"
                className="!flex mr-3 !items-center !font-semibold"
              >
                Cartographie Citoyenne des Élections en Afrique
                <ArrowDownRightIcon
                  className="ml-1.5 h-4 w-4"
                  strokeWidth={3}
                />
              </Typography>
            </div>
            <Typography
              variant="h1"
              color="red"
              className="mb-8 leading-tight lg:text-6xl"
            >
              Valoriser les initiatives de la société civile
            </Typography>
            <Typography variant="lead" className="lg:pr-20 text-blue-gray-800">
              <b>AHEAD Africa</b>  est un projet panafricain de près  de quatre ans (2024-2027) axé sur les multiples facettes du cycle électoral sur le continent. Il vise à donner à la société civile africaine, y compris aux observateurs citoyens, les moyens de renforcer les systèmes et processus électoraux, afin de contribuer à l’amélioration de l’intégrité électorale dans les États membres de l’Union africaine par la renforcement de capacités, la production de connaissances et le suivi, la collaboration et la mise en réseau et le plaidoyer.
            </Typography>
            <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button color="dark" className="flex items-center">
                <img
                  src="logos/logo-ios.svg"
                  alt="ios"
                  className="-mt-1 mr-1.5 h-6 w-6"
                />
                Download Ios
              </Button>
              <Button color="dark" className="flex items-center">
                <img
                  src="logos/logo-android.svg"
                  alt="ios"
                  className="-mt-0.5 mr-1.5 h-6 w-6"
                />
                Download Android
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex">
            <img src="logo_AHEAD.png" alt="iphone" className="max-w-md rounded-3xl ml-auto" />
          </div>
        </div>
      </header>
      </section>
    </ThemeProvider>
  );
}

export default HeroSectionTwo;
