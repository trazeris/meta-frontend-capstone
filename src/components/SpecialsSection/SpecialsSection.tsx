import './Specials.styles.css';

import SaladJPG from '../../assets/greeksalad.jpg';
import BruschettaJPG from '../../assets/bruchetta.jpg';
import LemonDessertJPG from '../../assets/lemondessert.jpg';
import DeliveryPNG from '../../assets/delivery.png';

const specials = [
  {
    image: SaladJPG,
    title: 'Greek Salad',
    price: '$12.99',
    description:
      'The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.',
  },
  {
    image: BruschettaJPG,
    title: 'Bruschetta',
    price: '$5.99',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.',
  },
  {
    image: LemonDessertJPG,
    title: 'Lemon Dessert',
    price: '$5.00',
    description:
      "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

function SpecialsSection() {
  return (
    <section className="specials">
      <header>
        <h1>This week specials!</h1>
        <a className="btn" href="/menu">
          Online Menu
        </a>
      </header>
      <article className="cards-list">
        {specials.map((special) => (
          <article key={special.title} className="card">
            <img alt={special.title} src={special.image} />
            <header>
              <h3>{special.title}</h3>
              <span className="price">{special.price}</span>
            </header>
            <p>{special.description}</p>
            <p>
              <a href="#" className="order-link">
                Order a delivery
                <img alt="delivery icon" src={DeliveryPNG} />
              </a>
            </p>
          </article>
        ))}
      </article>
    </section>
  );
}

export default SpecialsSection;
