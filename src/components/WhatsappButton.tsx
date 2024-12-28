import whatsappLogo from "../assets/whatsapp.svg"

function WhatsAppButton() {
    const phoneNumber = "+919104043122"; 
    const message = encodeURIComponent("Hello! I would like to inquire about your services.");

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a  
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={whatsappLogo} alt="whatsapp logo" className="fixed z-10 bottom-20 right-20 h-16 w-16" />
        </a>
    );
}

export default WhatsAppButton;



