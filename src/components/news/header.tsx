import React from "react";
import {
  Button,
  Typography,
  Card,
  CardHeader,
  CardBody,
  Carousel
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../defaultNavbar";
import { plainify } from "../../utils/textConverter";

export function HeroSectionTwo({une}) {

  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-full w-screen place-items-center bg-white px-8 pt-28">
        <div className="container mx-auto grid items-center">
        <Carousel className="rounded-xl" autoplay={true}>
        {une.map((post, index) => (
        <Card key={index} className="w-full lg:flex-row">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 sm:w-full lg:w-3/5 shrink-0 rounded-r-none"
            >
                <img
                src={post.data.image}
                alt="card-image"
                className="sm:h-64 w-full lg:h-96 object-cover"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                startups
                </Typography>
                <Typography variant="h3" color="blue-gray" className="mb-2">
                {post.data.titre}
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                {plainify(
                post.body
                  ?.replace(/[*>#]/g, "")
                  .slice(0, Number(200))
                )}
                </Typography>
                <a href={post.slug} className="inline-block">
                <Button variant="text" className="flex items-center gap-2">
                    Learn More
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                    </svg>
                </Button>
                </a>
            </CardBody>
        </Card>))}
        </Carousel>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSectionTwo;
