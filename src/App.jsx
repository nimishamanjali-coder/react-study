import { useState } from 'react'; //everything ustartinf use is called react hooks
import componentsImg from './assets/components.png'
import { CORE_CONCEPTS, EXAMPLES } from './data'; //named export import like this in {}
import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import TabButton from './components/TabButton';

function App() {

  const [selectedTopic, setSelectedTopic] = useState(); //must be called at top level of component function and only inside component function // setSelectedTopic willtell to reexecute this component. Thats also why we use const will be recreated everytime function executes
  //let tabContent = 'Please click a button'
  function handleSelect(selectedButton) {
    // selectedButton = 'Componnets, jsx,Props etc'
    //tabContent = selectedButton
    setSelectedTopic(selectedButton)

    console.log(selectedTopic);

  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>

          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcepts key={item.title} {...item} />
            ))}
            <CoreConcepts title={CORE_CONCEPTS[0].title} description="The Core UI building block" image={componentsImg} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />

          </ul>

        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')} isSelected={selectedTopic === 'components'}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')} isSelected={selectedTopic === 'jsx'} >JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')} isSelected={selectedTopic === 'props'}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')} isSelected={selectedTopic === 'state'}>States</TabButton>
          </menu>
          {!selectedTopic ? <p>Please select a topic.</p> : <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>}
        </section >

        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}


export default App;
