const blacklist = [
    {
        name: "김정은"
    }
]
const isSanctionName = (name) => {
    console.log(name)
    if (blacklist.find(obj => obj.name === name ) != undefined) return true;
    return false;
}

export {isSanctionName};