const phoneNumber = "+918780770435"; 

export const Message = (message:any) => {
    const finalMsg = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${finalMsg}`;
    window.self.open(whatsappUrl);
}