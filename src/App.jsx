import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <AccordionItem
            id="experience"
            className="accordion-item"
            title="We got 20 years of experience"
          >
            <article>
              <p>You can&apos;t go wrong with us</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                quo architecto quia facere, laboriosam id perferendis cumque
                voluptatibus ipsam et, ratione harum dignissimos eveniet libero
                eius quisquam quibusdam dolore repellendus.
              </p>
            </article>
          </AccordionItem>
          <AccordionItem
            id="local-guides"
            className="accordion-item"
            title="We're working with local guides"
          >
            <article>
              <p>We are not doing this along from our office.</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                quo architecto quia facere, laboriosam id perferendis cumque
                voluptatibus ipsam et, ratione harum dignissimos eveniet libero
                eius quisquam quibusdam dolore repellendus.
              </p>
            </article>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
