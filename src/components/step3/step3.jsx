import { useAgentContext, useStateContext } from "../../hooks/context.hooks";
import { tools } from "../../db/data";
import reducerDefs from "../../utils/constants/reducer.constants";
import Check from "../check/check";
import "./step3.css";

const Step3 = () => {
    const state = useStateContext();
    const agent = useAgentContext();
    return (
        <div className={`step3 card wrap${state.step === 3 ? "" : " hide"}`}>
            <h2 className="lead">
                Pick add-ons
            </h2>
            <p className="para">
                Add-ons help your gaming experience.
            </p>
            <div className="step3__form">
                {tools.map((tool, idx) => (
                    <Check
                        {...tool}
                        key={idx}
                        bind={(e) => agent({ type: reducerDefs.EDIT, payload: { event: e } })}
                    />
                ))}
            </div>
        </div>
    );
}

export default Step3;