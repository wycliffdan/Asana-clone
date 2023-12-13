
import Image from "next/image";
import { ImageResponse } from "next/server";

const Product8 = () => {
    return (
     <div>
        <section className="flex flex-col py-20 items-center justify-center bg-[#282828]">
            <div className="text-center flex flex-col items-center justify-center pb-20">
                <Image
                src="/images/logo/logo-13.svg"
                width={100}
                height={100}
                className="w-60 h-60 mx-auto"
                alt=""
                />
                <div className="text-6xl flex justify-center md;tex-6xl text-white md:px-20 w-2/3 ">
                    Try the #1 software in project and product management
                </div>
                <div className="text-xl bg-white p-6 rounded-lg w-40 items-center justify-center flex">
                    Get Started
                </div>

            </div>
            <div className="hidden md:flex pt-40 space-x-40 border-t">
                <div className="">
                    <Image
                    src="/images/logo/logo-17.svg"
                    alt="Picture of the author"
                    width={50}
                    height={50}
                    />
                </div>
                <div className="flex-col space-y-6 flex">
                    <div className="tex-xl text-gray-200 pb-10">Bird</div>
                    <div className="text-gray-200">Home</div>
                    <div className="text-gray-200">Product</div>
                    <div className="text-gray-200">What&apos;s New</div>
                    <div className="text-gray-200">Pricing</div>
                    <div className="text-gray-200">premium</div>
                </div>
                <div className="flex-col space-y-6 flex">
                    <div className="tex-xl text-gray-200 pb-10">About us</div>
                    <div className="text-gray-200">Company</div>
                    <div className="text-gray-200">Leadership</div>
                    <div className="text-gray-200">Customers</div>
                    <div className="text-gray-200"> Diversity</div>
                    
                </div>
                <div className="flex-col space-y-6 flex">
                    <div className="tex-xl text-gray-200 pb-10">Workflow solutions</div>
                    <div className="text-gray-200">Project Management</div>
                    <div className="text-gray-200">Goal Management</div>
                    <div className="text-gray-200">Increase Productvity</div>
                    <div className="text-gray-200">Work Management</div>
                    <div className="text-gray-200">Product Planning</div>

                    <div className="text-gray-200">To Do Lists</div>
                </div>
                <div className="flex-col space-y-6 flex">
            <div className="text-xl text-gray-200 pb-10">Resources</div>

            <div className="text-gray-200">Help Center</div>
            <div className="text-gray-200">Forum</div>
            <div className="text-gray-200">Support</div>

            <div className="text-gray-200">App Directory</div>
            <div className="text-gray-200">Developers & API</div>
          </div>

          <div className="flex-col space-y-6 flex">
            <div className="text-xl text-gray-200 pb-10">Learn</div>

            <div className="text-gray-200">11 Leadership Styles</div>

            <div className="text-gray-200">What are OKRs?</div>
            <div className="text-gray-200">SMART GOALS</div>
            </div>
            </div>
        </section>
     </div>
    )
};

export default Product8;