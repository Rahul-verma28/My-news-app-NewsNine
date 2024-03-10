
// import Newscard fro../../component/NewsCard/pageage";
// import NewsSection fro../../component/NewsSection/pageage";

import Newscard from "./components/newscard/page";
import Newsection from "./components/newssection/page";

export default function Home() {
  return (
    <main className=" p-10">
      {/* <Newscard/>
      <NewsSection/> */}
      <Newscard/>
      <Newsection/>
      <h1 className="font-bold text-9xl">hello rahul</h1>
    </main>
  );
}
