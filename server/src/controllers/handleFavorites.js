let myFavorites = []

const postFav = (req, res) => {
    try{
        const character = req.body
        const characterFound = myFavorites.find(fav.id === character.id)

      if(characterFound) throw Error('El personaje ya está en favoritos')

        myFavorites.push(character)

        return res.status(200).json(myFavorites)
    } catch (error){
        return res.status(404).send(error.message)
    }
}

const deletefav = (req, res) =>{
    const { id } = req.params

    myFavorites = myFavorites.filter((favorite) => favorite.id !== +id)

    return res.status(200).json(myFavorites)
}


module.exports = {
    postFav,
    deletefav
}