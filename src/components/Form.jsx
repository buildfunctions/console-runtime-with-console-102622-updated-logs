const ContactForm = () => {
    return (
        <div>
            <span className="text-gray-200 dark:text-gray-200 flex justify-center">Serving Token Assets v1.1.0 beta</span>
            <form className="max-w-xl mx-auto bg-gray-900 bg-opacity-90 rounded pt-1">
               
                {/* Details */}
                <div className="flex flex-wrap -mx-3 mb-5">
                    <div className="w-full px-3">
                        <textarea id="message" rows="4" className="form-text area w-full bg-black border border-gray-400 focus:border-white text-rose-400 dark:text-gold-100 pl-2" placeholder="Welcome to the Servingtokens.com Transition System (STTS). API. An attempt at implementing a secure locate from the web! 
                        The docs pages are referencable, and we hope also navigatable!  For issues please the see the opensource github issues page or checkout the /docs for tons of educational resources including, use-cases, video tutorials, written documentation, code snippets, and more! Our initial focuses when designing was to zone in on what we do best... providing bulletproof client interfaces, and of course,  automating system proccesses! Registering for a FREE account at servingtokens.com REQUIRES NO CREDIT CARD ON FILE FOR SIGNUP OR ACCOUNT INITATION. So you can and there is NO REQUIRED CARD ON FILE to INITATE A NEW ACCOUNT so you click /register and  start securing your digital assets today! | STTS."></textarea>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default ContactForm