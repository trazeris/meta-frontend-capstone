import './HeroSection.styles.css';
import restaurantFoodJpg from '../../assets/restaurantfood.jpg';

function HeroSection() {
  return (
    <section className="hero-backdrop">
      <article className="hero">
        <h1>Little Lemon</h1>
        <article>
          <div className="call-to-action">
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
          </div>
          <img alt="Restaurant food" src={restaurantFoodJpg} />
        </article>
        <a className="btn" href="/reservations">
          Reserve a Table
        </a>
      </article>
    </section>
  );
}

export default HeroSection;
