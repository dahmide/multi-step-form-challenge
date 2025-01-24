import { useAgentContext, useStateContext } from "../../hooks/context.hooks";
import { deriveProp } from "../../utils/functions/derive.functions";
import { plans, tools } from "../../db/data";
import reducerDefs from "../../utils/constants/reducer.constants";
import "./step4.css";

const Step4 = () => {
    const state = useStateContext();
    const agent = useAgentContext();

    const dataX = plans.filter(plan => (
        plan.name === state.user.plan.bill
    ));
    const dataY = tools.filter(tool => {
        let tag;
        tag = deriveProp(tool.lead);
        return state.user.tool[tag];
    });

    let type;
    let base;
    let cost;
    let sign;

    cost = 0;
    sign = state.sign;
    type = state.user.plan.type;
    if (type === "yearly") {
        base = { abbr: "/yr", long: "per year" };
    } else {
        base = { abbr: "/mo", long: "per month"};
    }
    return (
        <div className={`step4 card wrap${state.step === 4 ? "" : " hide"}`}>
            <h2 className="lead">
                Finishing up
            </h2>
            <p className="para">
                Double-check everything looks OK before confirming.
            </p>
            <div className="step4__info">
                {dataX.map((data, key) => {
                    let price = type === "yearly" ? data.price_per_yr : data.price_per_mo;
                    let state = type === "yearly" ? "Yearly" : "Monthly";
                    cost = cost + parseInt(price);
                    return (
                        <div className="step4__plan flex" key={key}>
                            <p className="step4__plan-name">
                                {data.name} ({state})
                                <br />
                                <button
                                    type="button"
                                    className="step4__plan-link"
                                    onClick={(e) => agent({ type: reducerDefs.UNDO, payload: { event: e } })}>
                                    Change
                                </button>
                            </p>
                            <p className="step4__plan-cost">
                                +{sign}{price}
                                {base.abbr}
                            </p>
                        </div>
                    )
                })}
                <hr className="step4__line" />
                {dataY.map((data, key) => {
                    let price = type === "yearly" ? data.price_per_yr : data.price_per_mo;
                    cost = cost + parseInt(price);
                    return (
                        <div className="step4__tool flex" key={key}>
                            <p className="step4__tool-name">
                                {data.lead}
                            </p>
                            <p className="step4__tool-cost">
                                +{sign}{price}
                                {base.abbr}
                            </p>
                        </div>
                    )
                })}
            </div>
            <div className="step4__cost flex">
                <p className="step4__cost-info">
                    Total ({base.long})
                </p>
                <p className="step4__cost-unit">
                    +{cost}{base.abbr}
                </p>
            </div>
        </div>
    );
}

export default Step4;