const Product = require("../models/Product");

exports.createProducts = async (req, res) => {
    
    try {
        let product;

        product = new Product(req.body);
        await product.save()
        res.send(product)

    } catch (error) {
        console.log(error)
        res.status(500).send("An error was generated")    
    }
}

exports.getProduct = async (req, res) =>{
    
    try {
        const products = await Product.find();
        res.json(products);
        
    } catch (error) {
        console.log(error)
        res.status(500).send("An error was generated")    
    }
}

exports.getOneProduct = async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);
        
        if(!product){
            res.status(404).json({msg:'This product does not exists'});
        }

        res.json(product)

    } catch (error) {
        console.log(error)
        res.status(500).send("An error was generated")    
    }
}

exports.updateProduct = async (req, res) => {
    try {
        
        const {name, category, location, price} = req.body
        let product = await Product.findById(req.params.id);
        
        if(!product){
            res.status(404).json({msg:'This product does not exists'});
        }

        product.name = name;
        product.category = category;
        product.location = location;
        product.price = price;
        
        product = await Product.findByIdAndUpdate({_id: req.params.id}, product, {new: true});

        res.json(product)

    } catch (error) {
        console.log(error)
        res.status(500).send("An error was generated")    
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);
        
        if(!product){
            res.status(404).json({msg:'This product does not exists'});
        }

        await Product.findByIdAndRemove({_id: req.params.id})
        res.json({msg:'Deleted Product'})

    } catch (error) {
        console.log(error)
        res.status(500).send("An error was generated")    
    }
}
