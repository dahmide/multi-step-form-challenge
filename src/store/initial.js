const initial = {
    step: 1,
    done: false,
    last: false,
    sign: "$",
    typo: {
        name: false,
        mail: false,
        line: false,
    },
    user: {
        name: "",
        mail: "",
        line: "",
        plan: {
            bill: "Arcade",
            type: "monthly",
        },
        tool: {
            service: true,
            storage: true,
            profile: false,
        }
    },
};

export default initial;