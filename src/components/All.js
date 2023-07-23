import React from "react";
import ReactWhatsapp from "react-whatsapp";

const All = () => {
  const data = [
    {
        id: 1,
        nameWeb: "Birthday",
        urlImage:
          "https://levidio.id/wedding/vol3/assets/img/modules/1/Birthday.webp",
        urlWeb:
          "https://demo.invee.net/?template=birthday-1&ui=true&cover=image&bgm=soundcloud",
        type: "Best",
        price: "130K",
      },
      {
        id: 2,
        nameWeb: "Aqiqah",
        urlImage:
          "https://levidio.id/wedding/vol3/assets/img/modules/1/Aqiqah%201.webp",
        urlWeb:
          "https://demo.invee.net/?template=aqiqah-1&ui=true&cover=image&bgm=soundcloud",
        type: "Best",
        price: "130K",
      },
      {
        id: 3,
        nameWeb: "Khitan",
        urlImage:
          "https://levidio.id/wedding/vol3/assets/img/khitan.jpg",
        urlWeb:
          "https://demo.invee.net/?template=khitan-1&ui=true&cover=image&bgm=invee",
        type: "Premium",
        price: "150K",
      },
  ];
  return (
    <section
      className="mt-10 lg:mt-20 border-t-4 border-t-tittle rounded-3xl bg-[#FFF4F4] w-full px-[20px] py-10"
      id="all"
    >
      <p className="text-center font-bold lg:text-[36px] text-tittle">
        Pilihan Terbaik dari <br /> Web Undangan Khitanan, Aqiqah dan Ulang Tahun
      </p>
      <div className="flex flex-wrap justify-evenly w-full">
        {data.map((e) => (
          <div
            key={e.id}
            className=" bg-white h-[380px] mt-10 rounded-3xl shadow-xl"
          >
            <img
              className="w-full h-[218px] rounded-t-3xl"
              src={e.urlImage}
              alt="gambar"
            />
            <div className="px-[20px] my-[10px] flex justify-between text-text">
              <p className="font-bold">{e.nameWeb}</p>
              <p>{e.type}</p>
            </div>
            <p
              className="text-text px-[20px] font-medium
            "
            >
              Harga : <span className="text-tittle font-bold">{e.price}</span> /
              Website
            </p>
            <div className="flex px-[20px] mt-[15px] items-center space-x-3">
              <ReactWhatsapp
                className="text-white bg-button py-2 px-6 rounded-full"
                number="+6283173520319"
                message={`Hallo ka, Saya ingin membeli produk undangan digital ${e.nameWeb} paket ${e.type} dengan harga ${e.price}`}
              >
                <i class="fa-solid fa-cart-shopping mr-2"></i>
                <span>Beli</span>
              </ReactWhatsapp>
              <a
                href={e.urlWeb}
                className="text-white border-2 border-button py-2 px-6 rounded-full"
              >
                <i class="fa-solid fa-earth-americas mr-2 text-button"></i>
                <span className="text-button">Preview</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default All;
