// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway',
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return Object.assign({}, employee, {['streetAddress']: '11 Broadway'})
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    employee['streetAddress'] = '12 Broadway';
    return employee
}

function deleteFromEmployeeByKey(obj, key) {
    const newObj = Object.assign({},obj)
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key]
    return object
}