import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";

export default function RefundPolicy() {
  return (
    <>
      <Header />
      <div className="w-[90%] mx-auto mt-10 p-4 border rounded-lg shadow-lg lg:w-[70%] h-[70%] bg-white">
        <h1 className="text-xl sm:text-2xl font-bold mb-4">Refund Policy</h1>
        <div className="h-[25rem] hover:cursor-pointer overflow-y-auto pr-4">

          <h2 className="text-base sm:text-lg font-semibold mt-4">
            Problem Resolution
          </h2>
          <p className="text-sm sm:text-base mb-4">
            If you encounter any issues with our smart kitchen table technology, we will make every effort to resolve the problem as quickly as possible. Our dedicated support team is available to assist you and work towards a satisfactory solution.
          </p>

          <h2 className="text-base sm:text-lg font-semibold mt-4">
            Subscription Refund Policy
          </h2>
          <p className="text-sm sm:text-base mb-4">
            We operate on a subscription-based model with a 3-month commitment period. Due to the nature of our services and the ongoing costs associated with maintaining and improving our system, we do not offer refunds on monthly subscriptions. However, if you encounter significant issues that cannot be resolved, we may consider a partial refund or credit towards future services on a case-by-case basis.
          </p>

          <h2 className="text-base sm:text-lg font-semibold mt-4">
            Contact Us
          </h2>
          <p className="text-sm sm:text-base mb-4">
            If you have any questions or concerns about our refund policy, please don't hesitate to contact us at <a href="mailto:baksish247@gmail.com" className="underline text-[#441029]">baksish247@gmail.com</a>. Our support team is here to assist you and ensure that your experience with Baksish is positive.
          </p>

        </div>
      </div>
      <div className="p-4"></div>
      <Footer />
    </>
  );
}
