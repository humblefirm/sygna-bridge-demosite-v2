import {isSanctionName} from './unitas'
import {isSanctionAddress} from './s2wlab'

const isIllegalFunctions = {
    "beneficiary_name": isSanctionName,
    "beneficiary_address": isSanctionAddress
}
const isIllegal = (className, field) => {
    if(isIllegalFunctions[className]===undefined) return true;
    return isIllegalFunctions[className](field);
}

export default isIllegal