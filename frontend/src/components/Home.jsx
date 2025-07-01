import { IoShirtOutline } from "react-icons/io5";

const Home = () => {
  const categories = [
    {
      id: "men",
      title: "Men",
      icon: <IoShirtOutline />,
    },
    {
      id: "women",
      title: "Women",
      icon: <IoShirtOutline />,
    },
    {
      id: "kids",
      title: "Kids",
      icon: <IoShirtOutline />,
    },
    {
      id: "footware",
      title: "Footware",
      icon: <IoShirtOutline />,
    },
    {
      id: "accessories",
      title: "Accessories",
      icon: <IoShirtOutline />,
    },
  ];

  const brands = [
    {
      id: "nike",
      brandName: "Nike",
      icon: <IoShirtOutline />,
    },
    {
      id: "h&m",
      brandName: "H&M",
      icon: <IoShirtOutline />,
    },
    {
      id: "adidas",
      brandName: "Adidas",
      icon: <IoShirtOutline />,
    },
    {
      id: "zara",
      brandName: "Zara",
      icon: <IoShirtOutline />,
    },
    {
      id: "puma",
      brandName: "Puma",
      icon: <IoShirtOutline />,
    },
  ];

  const featuredProducts = [
    {
      id:"",
      image:"/assets/image1.png",
      productTitle:"",
      price:"",
      discountedPrice:"",
      brand:"",
      category:""
    }
  ]

  return (
    <div className="mt-[70px] w-full bg-gray-50">
      <header className="h-[70vh] w-full relative">
        <img
          src="/assets/image.png"
          alt=""
          className="h-full w-full object-center object-cover"
        />

        <div className="absolute top-[15vh] left-20">
          <h1 className="text-5xl font-light mb-4">
            Lorem ipsum dolor sit amet.
          </h1>
          <h2 className="text-4xl font-bold mb-10">Lorem ipsum dolor sit.</h2>
          <button className="bg-black text-white px-4 py-2 rounded">
            View Products
          </button>
        </div>
      </header>

      <section className="py-10">
        <header className="p-10">
          <h1 className="font-extrabold text-center text-3xl">
            Shop by Category
          </h1>
        </header>

        <article className="flex items-center justify-evenly">
          {categories.map((category) => {
            return (
              <div
                key={category.id}
                className="py-3 px-12 rounded bg-white shadow-xl border border-gray-200"
              >
                <figure className="text-6xl p-3">{category.icon}</figure>
                <h3 className="font-bold text-center pt-2">{category.title}</h3>
              </div>
            );
          })}
        </article>

        <header className="pt-30 pb-10">
          <h1 className="font-extrabold text-center text-3xl">
            Shop by Brands
          </h1>
        </header>

        <article className="flex items-center justify-evenly">
          {brands.map((brand) => {
            return (
              <div
                key={brand.id}
                className="py-3 px-12 rounded bg-white shadow-xl border border-gray-200"
              >
                <figure className="text-6xl p-3">{brand.icon}</figure>
                <h3 className="font-bold text-center pt-2">
                  {brand.brandName}
                </h3>
              </div>
            );
          })}
        </article>

        <header className="pt-30 pb-10">
          <h1 className="font-extrabold text-center text-3xl">
            Featured Products
          </h1>
        </header>

        <article>
          featured products card
        </article>


      </section>
    </div>
  );
};

export default Home;
