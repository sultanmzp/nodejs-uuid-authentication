//It is like diary where we map id and user so that we maintain state
const sessionIdToUserMap = new Map();

//setter
function setUser(id, user){
    sessionIdToUserMap.set(id, user);
}

//get User by ID
function getUser(id){
    return sessionIdToUserMap.get(id);
}

module.exports = {
    setUser,
    getUser
}