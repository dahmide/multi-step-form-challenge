import patternDefs from "../utils/constants/pattern.constants";
import reducerDefs from "../utils/constants/reducer.constants";

const reducer = (state, action) => {
    switch (action.type) {
        case reducerDefs.PREV: {
            const step = state.step;
            if (step === 1) {
                return { ...state };
            }
            return { ...state, step: step - 1 };
        }
        case reducerDefs.NEXT: {
            const step = state.step;
            let name;
            let mail;
            let line;

            if (step === 4) {
                return { ...state, last: true };
            }

            name = {
                text: !state.user.name.trim(),
                typo: state.typo.name
            }
            mail = {
                text: !state.user.mail.trim(),
                typo: state.typo.mail
            }
            line = {
                text: !state.user.line.trim(),
                typo: state.typo.line
            }
            
            if (name.text || mail.text || line.text) {
                let typo = state.typo;
                if (name.text) { typo = { ...typo, name: true } };
                if (mail.text) { typo = { ...typo, mail: true } };
                if (line.text) { typo = { ...typo, line: true } };
                return { ...state, typo };
            }
            if (name.typo || mail.typo || line.typo) {
                return { ...state };
            }
            return { ...state, step: step + 1 };
        }
        case reducerDefs.UNDO: {
            const step = state.step;
            return { ...state, step: step - 2 };
        }
        case reducerDefs.EDIT: {
            const { event } = action.payload;
            const attr = event.target.title;
            const text = event.target.value;
            const user = state.user;

            if (attr === "bill") {
                user.plan[attr] = text;
                return { ...state, user };
            }
            if (attr === "type") {
                let type;
                if (text === "monthly") {
                    type = "yearly";
                } else {
                    type = "monthly";
                }
                user.plan[attr] = type;
                return { ...state, user };
            }
            if (attr === "tool") {
                let test = event.target.checked;
                user.tool[text] = test;
                return { ...state, user };
            }
            user[attr] = text;
            return { ...state, user };
        }
        case reducerDefs.DONE: {
            const { event } = action.payload;
            event.preventDefault();
            return { ...state, done: true };
        }
        case reducerDefs.KYUP: {
            const { event } = action.payload;
            const typo = state.typo;
            const attr = event.target.title;
            const text = event.target.value;

            const test = patternDefs[attr].test(text);
            typo[attr] = !test;
            return { ...state, typo: typo };
        }
    }
};

export default reducer;