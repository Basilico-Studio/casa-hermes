import HeroMain from "./components/hero-main";
import NavBar from "./components/nav-bar";
import PhotoGallery from "./components/photo-gallery";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroMain />
      <section className="px-5 md:px-20">
        <PhotoGallery />
      </section>
    </main>
  );
}
