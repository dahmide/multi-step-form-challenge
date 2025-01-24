import { useStateContext } from "../../hooks/context.hooks";
import "./stepbar.css";

const Stepbar = () => {
    const state = useStateContext();
    return (
        <div className="stepbar">
            <div className={`stepbar__item${state.step === 1 ? " stepbar__busy" : "" }`}>
                <p className="stepbar__para">
                    Your info
                </p>
            </div>
            <div className={`stepbar__item${state.step === 2 ? " stepbar__busy" : "" }`}>
                <p className="stepbar__para">
                    Select plan
                </p>
            </div>
            <div className={`stepbar__item${state.step === 3 ? " stepbar__busy" : "" }`}>
                <p className="stepbar__para">
                    Add-ons
                </p>
            </div>
            <div className={`stepbar__item${state.step === 4 ? " stepbar__busy" : "" }`}>
                <p className="stepbar__para">
                    Summary
                </p>
            </div>
        </div>
    )
}

export default Stepbar;