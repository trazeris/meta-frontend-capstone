import './AboutUs.styles.css';

import JPGAdrian from '../../assets/adrian.jpg';
import JPGMario from '../../assets/mario.jpg';

function AboutUsSection() {
  return (
    <section className="about-us">
      <h1>About us</h1>
      <p>
        Little Lemon is a Lorem ipsum dolor sit amet, consectetuer adipiscing
        elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
        quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
        consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
        vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.
      </p>
      <aside className="the-team">
        <img alt="Adrian" src={JPGAdrian} />
        <img alt="Mario" src={JPGMario} />
      </aside>
    </section>
  );
}

export default AboutUsSection;
