import { MapPin, Phone } from 'lucide-react';

const Address = () => {
  return (
    <section className="bg-[#fafafa] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-[#0f5132] md:text-5xl">
            Where You Can Reach Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Feel free to reach out or access our documentation whenever you need
            immediate assistance.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-2">
          {/* Left Card: Address */}
          <div className="flex flex-col items-center rounded-xl bg-white p-8 text-center shadow-md">
            <div className="mb-6 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#0f5132]">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-[#0f5132]">Address</h3>
            <p className="text-gray-600">
              3rd Floor, Mata Rajeshwari Complex, Solapur - Pune Hwy, opp. Manjri Stud Farm,
              <br />
              Shewalewadi, Pune, Maharashtra 412307
            </p>
          </div>

          {/* Right Card: Contact Information */}
          <div className="flex flex-col items-center rounded-xl bg-white p-8 text-center shadow-md">
            <div className="mb-6 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#0f5132]">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-[#0f5132]">
              Contact Information
            </h3>
            <div className="text-gray-600">
              <p>080 – 49524573</p>
              <p>sales@codeit.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Address;
