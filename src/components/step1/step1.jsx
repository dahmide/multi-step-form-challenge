import { useAgentContext, useStateContext } from "../../hooks/context.hooks";
import reducerDefs from "../../utils/constants/reducer.constants";
import "./step1.css";

const Step1 = () => {
    const state = useStateContext();
    const agent = useAgentContext();
    return (
        <div className={`step1 card wrap${state.step === 1 ? "" : " hide"}`}>
            <h2 className="lead">
                Personal info
            </h2>
            <p className="para">
                Please provide your name, email address, and phone number.
            </p>
            <div className="step1__form">
                <div className={`step1__form-field${state.typo.name ? " typo" : ""}`}>
                    <label className="step1__form-label" htmlFor="step1__name">
                        Name
                    </label>
                    <input 
                        id="step1__name"
                        className="step1__form-input" 
                        type="text" 
                        // name="name" 
                        title="name"
                        value={state.user.name}
                        placeholder="e.g. Stephen King"
                        autoComplete="off"
                        onKeyUp={(e) => agent({ type: reducerDefs.KYUP, payload: { event: e }})}
                        onChange={(e) => agent({ type: reducerDefs.EDIT, payload: { event: e }})}
                    />
                    <div className="step1__form-error">
                        This field is required
                    </div>
                </div>
                <div className={`step1__form-field${state.typo.mail ? " typo" : ""}`}>
                    <label className="step1__form-label" htmlFor="step1__mail">
                        Email Address
                    </label>
                    <input 
                        id="step1__mail"
                        className="step1__form-input" 
                        type="text" 
                        // name="mail" 
                        title="mail"
                        value={state.user.mail}
                        placeholder="e.g. stephenking@lorem.com"
                        autoComplete="off"
                        onKeyUp={(e) => agent({ type: reducerDefs.KYUP, payload: { event: e }})}
                        onChange={(e) => agent({ type: reducerDefs.EDIT, payload: { event: e }})}
                    />
                     <div className="step1__form-error">
                        This field is required
                    </div>
                </div>
                <div className={`step1__form-field${state.typo.line ? " typo" : ""}`}>
                    <label className="step1__form-label" htmlFor="step1__line">
                        Phone Number
                    </label>
                    <input 
                        id="step1__line"
                        className="step1__form-input" 
                        type="tel" 
                        // name="line" 
                        title="line"
                        value={state.user.line}
                        placeholder="e.g. +1 234 567 890"
                        autoComplete="off"
                        onKeyUp={(e) => agent({ type: reducerDefs.KYUP, payload: { event: e }})}
                        onChange={(e) => agent({ type: reducerDefs.EDIT, payload: { event: e }})}
                    />
                     <div className="step1__form-error">
                        This field is required
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Step1;