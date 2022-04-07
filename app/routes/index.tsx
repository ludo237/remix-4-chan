import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Card from "~/components/card/Card";
import CardBody from "~/components/card/CardBody";
import CardHeader from "~/components/card/CardHeader";

export const loader: LoaderFunction = async () => {
  const response = await fetch("https://a.4cdn.org/boards.json", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();

  return { boards: json?.boards };
};

export default function Index () {
  const loaderData = useLoaderData();

  return (
    <div className={"max-w-2xl mx-auto pt-10 space-y-16"}>
      <Card>
        <CardHeader color={"red"} text={"What is 4Chan?"} />
        <CardBody>
          <p>
            4chan is a simple image-based bulletin board where anyone can post comments and share images. There are boards dedicated to a variety of
            topics, from Japanese animation and culture to videogames, music, and photography. Users do not need to register an account before
            participating in the community. Feel free to click on a board below that interests you and jump right in! Be sure to familiarize
            yourself with the Rules before posting, and read the FAQ if you wish to learn more about how to use the site.
          </p>
        </CardBody>
      </Card>

      <Card>
        <CardHeader color={"orange"} text={"Boards"} />
        <CardBody>
          {loaderData?.boards.map((b, index) =>
            <div key={index}>{b.title}</div>,
          )}
        </CardBody>
      </Card>

      <Card>
        <CardHeader color={"orange"} text={"Popular Threads"} />
        <CardBody>
          List of boards
        </CardBody>
      </Card>
    </div>
  );
}
