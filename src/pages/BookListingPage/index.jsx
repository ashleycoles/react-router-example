import { useEffect, useState } from "react"
import BookListing from "../../components/BookListing"

export default function BookListingPage() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('https://book-swap-api.dev.io-academy.uk/api/books')
            .then(res => res.json())
            .then(bookData => {
                setBooks(bookData.data)
            })
    }, [])

    return (
        <main>
            <h1>Browse our book catalog</h1>

            {books.map(book => <BookListing 
                                key={book.id} 
                                id={book.id} 
                                title={book.title} 
                                author={book.author} 
                                image={book.image} 
                                />
            )}
        </main>
    )
}