import { useRef, useState, useContext, useEffect } from "react";
import { APIContext } from "../context/API";
import { ResetContext } from "../context/Reset";
export default function Input() {
  const { setTip } = useContext(APIContext);
  const { reset, setReset } = useContext(ResetContext);

  const [err, setError] = useState({
    one: false,
    two: false,
  });
  const [selected, setSelected] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
  });

  const Bill = useRef();
  const CustomTip = useRef();
  const People = useRef();

  function handleSelect(num) {
    if (num === 5) {
      setSelected({ six: false });
      setSelected({ one: true });
    } else if (num === 10) {
      setSelected({ six: false });
      setSelected({ two: true });
    } else if (num === 15) {
      setSelected({ six: false });
      setSelected({ three: true });
    } else if (num === 25) {
      setSelected({ six: false });
      setSelected({ four: true });
    } else if (num === 50) {
      setSelected({ six: false });
      setSelected({ five: true });
    } else if (num === 0) {
      setSelected({ six: true });
    }

    const newTip = {
      bill: Bill.current.value,
      tip: num,
      people: People.current.value,
    };

    if (newTip.tip === 0) {
      newTip.tip = CustomTip.current.value;
    }

    if (
      (newTip.bill === 0 ||
        newTip.bill === "" ||
        newTip.tip === "" ||
        newTip.tip === undefined ||
        newTip.people === 0 ||
        newTip.people === "") === false
    ) {
      setTip(newTip);
    }
  }
  useEffect(() => {
    if (reset) {
      setSelected({
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false,
      });
      setReset(false);
    }
  }, [reset]);

  function handleInputChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    if (name === "bill" && value === "0") {
      setError({ one: true });
    } else if (name === "bill" && value !== "0") {
      setError({ one: false });
    }

    if (name === "people" && value === "0") {
      setError({ two: true });
    } else if (name === "people" && value !== "0") {
      setError({ two: false });
    }

    if (
      (Bill.current.value === "0" ||
        Bill.current.value === "" ||
        CustomTip.current.value === undefined ||
        People.current.value === "0" ||
        People.current.value === "") === false
    ) {
      setTip({
        bill: Bill.current.value,
        tip: selected.one
          ? 5
          : selected.two
          ? 10
          : selected.three
          ? 15
          : selected.four
          ? 25
          : selected.five
          ? 50
          : CustomTip.current.value,
        people: People.current.value,
      });
    }
    setReset(false);
  }

  return (
    <form className="input-form" id="tip-form">
      <article className="input-bill">
        <label>
          <p>Bill</p>
          {err.one ? <p style={{ color: "#cc846c" }}>Can't be zero</p> : ""}
        </label>
        <input
          type="number"
          placeholder="0"
          ref={Bill}
          step={0.01}
          onChange={handleInputChange}
          name="bill"
          className={err.one ? "bill error" : "bill"}
        />
      </article>
      <article id="input-tip">
        <label>Select Tip %</label>
        <div className="input-tip-buttons">
          <button
            onClick={() => handleSelect(5)}
            className={
              selected.one ? "procent-button selected" : "procent-button"
            }
            type="button"
          >
            5%
          </button>
          <button
            type="button"
            onClick={() => handleSelect(10)}
            className={
              selected.two ? "procent-button selected" : "procent-button"
            }
          >
            10%
          </button>
          <button
            type="button"
            onClick={() => handleSelect(15)}
            className={
              selected.three ? "procent-button selected" : "procent-button"
            }
          >
            15%
          </button>
          <button
            type="button"
            onClick={() => handleSelect(25)}
            className={
              selected.four ? "procent-button selected" : "procent-button"
            }
          >
            25%
          </button>
          <button
            type="button"
            onClick={() => handleSelect(50)}
            className={
              selected.five ? "procent-button selected" : "procent-button"
            }
          >
            50%
          </button>
          <input
            type="number"
            placeholder="Custom"
            ref={CustomTip}
            onSelect={() => handleSelect(0)}
            className="input-tip"
            onChange={handleInputChange}
          />
        </div>
      </article>
      <article className="input-people">
        <label>
          <p>Number of People</p>
          {err.two ? <p style={{ color: "#cc846c" }}>Can't be zero</p> : ""}
        </label>
        <input
          type="number"
          placeholder="0"
          ref={People}
          onChange={handleInputChange}
          className={err.two ? "people error" : "people"}
          name="people"
        />
      </article>
    </form>
  );
}
