class ShoppingCart {
    constructor(){
        this.items = []; // [{id: 0, qty:0}, {}]
    }
    add(id){
        let found = false;
        for(const item of this.items){
            console.log(item.id, item.id)
            if(item.id == id){
                found = true;
                item.qty++;
            }
        }
        if(!found){
            this.items.push({id: id, qty:1})
        }
    }
    serialize(){
        return this.items;
    }

    static deserialize(items){
        const sc = new ShoppingCart();
        sc.items = items;
        return sc;
    }

    getItems(){
        return this.items;
    }
}

module.exports = ShoppingCart;