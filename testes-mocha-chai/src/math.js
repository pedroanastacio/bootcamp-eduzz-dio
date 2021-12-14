class Math {
    sum(...numbers) {
        return numbers.reduce((sum, value) => {
            return sum + value;
        }, 0)
    }

    average(callback, ...numbers) {
        setTimeout(() => {
            callback(this.sum(...numbers) / numbers.length);
        }, 1500)
    }

}

module.exports = Math