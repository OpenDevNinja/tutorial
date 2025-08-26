import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Play, X } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
    const [showVideoModal, setShowVideoModal] = useState(false);

    return (
        <>
            <motion.div
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                whileHover={{ y: -5 }}
            >
                <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                </div>

                {testimonial.isVideo ? (
                    <div
                        className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mb-6 flex items-center justify-center cursor-pointer group"
                        onClick={() => setShowVideoModal(true)}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-xl"></div>
                        <div className="relative z-10 bg-white rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-8 h-8 text-blue-600" />
                        </div>
                    </div>
                ) : (
                    <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-6 flex items-center justify-center">
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                )}

                <p className="text-gray-600 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                </p>

                <div className="border-t border-gray-200 pt-4">
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-blue-600 font-medium">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm mt-1">{testimonial.location}</p>
                </div>
            </motion.div>

            {/* Modal Vidéo */}
            {showVideoModal && testimonial.isVideo && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl">
                        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                            <h3 className="text-2xl font-bold text-gray-800">
                                Témoignage de {testimonial.name}
                            </h3>
                            <button
                                onClick={() => setShowVideoModal(false)}
                                className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-all duration-300"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="p-6">
                            <div className="w-full h-96 mb-6">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={testimonial.videoUrl}
                                    title={`Témoignage de ${testimonial.name}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-xl"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TestimonialCard;