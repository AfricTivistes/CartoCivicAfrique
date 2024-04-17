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
import {
  ArrowSmallRightIcon,
} from "@heroicons/react/24/outline";

export function HeroSectionTwo() {
 
  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-full w-screen place-items-center bg-white px-8 py-28">
        <div className="container mx-auto grid items-center">
        <Carousel className="rounded-xl" autoplay={true}>
        <Card className="w-full lg:flex-row">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 sm:w-full lg:w-3/5 shrink-0 rounded-r-none"
            >
                <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="card-image"
                className="sm:h-80 w-full lg:h-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                startups
                </Typography>
                <Typography variant="h3" color="blue-gray" className="mb-2">
                Lyft launching cross-platform service this week
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software company
                selling licenses. Yet its own business model disruption is only part
                of the story
                </Typography>
                <a href="#" className="inline-block">
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
        </Card>
        <Card className="w-full lg:flex-row">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 sm:w-full lg:w-3/5 shrink-0 rounded-r-none"
            >
                <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="card-image"
                className="sm:h-80 w-full lg:h-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                startups
                </Typography>
                <Typography variant="h3" color="blue-gray" className="mb-2">
                Lyft launching cross-platform service this week
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software company
                selling licenses. Yet its own business model disruption is only part
                of the story
                </Typography>
                <a href="#" className="inline-block">
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
        </Card>
        <Card className="w-full lg:flex-row">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 sm:w-full lg:w-3/5 shrink-0 rounded-r-none"
            >
                <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="card-image"
                className="sm:h-80 w-full lg:h-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                startups
                </Typography>
                <Typography variant="h3" color="blue-gray" className="mb-2">
                Lyft launching cross-platform service this week
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software company
                selling licenses. Yet its own business model disruption is only part
                of the story
                </Typography>
                <a href="#" className="inline-block">
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
        </Card>
        </Carousel>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSectionTwo;
