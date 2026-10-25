
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

function ProductDetails() {
    const [api, setApi] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const { id } = useParams()
    const navigate = useNavigate()

    const getapi = async () => {
        try {
            const result = await axios.get(
                `https://fakestoreapi.com/products/${id}`
            )
            setApi(result.data)
        } catch (err) {
            console.log(err)
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getapi()
    }, [id])

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col
                items-center justify-center bg-slate-50">
                <div className="w-12 h-12 border-4
                    border-indigo-200 border-t-indigo-600
                    rounded-full animate-spin mb-4">
                </div>
                <p className="text-slate-500 font-medium">
                    Loading product details...
                </p>
            </div>
        )
    }

    if (error || !api) {
        return (
            <div className="min-h-screen flex flex-col
                items-center justify-center bg-slate-50 px-5">
                <div className="text-6xl mb-4">😕</div>
                <h2 className="text-2xl font-bold
                    text-slate-800 mb-2">
                    Product not found
                </h2>
                <p className="text-slate-500 mb-6 text-center">
                    Sorry, we couldn't load this product.
                </p>
                <button
                    onClick={() => navigate('/')}
                    className="bg-indigo-600 text-white
                        px-6 py-3 rounded-xl font-semibold
                        hover:bg-indigo-700 transition">
                    Back to Store
                </button>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-50">

            {/* Navbar */}
            <nav className="bg-white shadow-sm sticky top-0 z-20">
                <div className="max-w-7xl mx-auto px-5 py-4
                    flex justify-between items-center">
                    <button
                        onClick={() => navigate('/')}
                        className="text-2xl sm:text-3xl
                            font-extrabold text-indigo-600">
                        Shop<span className="text-slate-800">
                            Ease.
                        </span>
                    </button>

                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2
                            text-slate-600 font-semibold
                            hover:text-indigo-600 transition">
                        <span className="text-xl">🛒</span>
                        <span className="hidden sm:inline">
                            Store
                        </span>
                    </button>
                </div>
            </nav>

            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-5 pt-6">
                <div className="flex items-center gap-2
                    text-sm text-slate-500">
                    <button
                        onClick={() => navigate('/')}
                        className="hover:text-indigo-600 transition">
                        Home
                    </button>
                    <span>/</span>
                    <span className="capitalize">
                        {api.category}
                    </span>
                    <span>/</span>
                    <span className="text-slate-800 font-medium">
                        Product Details
                    </span>
                </div>
            </div>

            {/* Product Details */}
            <main className="max-w-7xl mx-auto px-5 py-8">

                <div className="bg-white rounded-3xl
                    shadow-sm border border-slate-100
                    overflow-hidden">

                    <div className="grid grid-cols-1
                        lg:grid-cols-2 gap-8 lg:gap-14
                        p-5 sm:p-10 lg:p-14">

                        {/* Product Image */}
                        <div className="bg-slate-50 rounded-2xl
                            min-h-[350px] sm:min-h-[500px]
                            flex items-center justify-center
                            p-8 relative">

                            <span className="absolute top-5
                                left-5 bg-indigo-100
                                text-indigo-700 text-xs
                                sm:text-sm font-bold
                                px-4 py-2 rounded-full
                                capitalize">
                                {api.category}
                            </span>

                            <img
                                src={api.image}
                                alt={api.title}
                                className="max-h-[420px]
                                    w-full object-contain
                                    hover:scale-105
                                    transition duration-500"
                            />
                        </div>

                        {/* Product Information */}
                        <div className="flex flex-col
                            justify-center py-2">

                            <p className="text-sm font-bold
                                uppercase tracking-widest
                                text-indigo-600 mb-3">
                                Featured Product
                            </p>

                            <h1 className="text-2xl sm:text-3xl
                                lg:text-4xl font-extrabold
                                text-slate-900 leading-tight">
                                {api.title}
                            </h1>

                            {/* Rating */}
                            <div className="flex items-center
                                gap-2 mt-5">
                                <div className="flex items-center
                                    gap-1 bg-amber-50
                                    text-amber-600 px-3 py-1.5
                                    rounded-lg font-bold">
                                    <span>★</span>
                                    <span>
                                        {api.rating?.rate}
                                    </span>
                                </div>

                                <span className="text-sm
                                    text-slate-500">
                                    {api.rating?.count} customer reviews
                                </span>
                            </div>

                            {/* Price */}
                            <div className="mt-7 pb-7
                                border-b border-slate-100">
                                <p className="text-sm
                                    text-slate-500 mb-2">
                                    Price
                                </p>

                                <div className="flex items-baseline
                                    gap-3">
                                    <span className="text-4xl
                                        sm:text-5xl font-extrabold
                                        text-indigo-600">
                                        ${api.price.toFixed(2)}
                                    </span>
                                </div>

                                <p className="text-sm
                                    text-emerald-600
                                    font-medium mt-2">
                                    ✓ Available in store
                                </p>
                            </div>

                            {/* Description */}
                            <div className="mt-7">
                                <h2 className="text-lg
                                    font-bold text-slate-800
                                    mb-3">
                                    Product Description
                                </h2>

                                <p className="text-slate-600
                                    leading-7 text-sm sm:text-base">
                                    {api.description}
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col
                                sm:flex-row gap-4 mt-8">

                                <button
                                    onClick={() => navigate('/')}
                                    className="flex-1 bg-indigo-600
                                        text-white font-bold
                                        py-4 px-6 rounded-xl
                                        hover:bg-indigo-700
                                        hover:shadow-lg
                                        transition duration-300">
                                    ← Continue Shopping
                                </button>

                                <button
                                    onClick={() => window.scrollTo({
                                        top: 0,
                                        behavior: 'smooth'
                                    })}
                                    className="sm:w-auto
                                        border-2 border-slate-200
                                        text-slate-700 font-bold
                                        py-4 px-6 rounded-xl
                                        hover:border-indigo-600
                                        hover:text-indigo-600
                                        transition">
                                    ↑ Top
                                </button>
                            </div>

                            {/* Extra Info */}
                            <div className="grid grid-cols-2
                                gap-4 mt-8">

                                <div className="bg-slate-50
                                    rounded-xl p-4">
                                    <div className="text-2xl mb-2">
                                        🚚
                                    </div>
                                    <p className="text-sm
                                        font-bold text-slate-800">
                                        Fast Delivery
                                    </p>
                                    <p className="text-xs
                                        text-slate-500 mt-1">
                                        Shop with ease
                                    </p>
                                </div>

                                <div className="bg-slate-50
                                    rounded-xl p-4">
                                    <div className="text-2xl mb-2">
                                        🔒
                                    </div>
                                    <p className="text-sm
                                        font-bold text-slate-800">
                                        Secure Shopping
                                    </p>
                                    <p className="text-xs
                                        text-slate-500 mt-1">
                                        Safe demo experience
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Bottom Back Button */}
                <div className="text-center mt-8">
                    <button
                        onClick={() => navigate('/')}
                        className="text-indigo-600
                            font-semibold hover:underline">
                        ← Back to all products
                    </button>
                </div>

            </main>

            {/* Footer */}
            <footer className="bg-slate-900
                text-white mt-12">
                <div className="max-w-7xl mx-auto
                    px-5 py-8 text-center">
                    <h2 className="text-2xl
                        font-extrabold mb-2">
                        Shop<span className="text-indigo-400">
                            Ease.
                        </span>
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

export default ProductDetails