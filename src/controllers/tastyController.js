export const getTastyList = (req, res) => {
    const foods = "1";
    return res.render("tasty-road/tasty-list", {foods});
};