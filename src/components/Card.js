import CardArr from "../components/CardArr";

const Card = () => {
  return (
    <>
      {CardArr.map((val) => {
        return (
          <div>
            <div className="card w-96 bg-base-100 shadow-xl" key={val.id}>
              <figure>
                <img src={val.imgURL} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{val.title}</h2>
                <p>{val.desc}</p>
                <div className="card-actions justify-end">
                  <button className="btn">{val.targetBtn}</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
