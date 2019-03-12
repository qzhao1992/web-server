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
    subtraction(id){
        for(const item of this.items){
            if(item.id == id){
                if(item.qty > 1)
                {
                    item.qty--;
                    break;
                }else{
                    this.items.splice( this.items.indexOf(item), 1);
                    break;
                }
                
            }
        }
    }
    delete(id){
        for(const item of this.items){
            if(item.id == id){
                this.items.splice( this.items.indexOf(item), 1);
                break;
            }
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