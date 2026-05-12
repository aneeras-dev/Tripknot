import Loader from '@/components/Loader';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Itinerary from '@/components/Itinerary';
import Explore from '@/components/Explore';
import Strangers from '@/components/Strangers';
import ExperienceGrid from '@/components/ExperienceGrid';
import HowItWorks from '@/components/HowItWorks';
import Destinations from '@/components/Destinations';
import AppShowcase from '@/components/AppShowcase';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main>
      <Loader />
      <Nav />
      <Hero />
      <Itinerary />
      <Explore />
      <Strangers />
      <ExperienceGrid />
      <HowItWorks />
      <Destinations />
      <AppShowcase />
      <FinalCTA />
      <Footer />
    </main>
  );
}
