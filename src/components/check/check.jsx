import "./check.css";
import { useStateContext } from "../../hooks/context.hooks";
import { deriveProp } from "../../utils/functions/derive.functions";

const Check = (props) => {
    const {
        lead,
        desc,
        bind,
        price_per_mo,
        price_per_yr,
    } = props;
    const state = useStateContext();

    let name;
    let type;
    let rate;
    
    type = state.user.plan.type;
    name = deriveProp(lead);
    if (type === "yearly") {
        rate = `${state.sign}${price_per_yr}/yr`;
    } else {
        rate = `${state.sign}${price_per_mo}/mo`;
    }
    return (
        <label className="check" htmlFor={name}>
            <input
                id={name}
                className="check__input"
                type="checkbox"
                name="tool"
                title="tool"
                value={name}
                checked={state.user.tool[name]}
                onChange={bind}
            />
            <div className="check__cover"></div>
            <div className="check__aside">
                <div className="check__facts">
                    <p className="check__lead">{lead}</p>
                    <p className="check__para">{desc}</p>
                </div>
                <div className="check__price">
                    +{rate}
                </div>
            </div>
        </label>
    );
}

export default Check;