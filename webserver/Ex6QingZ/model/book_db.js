const db =[
    {
        id : 0,
        title : 'Intro to Node.js',
        description : 'The very basics of Node.js for students',
        image: '/public/images/1.jpg'
    },
    {
        id : 1,
        title : 'JavaScript Intermediate',
        description : 'Javascript for experts',
        image: '/public/images/2.jpeg'
    },
    {
        id : 2,
        title : 'How to get A in WSP class',
        description : 'the secret of getting A in WSP class',
        image: '/public/images/3.jpg'
    },
    {
        id : 3,
        title : 'C++',
        description : 'C++ for Java programmers',
        image: '/public/images/4.jpg'
    },
];

function getBook(id){
    for (const book of db){
        if(book.id == id){
            return book;
        }
    }
    return null;
}

exports.db = db;
exports.getBook = getBook;