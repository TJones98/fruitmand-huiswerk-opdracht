import './App.css'
import {useState} from "react";
import FruitCounter from "./components/FruitCounter.jsx";
import FormInputField from "./components/FormInputField.jsx";
import RadioButton from "./components/RadioButton.jsx";
import Button from "./components/Button.jsx";
import logo from "./assets/screenshot-logo.png";

function App() {

  const [strawberries, setStrawberries] = useState(0);
  const [bananas, setBananas] = useState(0);
  const [apples, setApples] = useState(0);
  const [kiwis, setKiwis] = useState(0);

  const [forename, setForename] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [postcode, setPostcode] = useState("");
  const [remark, setRemark] = useState("");
  const [deliveryFrequency, toggleDeliveryFrequency] = useState("weekly");
  const [deliveryTimeslot, toggleDeliveryTimeslot] = useState("daytime");
  const [agreeTerms, toggleAgreeTerms] = useState(false);

  function resetAllCounters() {
        setStrawberries(0);
        setBananas(0);
        setApples(0);
        setKiwis(0);
  }

  function handleSubmit(e) {
      e.preventDefault();
      console.log(`
      Voornaam: ${forename}
      Achternaam: ${surname}
      Leeftijd: ${age}
      Postcode: ${postcode}
      Opmerkingen: ${remark}
      BezorgFrequenties: ${deliveryFrequency}
      BezorgTijd: ${deliveryTimeslot}
      AlgemeneVoorwaarden: ${agreeTerms}
      `)
      console.log(`
      Bestelling:
      Aardbeien: ${strawberries}
      Bananen: ${bananas}
      Appels: ${apples}
      Kiwis: ${kiwis}`)
  }

  return (
    <>
        <img src={logo}
             className="App-logo"
             alt="Logo met de tekst: fruitmand bezorgservice: je mag toch niet naar buiten"
        />
        <section className="fruit-counters">
            <FruitCounter
                header="🍓Aardbeien"
                fruit= {strawberries}
                fruitSetter={setStrawberries}
            />
            <FruitCounter
                header="🍌Bananen"
                fruit= {bananas}
                fruitSetter={setBananas}
            />
            <FruitCounter
                header="🍏Appels"
                fruit= {apples}
                fruitSetter={setApples}
            />
            <FruitCounter
                header="🥝Kiwi's"
                fruit= {kiwis}
                fruitSetter={setKiwis}
            />
            <Button type="button" clickHandler={resetAllCounters}>Reset</Button>
        </section>
        <section className="order-form">
            <form onSubmit={handleSubmit}>
                <FormInputField
                    labelAndId="first-name-field"
                    name="Voornaam:"
                    type="text"
                    value={forename}
                    changeHandler={setForename}
                />
                <FormInputField
                    labelAndId="last-name-field"
                    name="Achternaam:"
                    type="text"
                    value={surname}
                    changeHandler={setSurname}
                />
                <FormInputField
                    labelAndId="age-field"
                    name="Leeftijd:"
                    type="number"
                    value={age}
                    changeHandler={setAge}
                />
                <FormInputField
                    labelAndId="post-code-field"
                    name="Postcode:"
                    type="text"
                    value={postcode}
                    changeHandler={setPostcode}
                />
                <label className="delivery-frequency" htmlFor="deliveryFrequency">
                    Bezorgfrequentie:
                    <select
                        name="delivery"
                        id="delivery-field"
                        value={deliveryFrequency}
                        onChange={(e) => toggleDeliveryFrequency(e.target.value)}
                    >
                        <option value="weekly">iedere week</option>
                        <option value="biweekly">om de week</option>
                        <option value="monthly">iedere maand</option>
                    </select>
                </label>
                <div className="radio-buttons">
                    <p>Bezorgtijd:</p>
                    <RadioButton
                        value="daytime"
                        displayText='Ochtend'
                        checked={deliveryTimeslot === 'daytime'}
                        onChange={(e) => toggleDeliveryTimeslot(e.target.value)}
                    />
                    <RadioButton
                        value="evening"
                        displayText="Avond"
                        checked={deliveryTimeslot === 'evening'}
                        onChange={(e) => toggleDeliveryTimeslot(e.target.value)}
                    />
                </div>
                <label className="remark-field" htmlFor="remark-field">
                    Opmerking
                    <textarea
                        name="remark"
                        id="remark-field"
                        value={remark}
                        onChange={(e) => setRemark(e.target.value)}
                        rows="5"
                        cols="30"
                    />
                </label>
                <label htmlFor="terms-and-conditions">
                    <input type="checkbox"
                           id="terms-and-conditions"
                           name="terms-and-conditions"
                           value={agreeTerms}
                           onChange={(e) => toggleAgreeTerms(e.target.checked)}
                    />
                    Ik ga akkoord met de voorwaarden
                </label>
                <Button type="submit">Verzend</Button>
            </form>
        </section>
    </>
  )
}

export default App
