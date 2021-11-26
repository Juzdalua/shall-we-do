import jwt from "jsonwebtoken";

//jwt 유효성 검사
export const authenticateAccessToken = (req, res, next) =>{
    if(!req.cookies.accessToken){
        res.locals.loggedIn = Boolean(false);
        return next();
    }
    const accessToken = req.cookies.accessToken;
    // const refreshToken = res.cookie.refreshToken;
    res.locals.loggedIn = Boolean(true);

    if(!accessToken){
        res.locals.loggedIn = Boolean(false);
        return res.status(401).render("login", {msg:"잘못된 접근입니다."});
    }

    let ok;
    try {
        ok = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    } catch (error) {
        res.locals.loggedIn = Boolean(false);
        res.clearCookie('accessToken');
        return res.status(401).render("login", {msg:"로그인 기한이 만료되었습니다."});
    }
    
    next();
};