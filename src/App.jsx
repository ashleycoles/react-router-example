import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"
import BookListingPage from "./pages/BookListingPage"
import BookDetailPage from "./pages/BookDetailPage"

function App() {
    return (
        <BrowserRouter>

            <Nav />

            {/* This is the swapable window */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/books" element={<BookListingPage />} />
                <Route path="/book/:id" element={<BookDetailPage />} />
            </Routes>

            <Footer />

        </BrowserRouter>
    )
}

export default App
