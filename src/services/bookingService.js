import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export const createBooking = async (bookingData) => {
  try {
    const docRef = await addDoc(collection(db, "bookings"), {
      ...bookingData,
      createdAt: serverTimestamp(),
      status: "pending",
    });

    // Appel de la fonction cloud pour envoyer l'email
    await sendConfirmationEmail(docRef.id, bookingData);

    return docRef.id;
  } catch (error) {
    console.error("Erreur lors de la création de la réservation:", error);
    throw error;
  }
};

const sendConfirmationEmail = async (bookingId, bookingData) => {
  // Cette fonction sera appelée pour déclencher l'envoi d'email
  // via Firebase Functions
  try {
    const response = await fetch("/api/sendConfirmationEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bookingId, ...bookingData }),
    });
    return response.json();
  } catch (error) {
    console.error("Erreur envoi email:", error);
  }
};
