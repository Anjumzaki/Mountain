export type Box = {
    // (x,y) is the top-left coordinate of box
    x: number;
    y: number;
    width: number;
    height: number;
    };
    
    export type Point = {
    x: number;
    y: number;
    };
    
    function valueInRange(value : number, min : number, max : number) : Boolean{
    return (value >= min) && (value <= max);
    }
    function boxesCollide(box1: Box, box2: Box) {
    // Helper function to detect whether two boxes collide or not, you'll probably need this at some point
    let xOverlap : Boolean = valueInRange(box1.x, box2.x, box2.x + box2.width) ||
    valueInRange(box2.x, box1.x, box1.x + box1.width);
    
    let yOverlap : Boolean = valueInRange(box1.y, box2.y, box2.y + box2.height) ||
    valueInRange(box2.y, box1.y, box1.y + box1.height);
    
    return xOverlap && yOverlap;
    }
    
    function hasBoxCollision(box1: Box, boxes: Box[]) {
    let hasBoxCollision = false;
    for (let box of boxes){
    if(boxesCollide(box1, box)){
    hasBoxCollision = true
    }
    }
    return hasBoxCollision;
    }
    /**
    * Finds the closest position (to boxToPlace.x and boxToPlace.y) where we can place boxToPlace:
    * - without colliding with any of the boxes.
    * - fitting inside insideContainer
    *
    * @param insideContainer A Box describing the area in which NameTags must be rendered. The returned position-Box must fall inside this Box
    * @param boxToPlace A Box describing the width and height of the NameTag we want to place, and the ideal coordinates we want to place it closest to
    * @param boxes Other Boxes, with which the returned position-box cannot collide
    */
    export function getClosestFreePosition(
    insideContainer: Box,
    boxToPlace: Box,
    boxes: Box[]
    ): Point {
    // Well, we kind of got stuck here! For now, I'm just returning boxToPlace and therefor position
    // it at exactly the position requested. But this doesn't take into account any of the other boxes
    // Can you create a smarter layouting algorithm?
    while(hasBoxCollision(boxToPlace, boxes)){
    if(boxToPlace.y == 70){
    boxToPlace.y = 150;
    }else{
    boxToPlace.y = 70;
    boxToPlace.x += 50;
    
    }
    }
    
    // You can add any methods to this file to complete the exercise (no need to modify any other files)
    return boxToPlace;
    }