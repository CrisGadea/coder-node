const fs = require('fs');

class Container {

    constructor(file){
        this.file = file;
        this.products = [];
    }

    save = async (product) => {

        //this.products = await this.getAll();
        product.id = this.products.length + 1;
        this.products.push(product);

        try {
            await fs.promises.writeFile(this.file, JSON.stringify(this.products));
            console.log("Saved products!");
            return product.id;
        } catch (err) {
            console.log("Error trying to save data", err);
        }

    }

    getById = async (id) => {
        
        try {
            await this.getAll()
            .then(cont => this.products = JSON.parse(cont))
            
            let finded = null;

            this.products.forEach( product => {
                if (product.id === id) {
                    finded = product;
                }
            })

            return finded;
             
        } catch (err) {
            console.log("Error trying to obtain data", err);
        }

    }

    getAll = async () => {

        try {
            this.products = await fs.promises.readFile(this.file, 'utf-8');
            return this.products;
        } catch (err) {
            console.log("Error trying to obtain data", err);
        }
        
    }

    deleteById = async (id) => {

        

        try {
            let productFounded;

            await this.getAll()
            .then( cont2 => {
                this.products = cont2
            })

            await this.getById(id)
            .then( cont => {
                productFounded = cont
                if (productFounded) {
                    this.products.forEach( product => {
                        let index = this.products.indexOf(product);
                        if (product.id === id) {
                            this.products.splice(index, 1);
                        }
                    })
                }
            })
            await fs.promises.writeFile(this.file, JSON.stringify(this.products));
            console.log("Deleted product!");
        } catch (err) {
            console.log("Error trying to delete data", err);
        }
    }

    deleteAll = async () => {
        try {
            await fs.promises.unlink(this.file);
            this.products = [];
            await fs.promises.writeFile(this.file,JSON.stringify(this.products));
            console.log("Overwriting file succesfully!");
        } catch (err) {
            console.log("Error trying to delete all data", err);
        }
    }
    
}

const FILE = './products.txt';

const container = new Container(FILE);

const product1 = {
    title: 'Product 1',
    price: 1000,
    thumbnail: 'url1'
};

const product2 = {
    title: 'Product 2',
    price: 2000,
    thumbnail: 'url2'
};

const product3 = {
    title: 'Product 3',
    price: 3000,
    thumbnail: 'url3'
};

// FUNCIONA
container.save(product1)
.then(id => console.log(id))
container.save(product2)
.then(id => console.log(id))
container.save(product3)
.then(id => console.log(id))

// FUNCIONA
// container.getAll()
// .then(cont => console.log(cont));

// FUNCIONA
// container.getById(product3.id)
// .then(cont => console.table(cont));

// FUNCIONA
deleted1 = async () => {
    await container.deleteById(product2.id)

    await container.getAll()
    .then( cont => console.table(cont))
}

// FUNCIONA
deleted = async () => {
    await container.deleteAll()

    await container.getAll()
    .then( cont => console.log(cont))
}


//deleted1()

//deleted()