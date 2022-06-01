const book = {
    title: 'Daniel a historia',
    author: 'daniel menezes',
    publisher: {
        name: 'cum.org'
    }
}

const { title, author } = book;
const { name: publisherName } = book.publisher;

console.log(`${title} was written by: ${author}`)
console.log(`Published by: ${publisherName}`)

//array destructing

const address = ['1299 S Semem', 'Sampa']

const [street, city] = address

console.log(`You are in ${street} ${city}`)