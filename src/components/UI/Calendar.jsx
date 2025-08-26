import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const CalendarComponent = ({ availability, selectedDate, onDateSelect }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

    const months = [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ]

    const getDaysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate()
    }

    const getFirstDayOfMonth = (month, year) => {
        return new Date(year, month, 1).getDay()
    }

    const isDateAvailable = (date) => {
        const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`
        return availability[dateStr]
    }

    const handleDateSelect = (date) => {
        const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`
        onDateSelect(dateStr)
    }

    const renderCalendar = () => {
        const daysInMonth = getDaysInMonth(currentMonth, currentYear)
        const firstDay = getFirstDayOfMonth(currentMonth, currentYear)
        const days = []
        const dayNames = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']

        // En-tête des jours
        const dayHeaders = dayNames.map(day => (
            <div key={day} className="text-center font-semibold text-slate-700 py-2 text-sm">
                {day}
            </div>
        ))

        // Cases vides
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="p-2"></div>)
        }

        // Jours du mois
        for (let date = 1; date <= daysInMonth; date++) {
            const isAvailable = isDateAvailable(date)
            const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`
            const isSelected = selectedDate === dateStr

            days.push(
                <div key={date} className="p-1">
                    <button
                        onClick={() => isAvailable && handleDateSelect(date)}
                        disabled={!isAvailable}
                        className={`w-10 h-10 rounded-lg text-sm font-semibold transition-all ${isAvailable
                                ? isSelected
                                    ? 'bg-indigo-600 text-white shadow-md'
                                    : 'bg-white text-slate-700 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300'
                                : 'text-slate-300 cursor-not-allowed bg-slate-50'
                            }`}
                    >
                        {date}
                    </button>
                </div>
            )
        }

        return (
            <div>
                <div className="flex justify-between items-center mb-4">
                    <button
                        onClick={() => {
                            if (currentMonth === 0) {
                                setCurrentMonth(11)
                                setCurrentYear(currentYear - 1)
                            } else {
                                setCurrentMonth(currentMonth - 1)
                            }
                        }}
                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5 text-slate-600" />
                    </button>
                    <h3 className="text-lg font-bold text-slate-800">
                        {months[currentMonth]} {currentYear}
                    </h3>
                    <button
                        onClick={() => {
                            if (currentMonth === 11) {
                                setCurrentMonth(0)
                                setCurrentYear(currentYear + 1)
                            } else {
                                setCurrentMonth(currentMonth + 1)
                            }
                        }}
                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                        <ChevronRight className="w-5 h-5 text-slate-600" />
                    </button>
                </div>
                <div className="grid grid-cols-7 gap-1 mb-2">
                    {dayHeaders}
                </div>
                <div className="grid grid-cols-7 gap-1">
                    {days}
                </div>
            </div>
        )
    }

    return (
        <div className="bg-white p-6 rounded-lg border border-slate-200">
            {renderCalendar()}
        </div>
    )
}

export default CalendarComponent