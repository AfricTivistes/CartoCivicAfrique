import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import {
  BoltIcon,
  ArrowsPointingOutIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

interface IconPropsType {
  children: React.ReactNode;
}

function Icon({ children }: IconPropsType) {
  return (
    <div className="mb-6 grid h-12 w-12 place-items-center rounded-full bg-dark p-2.5 text-white shadow-md">
      {children}
    </div>
  );
}

export function FeatureSectionThree() {
  return (
    <section className="p-8">
      <div className="container mx-auto">
        <div className="mb-20 grid lg:grid-cols-2">
          <div className="lg:pr-10">
            <img
              src="https://images.unsplash.com/photo-1591189596309-8dcec8cb0493?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="background image"
              className="h-full min-h-[20rem] w-full rounded-xl object-cover"
            />
          </div>
          <div className="grid items-center py-12 px-2 lg:ml-8">
            <Icon>
              <BoltIcon color="red" className="h-6 w-6" strokeWidth={2} />
            </Icon>
            <Typography variant="h3" color="blue-gray" className="mb-4">
              L'Importance des Initiatives Civic Tech
            </Typography>
            <Typography
              variant="lead"
              className="mb-10 font-normal !text-gray-500"
            >
              Notre plateforme permettra de mettre en lumière la pertinence des initiatives civic tech
               ainsi que le rôle important qu’elles jouent dans la promotion de la démocratie et 
               dans la transparence des processus électoraux. Cette plateforme a aussi 
               pour but de <b>recenser</b>  et <b>localiser</b>  les différentes initiatives 
               d’observation citoyenne des élections en Afrique.
              <br />
              <br />
              Cette cartographie fournit des données précieuses pour montrer aux décideurs politiques et aux collectivités locales l'engagement actif de la société civile dans les questions démocratiques, électorales et citoyennes. Elle contribue à changer les perceptions et offre une base solide pour renforcer les collaborations et pérenniser ces pratiques.
            </Typography>
          </div>
        </div>
        <div className="mb-20 grid lg:grid-cols-2">
          <div className="grid items-center py-12 px-2 lg:mr-16 lg:py-20">
            <Icon>
              <ArrowsPointingOutIcon
                className="h-6 w-6"
                strokeWidth={2}
              />
            </Icon>
            <Typography variant="h3" color="blue-gray" className="mb-4">
               L'Importance des Initiatives Civic Tech
            </Typography>
            <Typography
              variant="lead"
              className="mb-10 font-normal !text-gray-500"
            >
             Notre plateforme permettra de mettre en lumière la pertinence des initiatives civic tech
               ainsi que le rôle important qu’elles jouent dans la promotion de la démocratie et 
               dans la transparence des processus électoraux
              <br />
              <br />
              <br />
              Cette cartographie fournit des données précieuses pour montrer aux décideurs politiques et aux collectivités locales l'engagement actif de la société civile dans les questions démocratiques, électorales et citoyennes.
            </Typography>
            <div className="w-max">
              <Button size="lg" color="white">
                More about us
              </Button>
            </div>
          </div>
          <div className="row-start-1 lg:row-auto lg:pl-10">
            <img
              src="/people.jpeg"
              alt="background image"
              className="h-full min-h-[20rem] w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSectionThree;
