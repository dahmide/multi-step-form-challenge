import "./radio.css";
import { useStateContext } from "../../hooks/context.hooks";

const Radio = (props) => {
    const {
        icon,
        name,
        bind,
        price_per_mo,
        price_per_yr,
    } = props;
    const state = useStateContext();
   
    let rate;
    let type = state.user.plan.type;
    let code = state.user.plan.bill;
    let less = {
        "display": type === "yearly" ? "block" : "none"
    }

    if (type === "yearly") {
        rate = `${state.sign}${price_per_yr}/yr`;
    } else {
        rate = `${state.sign}${price_per_mo}/mo`;
    }
    return (
        <label className="radio flex" htmlFor={name}>
            <input
                id={name}
                className="radio__input"
                type="radio"
                name="plan"
                title="bill"
                value={name}
                checked={code === name}
                onChange={bind}
            />
            <img className="radio__icon" src={icon} alt={name} />
            <div className="radio__over"></div>
            <div className="radio__side">
                <p className="radio__name">
                    {name}
                </p>
                <p className="radio__rate">
                    {rate}
                </p>
                <p className="radio__deal" 
                    style={less}>
                    2 months free
                </p>
            </div>
        </label>
    );
}

export default Radio;