const user = require ('../utils/data.js/users')

const login = (req, res) => {
    const { email, password } = req.query

    const userFound = user.find((user) => user.email === email && user.password === password)

    //return useFound
    //? res.status(200).json({ access:true })
    //: res.status(400).json({ acces:false })

    if(userFound) return res.status(200).json({ access: true})
    return res.status(404).json({ access: false})
}


module.exports = {
    login
}