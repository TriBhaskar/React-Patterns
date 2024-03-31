import Place from "./Place";
import Accordion from "./components/Accordion/Accordion";
import SearchableList from "./components/SearchableList/SearchableList";
// import AccordionItem from "./components/Accordion/AccordionItem";
import PLACES from "./places";
function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item id="experience" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              We got 20 years of experience
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
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
            <Accordion.Title className="accordion-item-title">
              We're working with local guides
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
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
      <section>
        <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
          {(item) => <Place key={item.id} item={item} />}
        </SearchableList>
        <SearchableList
          items={["item1", "item2", "item3", "item4", "item5"]}
          itemKeyFn={(item) => item}
        >
          {(item) => item}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
