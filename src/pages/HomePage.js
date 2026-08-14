import CallToAction from "../components/CallToAction";
import Chicago from "../components/Chicago";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";

function HomePage() {
  return (
    <main className="main">
      <CallToAction />
      <Specials/>
      <Testimonials/>
      <Chicago/>
    </main>
  );
}

export default HomePage;