import jwt from "jsonwebtoken";

//main Page
export const home = (req, res) => {
    return res.render("home");
};

//login
export const getLogin = (req, res) =>{
    return res.render("login");
};
export const postLogin = (req, res) => {
    const {id, password} = req.body;
    
    //id validation
    if(id !== '1')
        return res.status(400).render("login",{msg:"ID가 존재하지 않습니다."});
    //password validation
    
    //token 생성
    const accessToken = jwt.sign({id}, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1h",
    });
    // const refreshToken = jwt.sign({id}, process.env.REFRESH_TOKEN_SECRET, {
    //     expiresIn: "1d",
    // });
    res.cookie('accessToken', accessToken);
    // res.cookie.refreshToken = refreshToken;  
    
    return res.redirect("/");
}

export const getLogout = (req, res) => {
    res.clearCookie('accessToken');
    console.log(res.cookie)
    return res.redirect("/");
};

//join
export const getJoin = (req, res) => {
    return res.render("join");
}