import { useStateContext, useAgentContext } from "../../hooks/context.hooks";
import reducerDefs from "../../utils/constants/reducer.constants";
import Step1 from "../step1/step1";
import Step2 from "../step2/step2";
import Step3 from "../step3/step3";
import Step4 from "../step4/step4";
import "./stepbox.css";

const Stepbox = () => {
    const state = useStateContext();
    const agent = useAgentContext();
    return (
        <form 
            className={`stepbox${state.done === true ? " hide" : ""}`} 
            onSubmit={(e) => agent({ type: reducerDefs.DONE, payload: { event: e }})}>
            <Step1 />
            <Step2 />
            <Step3 />
            <Step4 />
            <div className="stepbox__ctrl">
                <div className="stepbox__wrap wrap flex">
                    <button 
                        type="button"
                        className={`stepbox__btn stepbox__btn--none${state.step !== 1 ? "" : " hide"}`}
                        onClick={(e) => agent({ type: reducerDefs.PREV, payload: { event: e }})}>
                            Go back
                    </button>
                    <button 
                        type={`${state.last ? "submit" : "button"}`}
                        className={`stepbox__btn stepbox__btn--auto${state.step !== 4 ? "" : " done"}`}
                        onClick={(e) => agent({ type: reducerDefs.NEXT, payload: { event: e }})}>
                            {state.step === 4 ? "Confirm" : "Next Step" }
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Stepbox;