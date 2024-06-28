import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function BookDetailPage() {
    const {id} = useParams()
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [author, setAuthor] = useState('')
    const [pageCount, setPageCount] = useState(0)

    useEffect(() => {
        fetch(`https://book-swap-api.dev.io-academy.uk/api/books/${id}`)
            .then(res => res.json())
            .then(bookData => {
                setTitle(bookData.data.title)
                setImage(bookData.data.image)
                setAuthor(bookData.data.author)
                setPageCount(bookData.data.page_count)
            })
    }, [])

    return (
        <main>
            <h1>Info about {title}</h1>
            <img src={image} alt=""/>
            <p>Written by: {author}</p>
            <p>Has {pageCount} pages</p>
        </main>
    )
}