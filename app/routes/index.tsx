export default function Index () {
  return (
    <div className={"max-w-lg mx-auto pt-10"}>
      {/* Card design */}
      <div>
        <div className={"flex justify-between p-1 border border-b-0 border-black bg-rose-700 text-white"}>
          <div className={"flex-1 font-bold text-lg"}>What is 4Chan?</div>
          <div>Header Options</div>
        </div>
        <div className={"border border-t-0 border-black p-1 bg-white"}>
          <p>
            4chan is a simple image-based bulletin board where anyone can post comments and share images. There are boards dedicated to a variety of
            topics, from Japanese animation and culture to videogames, music, and photography. Users do not need to register an account before
            participating in the community. Feel free to click on a board below that interests you and jump right in! Be sure to familiarize
            yourself with the Rules before posting, and read the FAQ if you wish to learn more about how to use the site.
          </p>
        </div>
      </div>
    </div>
  );
}
