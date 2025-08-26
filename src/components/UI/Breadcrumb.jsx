import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ChevronRight } from 'lucide-react'

const Breadcrumb = ({title, subtitle}) => {

    return (
        <section className="py-20 bg-gradient-to-br from-slate-900 to-indigo-900 relative overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Services de tutorat"
                    className="w-full h-full object-cover opacity-10"
                />
            </div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                        {title}
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
                        {subtitle}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Breadcrumb