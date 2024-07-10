import Header from 'next/head';

export default function page() {
  return (
    <>
    <Header/>
    
    <div className="min-h-screen bg-[#e8e3c8] px-4 py-10">
     
      <div className="max-w-4xl mx-auto bg-[#ffffffef] rounded-lg shadow-md">
        <div className='bg-[#661268] text-[#fbf3df] rounded-lg p-8'>
        <h1 className="text-3xl text-white font-bold mb-6">Refund Policy</h1></div>
        <div className='p-8'>
        <p className="mb-4">
        At our company, we are committed to providing our customers with a seamless and reliable smart kitchen table technology experience. We understand that issues may arise, and we strive to address them promptly and effectively. However, due to the nature of our subscription-based model and the complexity of our system, we have the following refund policy in place.
        </p>
        <h2 className="text-2xl  font-bold mb-2">Problem Resolution</h2>
        <p className="mb-4">
        If you encounter any issues with our smart kitchen table technology, we will make every effort to resolve the problem as quickly as possible. Our dedicated support team is available to assist you and work towards a satisfactory solution.        </p>
        <h2 className="text-2xl font-bold mb-2">Subscription Refund Policy</h2>
        <p className="mb-4">
        We operate on a subscription-based model with a 3-month commitment period. Due to the nature of our services and the ongoing costs associated with maintaining and improving our system, we do not offer refunds on monthly subscriptions. However, if you encounter significant issues that cannot be resolved, we may consider a partial refund or credit towards future services on a case-by-case basis.        </p>
        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
        <p>
          If you have any questions or concerns about our refund policy, please don't hesitate to contact us at 
          <a href="mailto:baksish247@gmail.com" className="text-blue-500"> baksish247@gmail.com</a>. Our support team is here to assist you and ensure that your experience with Baksish is positive.
        </p>
      </div>
      </div>
    </div>
    </>
  );
}