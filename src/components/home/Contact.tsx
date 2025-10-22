import Spinner from "../ui/Spinner";
import { useForm } from "@formspree/react";
import { useState, type ChangeEvent } from "react";

export default function Contact() {
    const initialData = {
        name: "",
        email: "",
        message: "",
    };
    const [state, handleSubmit] = useForm("xnngybdz");
    const [formData, setFormData] = useState(initialData);
    const [showMessage, setShowMessage] = useState<boolean>(false);
    const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);

    const handleChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const fieldName = evt.target.name;
        const fieldValue = evt.target.value;
        setFormData((prevData) => {
            return {
                ...prevData,
                [fieldName]: fieldValue
            };
        });
    };

    return (
        <>
            {showMessage &&
                <p className="text-green-500 border border-gray-100 font-medium px-4 py-2 rounded-xl shadow-sm text-sm">Congratulations message received 🎉🎉🎉</p>
            }
            {showErrorMessage &&
                <p className="text-red-500 border border-gray-100 font-medium px-4 py-2 rounded-xl shadow-sm text-sm">❌ Something went wrong!!!</p>
            }
            <form onSubmit={async (evt) => {
                evt.preventDefault();
                await handleSubmit(formData);
                if (state.succeeded) {
                    setFormData(initialData);
                    setShowMessage(true);
                }
                else {
                    setShowErrorMessage(true);
                }
                setTimeout(() => {
                    setShowMessage(false);
                    setShowErrorMessage(false);
                }, 5000);
            }} className="w-full max-w-lg my-2 p-2">
                {/* Name */}
                <div className="flex flex-col my-3">
                    <input
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="border border-gray-300 font-sans font-normal text-[#2a2522] rounded-lg px-4 py-3 my-2 text-sm focus:outline-[#7c3bed] focus:outline-2 focus:outline-offset-2 duration-75 ease-out"
                    />
                </div>
                {/* Email */}
                <div className="flex flex-col my-3">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="border border-gray-300 font-sans font-normal text-[#2a2522] rounded-lg px-4 py-3 my-2 text-sm focus:outline-[#7c3bed] focus:outline-2 focus:outline-offset-2 duration-75 ease-out"
                    />
                </div>
                {/* Message */}
                <div className="flex flex-col my-3">
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        required
                        className="border border-gray-300 font-sans font-normal text-[#2a2522] rounded-lg px-4 py-3 my-2 text-sm focus:outline-[#7c3bed] focus:outline-2 focus:outline-offset-2 duration-75 ease-out min-h-40 scrollbar-none"
                    ></textarea>
                </div>
                {/* Button */}
                <button type="submit" disabled={state.submitting} className="bg-linear-to-r from-[#7c3bed] to-[#3c83f6]  text-white w-full text-sm font-medium py-3 rounded-xl hover:cursor-pointer duration-300 ease-out outline-none">{state.submitting ? <div className="flex justify-center items-center w-full"><Spinner customize={true} /></div> : "Send Message"}</button>
            </form>
        </>
    );
};