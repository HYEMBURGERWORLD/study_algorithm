function solution(id_pw, db) {
    let user = db.find(([user]) => user === id_pw[0]);
    if(user === undefined) return "fail";

    return user[1] === id_pw[1] ? "login" : "wrong pw";
}
