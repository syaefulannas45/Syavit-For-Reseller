import React from "react";

const Hero = () => {
  return (
    <section className="lg:flex lg:justify-between w-full mt-14 lg:mt-20 flex-col-reverse flex lg:flex-row items-center">
      <div className="lg:w-2/4 ml-4 lg:ml-[20px]">
        <p className="font-bold lg:text-[36px] text-text text-[25px] mt-8 lg:mt-0">
          Coba Undangan Digital <br />{" "}
          <span className="text-tittle">Berbasis Web dan Video</span>
        </p>
        <p className="lg:w-[60%] text-[13px] lg:text-[15px] lg:my-4 my-[10px]">
          Inovasi modern dalam mengirim undangan acara melalui web.
          Praktis, ramah lingkungan, dan mudah diperbarui. Ubah cara Anda
          mengirim dan menerima undangan dengan undangan digital.
        </p>
        <div className="flex space-x-3 items-center mt-6">
          <a
            href="#all"
            className="bg-tittle text-white py-3 px-8 rounded-full text-[10px] lg:text-[15px] font-medium "
          >
            Terbaru
          </a>
          <a
            href="#pernikahan"
            className=" text-text py-3 px-8 rounded-full border-2 border-tittle font-medium lg:text-[15px] text-[10px]"
          >
            Lihat Produk
          </a>
        </div>
      </div>
      <div
        className="lg:w-2/4
      "
      >
        <img src="/Preview.png" alt="" />
      </div>
    </section>
  );
};

export default Hero;
