const person = {
    firstname: 'Harry',
    lastname: 'Heman',
    city: 'Mountain View',
    company: 'Google'
}

const proxy = new Proxy(person, {
    get(target, property) {
        if (!(property in target)) {
            console.log(target)
            console.log(property)
            return property
                .split('_')
                .map(p => target[p])
                .sort()
                .join(' ')
        }
        console.log(`получено свойство: ${property}`)
        return target[property]
    },
    set(target, property, value) {
        if (property in target) {
            target[property] = value
            console.log(`изменено свойство: ${property}`)
        } else {
            console.error('нет такого свойства')
        }
    },
    has(target, property) {
        // return property in target
        return Object.entries(target)
            .flat()
            .includes(property)
    },
    deleteProperty(target, property) {
        if (property in target) {
            delete target[property]
            console.log(`удалено свойство: ${property}`)
        } else {
            console.error('нет такого свойства')
        }
    }
})

console.log(proxy.company_city_firstname_lastname) // Google Harry Heman Mountain View
proxy.firstname = 'John' // изменено свойство: firstname
proxy.surname = 'Smith' // нет такого свойства
console.log(proxy.city) // получено свойство: city Mountain View
console.log('company' in proxy) // true
delete proxy.age // нет такого свойства

// proxy + cookie
const getCookieObject = () => {
    const cookies = document.cookie.split(';').reduce((cks, ck) => ({
        [ck.substr(0, ck.indexOf('=')).trim()]: ck.substr(ck.indexOf('=') + 1),
        ...cks
    }), {})

    const setCookie = (name, value) => document.cookie = `${name}=${value}`

    const deleteCookie = name => document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GTM;`

    return new Proxy(cookies, {
        set: (obj, prop, val) => (setCookie(prop, val), Reflect.set(obj, prop, val)),
        deleteProperty: (obj, prop) => (deleteCookie(prop), Reflect.deleteProperty(obj, prop))
    })
}
