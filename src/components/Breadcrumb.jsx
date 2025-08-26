import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import { useNavigation } from '../hooks/useNavigation';

const Breadcrumb = ({ items }) => {
    const { navigateTo } = useNavigation();

    return (
        <nav className="bg-gray-50 py-4">
            <div className="max-w-7xl mx-auto px-6">
                <ol className="flex items-center space-x-2 text-sm">
                    <motion.li
                        className="flex items-center cursor-pointer"
                        onClick={() => navigateTo('home')}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Home className="w-4 h-4 text-blue-600" />
                    </motion.li>

                    {items.map((item, index) => (
                        <li key={index} className="flex items-center">
                            <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                            {item.href ? (
                                <motion.button
                                    onClick={() => item.onClick && item.onClick()}
                                    className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {item.label}
                                </motion.button>
                            ) : (
                                <span className="text-gray-600">{item.label}</span>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </nav>
    );
};

export default Breadcrumb;