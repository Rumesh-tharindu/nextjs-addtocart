import CategoryCard from "./components/categoryCard/CategoryCard";
import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <section className="section-top section-bottom">
        <div className="container">
          <div className="smallGrid">
            <CategoryCard image="https://imgur.com/uKQqsuA.png" name="Xbox" />
            <CategoryCard image="https://imgur.com/3Y1DLYC.png" name="PS5" />
            <CategoryCard image="https://imgur.com/Dm212HS.png" name="Switch" />
          </div>
        </div>
      </section>
    </div>
  );
}
