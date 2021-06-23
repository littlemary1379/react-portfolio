export function randomPosition(radius, length) {
    var position;

    do {
        position = Math.random()*800;
        console.log("rawPostion"+position)
    } while(radius*2 > position || position > 800 - radius*2)

    console.log(position)
    return position;
}