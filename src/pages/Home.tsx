import Ads from "../components/Ads";
import Blog from "../components/Blog";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import UserRange from "../components/UserRange";

export default function Home() {
  return (
    <div className="p-4 space-y-6 bg-white">
      
      <Hero />
      <Stats />
      <UserRange />
      <Ads />
      <Blog />
    </div>
  );
}
