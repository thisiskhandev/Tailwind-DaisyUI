const Carousel = () => {
  return (
    <>
      <main className="w-100 mx-auto">
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2"
              className="w-full"
              alt="slides"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB"
              className="w-full"
              alt="slides"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6"
              className="w-full"
              alt="slides"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693"
              className="w-full"
              alt="slides"
            />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </main>
    </>
  );
};
export default Carousel;
