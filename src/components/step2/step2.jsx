import { useAgentContext, useStateContext } from "../../hooks/context.hooks";
import { plans } from "../../db/data";
import reducerDefs from "../../utils/constants/reducer.constants";
import Radio from "../radio/radio";
import "./step2.css";

const Step2 = () => {
    const state = useStateContext();
    const agent = useAgentContext();

    let type = state.user.plan.type;
    return (
        <div className={`step2 card wrap${state.step === 2 ? "" : " hide"}`}>
            <h2 className="lead">
                Select your plan
            </h2>
            <p className="para">
                You have the option of monthly or yearly billing.
            </p>
            <div className="step2__form">
                <div className="step2__radio">
                    {plans.map((plan, idx) => (
                        <Radio
                            {...plan}
                            key={idx}
                            bind={(e) => agent({ type: reducerDefs.EDIT, payload: { event: e } })}
                        />
                    ))}
                </div>
                <div className="step2__check">
                    <label className="step2__check-label" htmlFor="check">
                        <input
                            id="check"
                            className="step2__check-mark"
                            type="checkbox"
                            name="type"
                            title="type"
                            value={type === "yearly" ? "yearly" : "monthly"}
                            checked={type === "yearly" ? true : false}
                            onChange={(e) => agent({ type: reducerDefs.EDIT, payload: { event: e } })}
                        />
                        <div className="step2__check-half">
                            Monthly
                        </div>
                        <div className="step2__check-full">
                            Yearly
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Step2;