function SpecialsSection() {
  return (
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
          Chicago styled feta cheese, garnished with crunchy garlic, rosemary
          rosemary croutons.
        </p>
      </article>
    </section>
  );
}

export default SpecialsSection;
