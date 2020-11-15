Object.defineProperty(String.prototype, 'filterSpace', {
    value() {
        return this.replace(/\s/g, "");
    }
});