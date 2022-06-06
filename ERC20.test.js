const MyToken = artifacts.require("MyToken")

contract("MyToken", (accounts) => {
    before(async () => {
        myToken = await MyToken.deployed()
    })

    it("Should return the name of the token", async () => {
        let name = await myToken.name()
        console.log(name)
    })

    it("Should return the token symbol", async () => {
        let symbol = await myToken.symbol()
        console.log(symbol)
    })

    it("Should return the token decimal", async () => {
        let decimal = await myToken.decimals()
        console.log(decimal.toString())
    })


    it("Should give 1000 tokens to the owner", async () => {
        let balance = await myToken.balanceOf(accounts[0])
        balance = web3.utils.fromWei(balance, 'ether')
        assert.equal(balance, '1000', "Balance should be 1000")
        //console.log(web3.utils.fromWei(balance), 'ether')
        console.log(balance)
    }) 

    it("Should return the total supply", async () => {
        let totalsupply = await myToken.totalSupply()
        console.log(web3.utils.fromWei(totalsupply), 'ether')
    })

    // it("Should transfer tokens to other account", async () => {
    //     let amount = web3.utils.toWei('100', 'ether')
    //     await myToken.transfer(accounts[1], amount, {from: accounts[0]})

    //     let balance = await myToken.balanceOf(accounts[1])
    //     balance = web3.utils.fromWei(balance, 'ether')
    //     assert.equal(balance, '100', "Token balance should be equal to 100")
    //     console.log(balance)
    // })

    it("Should transfer tokens and deduct 10% fee", async () =>{
        let amount = web3.utils.toWei('2', 'ether')
        await myToken.transfer(accounts[4], amount, {from: accounts[0]})

        let balance = await myToken.balanceOf(accounts[4])
        balance = web3.utils.fromWei(balance, 'ether')
        assert.equal(balance, '1.8', "Token balance should be equal to 1.8")
        console.log(balance)
    })

    // it("Should transfer tokens between accounts", async () => {
    //     let amount = web3.utils.toWei('50', 'ether')
    //     await myToken.transferFrom(accounts[2], amount, {from: accounts[1]})

    //     let balance = await myToken.balanceOf(accounts[2])
    //     balance = web3.utils.fromWei(balance, 'ether')
    //     assert.equal(balance, '50', "Token balance should be equal to 50")
    //     console.log(balance)
    // })

    it("Should approve the tokens to a address", async () => {
        let amount = web3.utils.toWei('500', 'ether')
        await myToken.approve(accounts[3], amount)
        console.log(web3.utils.fromWei(amount, 'ether'))
    })
})