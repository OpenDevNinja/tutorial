import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

const QuestionsSection = () => {
    const questions = [
        "Votre enfant a-t-il des difficultés scolaires persistantes ?",
        "Cherchez-vous des méthodes d'apprentissage personnalisées ?",
        "Voulez-vous améliorer la confiance en soi de votre enfant ?",
        "Souhaitez-vous un accompagnement professionnel et bienveillant ?",
        "Désirez-vous voir des résultats concrets rapidement ?",
        "Avez-vous des questions sur le sujet de l'accompagnement ?",
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">
                        Si vous pouvez répondre{' '}
                        <span className="text-indigo-600 ">OUI</span>{' '}
                        à ces questions,
                    </h2>
                    <p className="text-xl text-indigo-600 font-semibold">
                        alors réservez votre séance maintenant !
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {questions.map((question, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-3 px-1 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="flex items-start">
                                <div className="bg-emerald-100 p-2 rounded-full mr-3 flex-shrink-0">
                                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                                </div>
                                <p className="text-slate-700 font-medium text-base leading-relaxed">
                                    {question}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

               
            </div>
        </section>
    );
};

export default QuestionsSection;