import Footer from "../components/footer";
import NavBar from "../components/navbar";

export default function Page() {
  return (
    <>
      <NavBar />
          <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
      <div className="main-container">
      <div className="intro">
      I always invented stories, and lacking better methods to tell them I have
      deiced to write some of them down. I mostly write silly sci-fi and surreal
      stories, both in italian and english, but you might find also a couple of
      more introspective and realistic ones, if that's your cup of tea.
      </div>
      </div>
      <Footer />
      </div>
    </>
  );
}
