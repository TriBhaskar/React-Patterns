import Accordion from "./components/Accordion/Accordion";
// import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item id="experience" className="accordion-item">
            <Accordion.Title id="experience" className="accordion-item-title">
              We got 20 years of experience
            </Accordion.Title>
            <Accordion.Content
              id="experience"
              className="accordion-item-content"
            >
              <article>
                <p>You can&apos;t go wrong with us</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Earum quo architecto quia facere, laboriosam id perferendis
                  cumque voluptatibus ipsam et, ratione harum dignissimos
                  eveniet libero eius quisquam quibusdam dolore repellendus.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id="local-guides" className="accordion-item">
            <Accordion.Title id="local-guides" className="accordion-item-title">
              We're working with local guides
            </Accordion.Title>
            <Accordion.Content
              id="local-guides"
              className="accordion-item-content"
            >
              <article>
                <p>We are not doing this along from our office.</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Earum quo architecto quia facere, laboriosam id perferendis
                  cumque voluptatibus ipsam et, ratione harum dignissimos
                  eveniet libero eius quisquam quibusdam dolore repellendus.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
