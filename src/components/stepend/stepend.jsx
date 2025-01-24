import { useStateContext } from "../../hooks/context.hooks";
import icon from "../../assets/images/icon-thank-you.svg";
import "./stepend.css";

const Stepend = () => {
    const state = useStateContext();
    return (
        <div className={`stepend${state.done === true ? "" : " hide"}`}>
            <div className="stepend__wrap card wrap">
                <img className="stepend__icon" src={icon} alt="thank you" />
                <div className="stepend__lead lead">
                    Thank you!
                </div>
                <div className="stepend__para para">
                    Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com
                </div>
            </div>
        </div>
    );
}

export default Stepend;