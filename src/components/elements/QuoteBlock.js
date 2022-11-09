import Stars from "./Stars";

const QuoteBlock = ({ quote, addClass, addCSS }) => {
  return (
    <div
      className={`quote-block flex flex-column h-100 p-4 ${addClass}`}
      style={addCSS}
    >
      <ul className="row list-unstyled">
        <li className="col col-8 title text-uppercase">
          <strong>{quote.title}</strong>
        </li>
        <li className="col col-4 text-right">
          <Stars fill="#FFC10F" />
        </li>
      </ul>
      <p className="copy mt-2">{quote.copy}</p>
      <ul className="row list-unstyled">
        <li className="col col-sm-6 col-md-6 author">
          <strong>{quote.name}</strong>
        </li>
        <li
          className="col col-sm-6 col-md-6 unit"
          dangerouslySetInnerHTML={{
            __html: quote.unit,
          }}
        ></li>
      </ul>
    </div>
  );
};

export default QuoteBlock;
