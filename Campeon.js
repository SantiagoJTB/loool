export default class Campeon {
    constructor(data) {
        this.name = data.id; 
        this.title = data.title;   
        this.blurb = data.blurb;     
        this.image = data.image.full; 
        this.tags = data.tags;        
    }
}