import { useContext, useEffect } from "react";
import { APIContext } from "../context/API";
import { ResetContext } from "../context/Reset";

export default function Output() {
  const { tip, setTip } = useContext(APIContext);
  const { reset, setReset } = useContext(ResetContext);

  function handleReset() {
    setReset(true);
  }

  useEffect(() => {
    if (reset) {
      setTip(undefined);
    }
  }, [reset]);

  return (
    <article className="output">
      <article className="output-tip-total">
        <div className="output-tip-amount">
          <div>
            <h5>Tip Amount</h5>
            <p className="person">/ person</p>
          </div>
          <p className="tip-amount">
            $
            {tip !== undefined
              ? ((tip.bill * (tip.tip / 100)) / tip.people).toFixed(2)
              : "0.00"}
          </p>
        </div>
        <div className="output-total">
          <div>
            <h5>Total</h5>
            <p className="person">/ person</p>
          </div>
          <p className="tip-amount">
            $
            {tip !== undefined
              ? (
                  tip.bill / tip.people +
                  (tip.bill * (tip.tip / 100)) / tip.people
                ).toFixed(2)
              : "0.00"}
          </p>
        </div>
      </article>
      <button
        type="reset"
        form="tip-form"
        onClick={handleReset}
        className={tip !== undefined ? "reset active" : "reset"}
      >
        RESET
      </button>
    </article>
  );
}
