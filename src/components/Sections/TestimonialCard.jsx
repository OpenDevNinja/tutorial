import React, { useState } from 'react'
import { Play, Star, User } from 'lucide-react'
import Modal from '../UI/Modal'

const TestimonialCard = ({ testimonial }) => {
    const [showVideoModal, setShowVideoModal] = useState(false)

    return (
        <>
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl w-full border border-slate-200">
                {testimonial.isVideo ? (
                    <div
                        className="w-full h-64 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden cursor-pointer group"
                        onClick={() => setShowVideoModal(true)}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                        <div className="relative z-10 bg-white rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-8 h-8 text-indigo-600" />
                        </div>
                    </div>
                ) : (
                    <div className="w-full h-64 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl mb-6 flex items-center justify-center">
                        <User className="w-16 h-16 text-slate-400" />
                    </div>
                )}

                <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                </div>

                <blockquote className="text-slate-600 mb-6 italic text-lg leading-relaxed">
                    "{testimonial.content}"
                </blockquote>

                <div className="border-t border-slate-200 pt-4">
                    <p className="font-bold text-slate-800 text-lg">{testimonial.name}</p>
                    <p className="text-indigo-600 font-medium">{testimonial.role}</p>
                    <p className="text-slate-400 text-sm mt-1">{testimonial.location}</p>
                </div>
            </div>

            {showVideoModal && (
                <Modal onClose={() => setShowVideoModal(false)}>
                    <div className="w-full h-96">
                        <iframe
                            width="100%"
                            height="100%"
                            src={testimonial.videoUrl}
                            title="Témoignage vidéo"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-xl"
                        ></iframe>
                    </div>
                </Modal>
            )}
        </>
    )
}

export default TestimonialCard