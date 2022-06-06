const Counter = artifacts.require("Counter");

contract("Counter", (accounts) => {
    before(async () => {
        counter = await Counter.deployed()
    })

    it("Should return the value", async () => {
        let _value = await counter.getValue()
        console.log(_value.toString())
    })

    it("Should return the incremented value", async () => {
        await counter.increment()
        let _value = await counter.getValue()
        console.log(_value.toString())
    })

    it("Should return the decremented value", async () => {
        await counter.decrement()
        let _value = await counter.getValue()
        console.log(_value.toString())
    })
})