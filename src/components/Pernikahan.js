import React from "react";
import ReactWhatsapp from "react-whatsapp";

const Pernikahan = () => {
  const data = [
    {
      id: 1,
      nameWeb: "Floral 1",
      urlImage: "https://levidio.id/wedding/vol3/assets/img/modules/1/floral-1.jpg",
      urlWeb: "https://demo.invee.net/?template=floral-1&ui=true&cover=image&bgm=invee",
      type: "Best",
      price: "130K",
    },
    {
      id: 2,
      nameWeb: "Floral 2",
      urlImage: "https://levidio.id/wedding/vol3/assets/img/modules/1/Invitation%20Template%20-%20Floral%202.webp",
      urlWeb: "https://demo.invee.net/?template=floral-2&ui=true&cover=image&bgm=invee",
      type: "Best",
      price: "130K",
    },
    {
      id: 3,
      nameWeb: "Floral 3",
      urlImage: "https://levidio.id/wedding/vol3/assets/img/modules/1/Invitation%20Template%20-%20Floral%203.webp",
      urlWeb: "https://demo.invee.net/?template=floral-3&ui=true&cover=image&bgm=soundcloud",
      type: "Best",
      price: "130K",
    },
    {
      id: 4,
      nameWeb: "Floral 4",
      urlImage: "https://levidio.id/wedding/vol3/assets/img/modules/1/floral-4.jpg",
      urlWeb: "https://demo.invee.net/?template=floral-4&ui=true&cover=image&bgm=soundcloud",
      type: "Best",
      price: "130K",
    },
    {
      id: 5,
      nameWeb: "Floral 5",
      urlImage: "https://levidio.id/wedding/vol3/assets/img/modules/1/Invitation%20Template%20-%20Floral%205.webp",
      urlWeb: "https://demo.invee.net/?template=floral-5&ui=true&cover=image&bgm=soundcloud",
      type: "Best",
      price: "130K",
    },
    {
      id: 6,
      nameWeb: "Floral 6",
      urlImage: "https://levidio.id/wedding/vol3/assets/img/modules/1/Invitation%20Template%20-%20Floral%206.webp",
      urlWeb: "https://demo.invee.net/?template=floral-6&ui=true&cover=image&bgm=invee",
      type: "Best",
      price: "130K",
    },
    {
      id: 7,
      nameWeb: "Minimalist 1",
      urlImage: "https://levidio.id/wedding/vol3/assets/img/modules/1/Invitation%20Template%20-%20Minimalist%201.webp",
      urlWeb: "https://demo.invee.net/?template=minimalist-1&ui=true&cover=image&bgm=soundcloud",
      type: "Best",
      price: "130K",
    },
    {
      id: 8,
      nameWeb: "Minimalist 2",
      urlImage: "https://levidio.id/wedding/vol3/assets/img/modules/1/Invitation%20Template%20-%20Minimalist%202.webp",
      urlWeb: "https://demo.invee.net/?template=minimalist-2&ui=true&cover=image&bgm=invee",
      type: "Best",
      price: "130K",
    },
    {
      id: 9,
      nameWeb: "Minimalist 3",
      urlImage: "https://levidio.id/wedding/vol3/assets/img/modules/1/Invitation%20Template%20-%20Minimalist%203.webp",
      urlWeb: "https://demo.invee.net/?template=minimalist-3&ui=true&cover=image&bgm=soundcloud",
      type: "Best",
      price: "130K",
    },
    {
      id: 10,
      nameWeb: "Minimalist 4",
      urlImage: "https://levidio.id/wedding/vol3/assets/img/modules/1/Invitation%20Template%20-%20Minimalist%204.webp",
      urlWeb: "https://demo.invee.net/?template=minimalist-4&ui=true&cover=image&bgm=invee",
      type: "Best",
      price: "130K",
    },
    {
      id: 11,
      nameWeb: "Minimalist 5",
      urlImage: "https://levidio.id/wedding/vol3/assets/img/modules/1/Invitation%20Template%20-%20Minimalist%205.webp",
      urlWeb: "https://demo.invee.net/?template=minimalist-5&ui=true&cover=image&bgm=invee",
      type: "Best",
      price: "130K",
    },
    {
      id: 15,
      nameWeb: "Elegant",
      urlImage: "https://levidio.id/wedding/vol3/assets/img/modules/1/Invitation%20Template%20-%20Elegant%201.webp",
      urlWeb: "https://demo.invee.net/?template=elegant-1&ui=true&cover=image&bgm=invee",
      type: "Best",
      price: "130K",
    },
    {
      id: 13,
      nameWeb: "Tradisional (Jawa)",
      urlImage: "https://levidio.id/wedding/vol3/assets/img/modules/1/Invitation%20Template%20-%20Adat%20Jawa.webp",
      urlWeb: "https://demo.invee.net/?template=traditional-1&ui=true&cover=image&bgm=invee",
      type: "Best",
      price: "150K",
    },
    {
      id: 14,
      nameWeb: "Tradisional (Bali)",
      urlImage: "https://levidio.id/wedding/vol3/assets/img/modules/1/Invitation%20Template%20-%20Adat%20Bali.webp",
      urlWeb: "https://demo.invee.net/?template=traditional-2&ui=true&cover=image&bgm=soundcloud",
      type: "Best",
      price: "150K",
    },
    {
      id: 15,
      nameWeb: "Tradisional (Sumatra)",
      urlImage: "https://levidio.id/wedding/vol3/assets/img/modules/1/Invitation%20Template%20-%20Adat%20Sumatera.webp",
      urlWeb: "https://demo.invee.net/?template=traditional-3&ui=true&cover=image&bgm=soundcloud",
      type: "Best",
      price: "150K",
    },
    {
      id: 16,
      nameWeb: "Tradisional (Sunda)",
      urlImage: "https://levidio.id/wedding/vol3/assets/img/modules/1/traditional-4.jpg",
      urlWeb: "https://demo.invee.net/?template=traditional-4&ui=true&cover=image&bgm=soundcloud",
      type: "Best",
      price: "150K",
    },
    {
      id: 17,
      nameWeb: "Tunangan",
      urlImage: "https://levidio.id/wedding/vol3/assets/img/engagement.jpg",
      urlWeb: "https://demo.invee.net/?template=engagement-1&ui=true&cover=image&bgm=invee",
      type: "Premium",
      price: "170K",
    },
    {
      id: 18,
      nameWeb: "Wedding Anniversary",
      urlImage: "https://levidio.id/wedding/vol3/assets/img/weding-aniv.jpg",
      urlWeb: "https://demo.invee.net/?template=wedding-anniversary-1&ui=true&cover=image&bgm=invee",
      type: "Premium",
      price: "170K",
    },
    {
      id: 19,
      nameWeb: "Islamic 1",
      urlImage: "https://levidio.id/wedding/vol3/assets/img/islamic.jpg",
      urlWeb: "https://demo.invee.net/?template=islamic-1&ui=true&cover=image&bgm=invee",
      type: "Premium",
      price: "170K",
    },
    {
      id: 20,
      nameWeb: "Islamic 2",
      urlImage: "https://levidio.id/wedding/vol3/assets/img/islamic-2.jpg",
      urlWeb: "https://demo.invee.net/?template=islamic-2&ui=true&cover=image&bgm=invee",
      type: "Premium",
      price: "170K",
    },
  ];

  return (
    <section className="lg:px-[75px] px-[10px] mt-10 lg:mt-20 border-t-4 border-t-tittle rounded-3xl bg-[#FFF4F4] w-full py-10" id="pernikahan">
      <p className="text-center font-bold lg:text-[36px] text-tittle">
        Pilihan Terbaik dari <br /> Web Undangan Pernikahan
      </p>
      <div className="flex flex-wrap justify-evenly w-full">
        {data.map((e) => (
          <div key={e.id} className=" bg-white h-[380px] mt-10 rounded-3xl shadow-xl">
            <img className="w-full h-[218px] rounded-t-3xl" src={e.urlImage} alt="gambar" />
            <div className="px-[20px] my-[10px] flex justify-between text-text">
              <p className="font-bold">{e.nameWeb}</p>
              <p>{e.type}</p>
            </div>
            <p
              className="text-text px-[20px] font-medium
            "
            >
              Harga : <span className="text-tittle font-bold">{e.price}</span> / Website
            </p>
            <div className="flex px-[20px] mt-[15px] items-center space-x-3">
              <ReactWhatsapp className="text-white bg-button py-2 px-6 rounded-full" number="+6283173520319" message={`Hallo ka, Saya ingin membeli produk undangan digital ${e.nameWeb} paket ${e.type} dengan harga ${e.price}`}>
                <i class="fa-solid fa-cart-shopping mr-2"></i>
                <span>Beli</span>
              </ReactWhatsapp>
              <a href={e.urlWeb} className="text-white border-2 border-button py-2 px-6 rounded-full">
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

export default Pernikahan;
