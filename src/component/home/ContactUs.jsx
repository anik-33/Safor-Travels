import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { toast } from "react-toastify";

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onTouched" });

  const apiKey = import.meta.env.VITE_FORM_API_KEY;

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Safor Travels",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg) => {
      toast.success("Message sent successfully!");
      reset();
    },
    onError: (msg) => {
      toast.error(msg || "Something went wrong. Please try again.");
    },
  });

  return (
    <section className=" py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE: CONTACT TEXT */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Travel <span className="text-[#dd2400]">With Us!</span>
          </h2>
          <p className="mt-6 text-gray-600 text-lg md:text-xl leading-relaxed">
            Are you tired of dreaming about the life you want? It’s time to take action and make those dreams a reality. Let us help you unlock the door to your dreams and start living the life.
          </p>
          
          <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
            <div className="bg-blue-500 p-3 rounded-full text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium text-left">Email us at</p>
              <p className="text-gray-900 font-semibold">info@safortravels.com</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: CONTACT FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="checkbox" {...register("botcheck")} className="hidden" />

            <div className="mb-5">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className={`w-full px-4 py-3 border-2 rounded-md outline-none focus:ring-4 transition ${
                  errors.name ? "border-red-600 ring-red-100" : "border-gray-200 focus:border-[#293dbb] ring-orange-50"
                }`}
                {...register("name", { required: "Full name is required" })}
              />
              {errors.name && <p className="mt-1 text-red-600 text-sm">{errors.name.message}</p>}
            </div>

            <div className="mb-5">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className={`w-full px-4 py-3 border-2 rounded-md outline-none focus:ring-4 transition ${
                  errors.email ? "border-red-600 ring-red-100" : "border-gray-200 focus:border-[#165dd1] ring-orange-50"
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" },
                })}
              />
              {errors.email && <p className="mt-1 text-red-600 text-sm">{errors.email.message}</p>}
            </div>

            <div className="mb-5">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea
                placeholder="How can we help you?"
                rows={4}
                className={`w-full px-4 py-3 border-2 rounded-md outline-none focus:ring-4 transition ${
                  errors.message ? "border-red-600 ring-red-100" : "border-gray-200 focus:border-[#2151b9] ring-orange-50"
                }`}
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && <p className="mt-1 text-red-600 text-sm">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 font-bold text-white bg-blue-500 hover:bg-blue-800 rounded-md transition duration-300 shadow-lg disabled:bg-gray-400"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}