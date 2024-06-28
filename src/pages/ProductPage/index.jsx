import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function ProductPage() {

    // useParams is a hook that gives us placeholders from dynamic routes
    const {name} = useParams()
    // Now we can do whatever we want with the name

    // For example, send a fetch request to get the data about this specific product
    useEffect(() => {
        fetch(`myspecialjsonservice.com/products/${name}`)
            .then (res => res.json())
            .then(data => {
                console.log(data)
            })
    }, [])

    return (
        <main>
            <h1>This is the product page for {name}</h1>
        </main>
    )
}