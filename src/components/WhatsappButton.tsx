import whatsappLogo from "../assets/whatsapp.svg"

function WhatsAppButton() {
    const phoneNumber = "+917211166616"; 
    const message = encodeURIComponent("Hello! I would like to inquire about your services.");

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a  
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={whatsappLogo} alt="whatsapp logo" className="fixed z-10 bottom-12 right-12 h-16 w-16 max-md:h-12 w-12 right-8 bottom-8" />
        </a>
    );
}

export default WhatsAppButton;



