import ContactUs from "../Components/contactus";
import { Footer } from "../Components/footer";
import { Header } from "../Components/header";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactUs />
      <Footer />
    </main>
  );
}
