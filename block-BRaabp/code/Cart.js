import data from "../data.json";
function Cart(props) {
  return (
    <section>
      <div class="container flex justify-between flex-wrap">
        {data.map((e) => {
          return (
            <article className="flex-31">
              <h3>{e.name}</h3>
              <h4>{e["font-family"]}</h4>
              <h1
                style={{
                  fontFamily: `${e.name}, ${e["font-family"]}`,
                  fontSize: `${props.size}`,
                }}
              >
                {props.value}
              </h1>
            </article>
          );
        })}
      </div>
    </section>
  );
}
