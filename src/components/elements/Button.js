const Button = ({ copy, url, addClass }) => {
  if (url) {
    return (
      <a
        href={url}
        className={`button text-uppercase text-decoration-none d-inline-block ${addClass}`}
        dangerouslySetInnerHTML={{ __html: copy }}
      />
    );
  } else {
    return (
      <button
        className={`coh-link coh-style-button-action ${addClass}`}
        dangerouslySetInnerHTML={{ __html: copy }}
      />
    );
  }
};

export default Button;
