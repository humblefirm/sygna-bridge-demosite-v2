const blacklist = [
    {
        address: "0xdeadbeef"
    }
]
const isSanctionAddress = (address) => {
    if (blacklist.find(obj => obj.address === address ) != undefined) return true;
    return false;
}

export {isSanctionAddress};