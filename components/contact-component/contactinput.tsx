export default function ContactInputs() {
    return (
        <div className=" bg-gradient-to-r from-[#202020] via-[#1c1c1cc9] to-[#171717ef] w-[95%] sm:w-4/5  lg:h-full rounded-[3rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
            <form className="h-full flex flex-col space-y-8 flex-1">
                <input
                    type="text"
                    className="w-full p-4 bg-[#232323] text-white rounded-xl shadow-[0_5px_0_0_#1a1a1a]  transition-all duration-200 focus:shadow-[0_2px_0_0_#1a1a1a] focus:translate-y-[3px]
                placeholder-gray-400 text-base" placeholder="NAME"
                    required
                />

                <input
                    type="email"
                    className="w-full p-4 bg-[#232323] text-white rounded-xl shadow-[0_5px_0_0_#1a1a1a]  transition-all duration-200 focus:shadow-[0_2px_0_0_#1a1a1a]
                focus:translate-y-[3px] placeholder-gray-400 text-base"
                    placeholder="EMAIL"
                    required
                />

                <input
                    type="text"
                    className="w-full p-4 bg-[#232323] text-white rounded-xl shadow-[0_5px_0_0_#1a1a1a]  transition-all duration-200
                focus:shadow-[0_2px_0_0_#1a1a1a]
                focus:translate-y-[3px]
                placeholder-gray-400
                text-base"
                    placeholder="SUBJECT"
                    required
                />

                <textarea
                    rows={4}
                    className="w-full p-4 bg-[#232323] text-white rounded-xl shadow-[0_5px_0_0_#1a1a1a]  transition-all duration-200 focus:shadow-[0_2px_0_0_#1a1a1a focus:translate-y-[3px]
                placeholder-gray-400 text-base resize-none"
                    placeholder="MESSAGE"
                ></textarea>

                <button
                    type="submit"
                    className="w-full py-5 bg-[#232323] text-white rounded-xl shadow-[0_8px_0_0_#1a1a1a]  hover:shadow-[0_5px_0_0_#1a1a1a hover:translate-y-[3px] active:shadow-[0_2px_0_0_#1a1a1a] active:translate-y-[6px]
                transition-all duration-200  text-base font-medium"
                >
                    SEND MESSAGE
                </button>
            </form>
        </div>
    )
}