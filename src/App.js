import './App.css';

function App() {
  return (
    <>
      <header>
        <nav>
          <img alt="Little Lemon Logo" src="" />
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <a href="/reservations">Reserve a Table</a>
        </section>

        <section className="specials">
          <h1>This week specials!</h1>
          <a href="/menu">Online Menu</a>
          <article className="card">
            <img alt="Greek Salad" src="" />
            <h2>
              Greek Salad
              <span className="price">12.34$</span>
            </h2>
            <p>
              The famous Greek salad of crispy lettuce, peppers, olives and our
              Chicago styled feta cheese, garnished with crunchy garlic,
              rosemary croutons.
            </p>
          </article>
        </section>

        <section className="testimonials">
          <h1>What you say about us</h1>
          <article className="card-testimonial">
            <img alt="Rating" src="" />
            <img alt="user name photo" src="" />
            <h2>user name</h2>
            <p>So yummy yum yum in my tummy</p>
          </article>
        </section>

        <section className="about-us">
          <h1>About us</h1>
          <p>
            Little Lemon is a Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
            pretium quis, sem. Nulla consequat massa quis enim. Donec pede
            justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
            justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
            dictum felis eu pede mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
            tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
            ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat
          </p>
          <img alt="the team" src="" />
        </section>
      </main>

      <footer>
        <img alt="footer logo" src="" />
        <section className="Doormat">
          <h2>Quick links</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </section>
        <section className="Contact">
          <h2>Find us</h2>
          <p>Phone Number</p>
          <p>Address</p>
          <p>Email</p>
        </section>
        <section className="Social">
          <h2>Social media links</h2>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </section>
      </footer>
    </>
  );
}

export default App;
