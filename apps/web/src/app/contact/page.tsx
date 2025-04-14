"use client"

import { ContactForm } from "@tigerxinsights/ui";
import { useState } from "react";

interface contactFormType {
    name: string,
    email: string,
    message: string,
}

export default function Contact() {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const handleSubmit = async (formData: contactFormType) => {
        try {
            const response = await fetch("http://localhost:3000/api/contact", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
                cache: "no-store"
            });
            const result = await response.json();
            if (response.ok) {
                setIsSuccess(true);
                setTimeout(() => {
                    setIsSuccess(false);
                }, 3000);
            }
            else {
                setIsError(true);
                setTimeout(() => {
                    setIsError(false);
                }, 3000);
            }
            return result;
        } catch (error) {
            console.error("Failed to submit the form!");
        }
    };

    return (
        <>
            {/* Container 1 */}
            <div className="w-full px-4 sm:px-20 md:px-32 xl:px-60 2xl:px-96 py-10">
                {isSuccess && <p className="italic font-semibold text-green-600 text-center">Successfully received the message!!!</p>}
                {isError && <p className="italic font-semibold text-red-500 text-center">Message failed to sent!!!</p>}
                <ContactForm handleSubmitForm={handleSubmit} />
            </div>
        </>
    );
};