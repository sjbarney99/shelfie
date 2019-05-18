module.exports = {
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.get_inventory()
            .then(products => res.status(200).send(products))
            .catch(err => {res.status(500).send(`Uh ohh... looks like we have ${err}`)
                console.log(err)
            })
    },
    create: (req, res, next) => {
        const dbInstance = req.app.post('db')

        dbInstance.create_product()
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send(`Uh ohh... looks like we have ${err}`)
                console.log(err)
            })
    },
    delete: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.delete_product()
            .then(() => res.status(200).send('This item no longer exists.'))
            .catch(err => {
                res.status(500).send(`Uh ohh... looks like we have ${err}`)
                console.log(err)
            })
    }
}