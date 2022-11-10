const SupportModel = ({ title, sub, addClass, addStyle }) => {
  return (
    <form
      action="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/Search-Show"
      className="flex flex-column h-100"
      method="get"
      name="simpleSearch"
      noValidate=""
      role="search"
    >
      <h2 className="text-center">{title}</h2>
      <p className="text-center">{sub}</p>

      <label htmlFor="search-by-number" className="text-danger">
        Model #, Part # or Item #
      </label>

      <div className="input-btn">
        <input
          autoComplete="off"
          className="form-control search-field is-invalid"
          id="search-by-number"
          name="q"
          required=""
          type="search"
          aria-describedby="16680858695420"
        />
      </div>

      <div
        className="suggestions-wrapper"
        data-url="/on/demandware.store/Sites-cubcadet-Site/en_US/SearchServices-GetSuggestions?q="
      ></div>

      <div className="invalid-feedback" id="16680858695420">
        <strong>Required Field: </strong>(Model #, Part # or Item #) Please fill
        out this field.
      </div>
      <input name="lang" type="hidden" value="en_US" />

      <div className="mt-3">
        <img
          src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/dw3bde9ca9/Service%20and%20Parts/How%20to%20Find%20Model%20Number/Find_Model_Number_Cub_Cadet.jpg"
          alt=""
          className="ml-auto mr-auto"
        />
        <p className="my-2">
          The Model number is eleven characters long and is printed on the left
          of the product identification label. Characters can include numbers,
          letters or hyphens.
        </p>
      </div>

      <button className="btn btn-secondary btn-pf-search mt-auto" type="submit">
        Find Support
      </button>
    </form>
  );
};

export default SupportModel;
