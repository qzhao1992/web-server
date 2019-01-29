function name(first, last){

    return first + " " + last;
}

function getImage(){
    return "<img src='/public/images/church.jpg'>"
}

exports.extra = {
    name,
    getImage
}