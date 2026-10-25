
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Product() {
    const [api, setApi] = useState([])
    const [fil, setFil] = useState([])
    const [active, setActive] = useState('All')
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    const getapi = async () => {
        try {
            const result = await axios.get(
                "https://fakestoreapi.com/products"
            )
            setApi(result.data)
            setFil(result.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const handelBox = (p) => {
        navigate(`/product/${p}`)
    }

    const handleFilter = (category) => {
        setActive(category)

        if (category === 'All') {
            setApi(fil)
        } else {
            setApi(fil.filter(
                (f) => f.category === category
            ))
        }
    }

    const handlePrice = (type) => {
        setActive(type)

        let result = []

        if (type === 'Under $100') {
            result = fil.filter((f) => f.price < 100)
        } else if (type === '$100 - $500') {
            result = fil.filter(
                (f) => f.price >= 100 && f.price <= 500
            )
        } else if (type === 'Above $500') {
            result = fil.filter((f) => f.price > 500)
        }

        setApi(result)
    }

    useEffect(() => {
        getapi()
    }, [])

    const categories = [
        'All',
        'electronics',
        'jewelery',
        "men's clothing",
        "women's clothing"
    ]

    const prices = [
        'Under $100',
        '$100 - $500',
        'Above $500'
    ]

    return (
        <div className="min-h-screen bg-slate-50">

            {/* Navbar */}
            <nav className="bg-white shadow-sm sticky top-0 z-20">
                <div className="max-w-7xl mx-auto px-5 py-4
                    flex justify-between items-center">
                    <h1 className="text-2xl sm:text-3xl font-extrabold
                        text-indigo-600">
                        Shop<span className="text-slate-800">Ease.</span>
                    </h1>

                    <div className="flex items-center gap-2
                        text-slate-700 font-medium">
                        <span className="text-xl">🛒</span>
                        <span className="hidden sm:inline">
                            Fake Store
                        </span>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-indigo-600
                to-violet-600 text-white">
                <div className="max-w-7xl mx-auto px-5 py-14
                    sm:py-20">
                    <p className="uppercase tracking-widest
                        text-indigo-200 text-sm font-semibold mb-3">
                        Welcome to our store
                    </p>

                    <h2 className="text-4xl sm:text-5xl
                        font-extrabold leading-tight mb-5">
                        Find Your Next <br className="hidden sm:block" />
                        Favorite Product
                    </h2>

                    <p className="text-indigo-100 text-base
                        sm:text-lg max-w-xl">
                        Explore our collection of stylish,
                        useful and affordable products.
                    </p>

                    <button
                        onClick={() =>
                            document.getElementById('products')
                                ?.scrollIntoView({ behavior: 'smooth' })
                        }
                        className="mt-7 bg-white text-indigo-700
                            font-bold px-7 py-3 rounded-full
                            hover:bg-indigo-50 transition shadow-lg">
                        Shop Now →
                    </button>
                </div>
            </section>

            {/* Main Content */}
            <main id="products" className="max-w-7xl mx-auto
                px-5 py-12">

                <div className="flex flex-col gap-2 mb-8">
                    <h2 className="text-3xl font-bold text-slate-800">
                        Our Products
                    </h2>
                    <p className="text-slate-500">
                        Discover something you will love.
                    </p>
                </div>

                {/* Filters */}
                <div className="bg-white rounded-2xl shadow-sm
                    border border-slate-100 p-5 mb-8">

                    <h3 className="font-bold text-slate-800 mb-4">
                        Categories
                    </h3>

                    <div className="flex flex-wrap gap-3 mb-6">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleFilter(category)}
                                className={`px-5 py-2.5 rounded-full
                                    text-sm font-semibold capitalize
                                    transition duration-200
                                    ${active === category
                                        ? 'bg-indigo-600 text-white shadow-md'
                                        : 'bg-slate-100 text-slate-600 hover:bg-indigo-100 hover:text-indigo-700'
                                    }`}
                            >
                                {category === 'All'
                                    ? 'All Categories'
                                    : category}
                            </button>
                        ))}
                    </div>

                    <div className="border-t border-slate-100 pt-5">
                        <h3 className="font-bold text-slate-800 mb-4">
                            Filter by Price
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {prices.map((price) => (
                                <button
                                    key={price}
                                    onClick={() => handlePrice(price)}
                                    className={`px-5 py-2.5 rounded-full
                                        text-sm font-semibold transition
                                        ${active === price
                                            ? 'bg-indigo-600 text-white shadow-md'
                                            : 'bg-slate-100 text-slate-600 hover:bg-indigo-100 hover:text-indigo-700'
                                        }`}
                                >
                                    {price}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Product Count */}
                <div className="flex justify-between items-center
                    mb-6">
                    <p className="text-slate-600">
                        Showing <span className="font-bold
                            text-slate-800">{api.length}</span> products
                    </p>

                    <button
                        onClick={() => handleFilter('All')}
                        className="text-indigo-600 font-semibold
                            hover:underline text-sm">
                        Clear filters
                    </button>
                </div>

                {/* Products Grid */}
                {loading ? (
                    <div className="text-center py-20">
                        <div className="w-10 h-10 border-4
                            border-indigo-200 border-t-indigo-600
                            rounded-full animate-spin mx-auto mb-4">
                        </div>
                        <p className="text-slate-500">
                            Loading products...
                        </p>
                    </div>
                ) : api.length === 0 ? (
                    <div className="text-center py-20 bg-white
                        rounded-2xl">
                        <p className="text-5xl mb-4">🔍</p>
                        <h3 className="text-xl font-bold
                            text-slate-800">
                            No products found
                        </h3>
                        <p className="text-slate-500 mt-2">
                            Try selecting a different filter.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2
                        lg:grid-cols-3 xl:grid-cols-4 gap-6">

                        {api.map((items) => (
                            <button
                                key={items.id}
                                onClick={() => handelBox(items.id)}
                                className="group text-left bg-white
                                    rounded-2xl overflow-hidden
                                    border border-slate-100
                                    shadow-sm hover:shadow-xl
                                    hover:-translate-y-1
                                    transition duration-300
                                    focus:outline-none
                                    focus:ring-2 focus:ring-indigo-500"
                            >
                                {/* Image */}
                                <div className="h-64 bg-white
                                    flex items-center justify-center
                                    p-6 relative overflow-hidden">

                                    <span className="absolute top-4
                                        left-4 bg-indigo-50
                                        text-indigo-600 text-xs
                                        font-bold px-3 py-1
                                        rounded-full capitalize">
                                        {items.category}
                                    </span>

                                    <img
                                        src={items.image}
                                        alt={items.title}
                                        className="h-full w-full
                                            object-contain
                                            group-hover:scale-110
                                            transition duration-500"
                                    />
                                </div>

                                {/* Details */}
                                <div className="p-5 border-t
                                    border-slate-100">

                                    <h3 className="font-bold
                                        text-slate-800 text-base
                                        leading-6 line-clamp-2
                                        min-h-12">
                                        {items.title}
                                    </h3>

                                    <div className="flex items-center
                                        gap-2 mt-3">
                                        <span className="text-amber-500">
                                            ★
                                        </span>
                                        <span className="text-sm
                                            text-slate-500">
                                            {items.rating?.rate}
                                        </span>
                                        <span className="text-sm
                                            text-slate-400">
                                            ({items.rating?.count} reviews)
                                        </span>
                                    </div>

                                    <div className="flex justify-between
                                        items-center mt-5">
                                        <p className="text-2xl
                                            font-extrabold
                                            text-indigo-600">
                                            ${items.price.toFixed(2)}
                                        </p>

                                        <span className="bg-indigo-600
                                            text-white rounded-full
                                            w-10 h-10 flex items-center
                                            justify-center text-xl
                                            group-hover:bg-indigo-700
                                            transition">
                                            +
                                        </span>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                )}
            </main>

            {/* Footer */}
            <footer className="bg-slate-900 text-white mt-12">
                <div className="max-w-7xl mx-auto px-5 py-8
                    text-center">
                    <h2 className="text-2xl font-extrabold mb-2">
                        Shop<span className="text-indigo-400">Ease.</span>
                    </h2>
                    <p className="text-slate-400 text-sm">
                        Your favorite products, all in one place.
                    </p>
                    <p className="text-slate-500 text-xs mt-5">
                        © 2026 ShopEase. Demo store for learning.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Product