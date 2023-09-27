import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_u5mfehk', 'template_kabljxp', form.current, '5U3UHbAKEWSnnRkNq')
            .then((result) => {
                alert('Message sent successfully.');
                console.log(result.text);
            }, (error) => {
                alert('Message failed to send.');
                console.log(error.text);
            });
    };

    return (
        <section className="bg-gray-50 px-5 " id="contact">
            <div className="text-center md:w-[90%] mx-auto text-black ">
                <h2 className="text-2xl text-center font-semibold font-display text-black dark:text-white sm:text-3xl">
                    Send a message
                </h2>
            </div>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">
                <p className="mb-8 lg:mb-16 font-light text-center text-white dark:text-gray-400 sm:text-xl">Want to
                    send a message? Or find out more information?</p>
                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                    <div>
                        <label htmlFor="email"
                               className="block mb-2 text-sm font-medium text-black dark:text-gray-300">Your
                            email</label>
                        <input type="email" id="email" name="user_email"
                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                               placeholder="name@flowbite.com" required/>
                    </div>
                    <div>
                        <label htmlFor="subject"
                               className="block mb-2 text-sm font-medium text-black dark:text-gray-300">Subject</label>
                        <input type="text" id="subject"
                               name="user_name"
                               className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                               placeholder="Let us know how we can help you" required/>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message"
                               className="block mb-2 text-sm font-medium text-black dark:text-gray-400">Your
                            message</label>
                        <textarea id="message" rows="6" name="message"
                                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                  placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit"
                            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-neutral-950 sm:w-fit hover:bg-neutral-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send
                        message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;