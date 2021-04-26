import data from "./data.json";
function Cart(props) {
  return (
    <article className="flex justify-between flex-31">
      <div className="flex-30 font-0">
        <img src={props.img} className="img" />
      </div>
      <div className="flex-60">
        <div className="title flex justify-between">
          <h3 className="ternary-heading">{props.title}</h3>
          <h3 className="ternary-heading">{props.price}</h3>
        </div>
        <p>{props.desc}</p>
      </div>
    </article>
  );
}
function CreateUi(props) {
  console.log(props);
  return (
    <>
      <section>
        <div className="container flex justify-between align-center flex-wrap">
          {props.category === "all"
            ? data.map((elm) => {
                return (
                  <>
                    <Cart {...elm} />
                  </>
                );
              })
            : data
                .filter((e) => e.category === props.category)
                .map((elm) => {
                  return (
                    <>
                      <Cart {...elm} />
                    </>
                  );
                })}
        </div>
      </section>
    </>
  );
}

export default CreateUi;
