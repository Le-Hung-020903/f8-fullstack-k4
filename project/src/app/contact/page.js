import React from "react";

const Contact = () => {
    return (
        <section className="flex items-center justify-center py-28">
            <div className="p-6 border border-gray-300 shadow-xl">
                <form action="" className="flex flex-col gap-5">
                    <h2 className="text-center text-second text-4xl">
                        Contact Us
                    </h2>
                    <div className="flex gap-5">
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="First Name"
                            className="border border-gray-500 px-4 py-2 focus:border-purple-500 outline-none"
                        />
                        <input
                            type="text"
                            name=""
                            id=""
                            className="border border-gray-500 px-4 py-2 focus:border-purple-500 outline-none"
                            placeholder="Last Name"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name=""
                            id=""
                            placeholder="Email"
                            className="border border-gray-500 px-4 py-2 w-full focus:border-purple-500 outline-none"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Phone"
                            className="border border-gray-500 px-4 py-2 w-full focus:border-purple-500 outline-none"
                        />
                    </div>
                    <div>
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Write your message..."
                            className="w-full h-36 resize-none border border-gray-500 px-4 py-2 focus:border-purple-500 outline-none"
                        ></textarea>
                    </div>
                    <button className="w-full bg-purple-600 text-white py-2 cursor-pointer font-bold">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
