import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import {
  EyeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  BoltIcon,
  FaceSmileIcon,
  LinkIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function FeatureCard({ icon, title, children }: FeatureCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-dark p-2.5 text-white">
          {icon}
        </div>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 !font-semibold"
        >
          {title}
        </Typography>
        <Typography
          className="px-8 font-normal text-gray-700"
        >
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

const features = [

  {
    icon: <FaceSmileIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Valorisation des Initiatives de la Société Civile",
    description:
      "Valoriser les initiatives de la société civile dans le cadre des processus électoraux en Afrique afin de démontrer leur pouvoir transformateur et leur capacité de mobilisation.",
  },
  {
    icon: <LinkIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Recensement et Promotion des Initiatives Jeunes",
    description:
      "Recenser et promouvoir plus de 100 initiatives de jeunes en réponse à la problématique des élections en Afrique.",
  },
  {
    icon: <HeartIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Mobilisation d'une Communauté en Ligne",
    description:
      "Mobiliser une communauté en ligne autour de ces initiatives afin de créer un réseau d'échange et d'inspiration pour l'engagement citoyen des jeunes et de la société civile.",
  },
];

export function FeatureSectionOne() {
  return (
    <section className="">
      <div className="container mx-auto text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Cette plateforme vise à:
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon, title, description }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default FeatureSectionOne;
