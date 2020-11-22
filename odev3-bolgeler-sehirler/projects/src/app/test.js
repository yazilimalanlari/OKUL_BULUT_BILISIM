const data = require('./data.json');

Object.defineProperty(Array.prototype, 'groupBy', {
    value(property) {
        return this.reduce((acc, obj) => {
            const key = obj[property].trim();
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(obj);
            return acc;
        }, {});
    }
});

console.log(JSON.stringify(data.groupBy('region')))