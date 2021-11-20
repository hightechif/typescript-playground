// basic types
let username: string = "Fadhil"
let salary: bigint = 7000n
let weight: number = 75.5
let isSmart: Boolean = true

// unknown
let notSure: unknown = 4
notSure = "maybe a string insread"

// unknown - OK, definitely a boolean
notSure = false

declare const maybe: unknown
// unknown - 'maybe' could be a string, object, boolean, undefined, or other types
// unknown - but cannot be both or any

// any
declare function getValue(key: string): any
// any - OK, return value of 'getValue' is not checked
const str: string = getValue("myString")
