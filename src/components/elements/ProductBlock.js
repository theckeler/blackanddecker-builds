import Button from "./Button";

const ProductBlock = ({ block, addClass, addStyle }) => {
  return (
    <a
      href={block.url}
      className={`flex flex-column h-100 text-decoration-none product-block ${addClass}`}
      style={{ addStyle }}
    >
      {block.sub && (
        <p
          className="text-center p-2 mb-0 bg-black"
          dangerouslySetInnerHTML={{
            __html: block.sub,
          }}
        />
      )}

      {block.img && (
        <img src={block.img} alt="" className="w-100 px-3 pt-3 d-block" />
      )}
      <p
        className="h3 px-3 mt-2 font-weight-normal title"
        dangerouslySetInnerHTML={{
          __html: block.title,
        }}
      />
      {block.price && (
        <p
          className="mt-0 px-3 mb-3 price"
          dangerouslySetInnerHTML={{
            __html: `$${block.price}`,
          }}
        />
      )}
      {block.copy && (
        <p
          className="px-3 mb-3 copy"
          dangerouslySetInnerHTML={{
            __html: block.copy,
          }}
        />
      )}
      {block.button && (
        <Button
          copy={block.button.copy}
          addClass="bg-red mt-auto ml-3 mr-3 mb-3 d-block text-uppercase"
        />
      )}
    </a>
  );
};

export default ProductBlock;
