const componentToHex = (component) => {
    const hex = component.toString();
    return hex.length == 1 ? '0' + hex : hex;
}

const rgbToHex = (r, g, b) => {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

export default rgbToHex;