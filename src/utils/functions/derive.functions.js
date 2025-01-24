function deriveProp(param) {
    let text = param.split(/\W/);
    return text[1] ? text[1] : text[0];
}

export { deriveProp };