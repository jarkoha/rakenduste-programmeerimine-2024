const cats = [];

exports.create = (req, res) => {
    const {name} = req.body;


    const newCat = {
        id: crypto.randomUUID(),
        name: name,
        createdAt: Date.now(),
        updatedAt: null,
        deleted: false,
    };

    cats.push(newCat);

    res.send(newCat);
};

exports.read = (req, res) => {
    res.send(cats);
};

exports.update = (req, res) => {
    const {id} = req.params;
    const {name} = req.body;

    const cat = cats.find(cat => cat.id === id);

    if (!cat) {
        return res.status(404).send({ message: 'Cat not found' });
    }

    cat.name = name || cat.name;
    cat.updatedAt = Date.now();

    res.send(cat);
};

exports.delete = (req, res) => {
    const {id} = req.params;

    const cat = cats.find(cat => cat.id === id);
    if (!cat) {
        return res.status(404).send({ message: 'Cat not found' });
    }

    cat.deleted = true;
    cat.updatedAt = Date.now();

    res.send({ message: `Cat with id ${id} has been deleted`, cat });
};
