const Video = ({
  img,
  ytVideo,
  addClass,
  addStyle,
  videoClass,
  videoStyle,
}) => {
  return (
    <div className={`video-wrapper ${addClass}`} style={addStyle}>
      <iframe
        src="https://www.youtube.com/embed/GgBBGY_IcWg?autoplay=1&rel=0"
        srcDoc={`
<style>
    *{padding:0;margin:0;overflow:hidden}
    a{display:flex;width:100%;height:100%;}
    html,body{height:100%}
    span{position:absolute;left:50%;top:50%;margin:auto;transform:translate(-50%, -50%);border:3px solid #fff;width:120px;height:120px;display:flex;justify-content:center;align-items:center;border-radius:100%;}
    img{width:100%;height:100%;object-fit:cover;}
    span{text-align:center;font:45px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black;}
</style>
<a href="https://www.youtube.com/embed/${ytVideo}?autoplay=1&rel=0">
    <img src="${img}" alt='' loading=lazy>
    <span>▶</span>
</a>
`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Youtube Video"
        width="100%"
        height="100%"
        className={`video ${videoClass}`}
        style={videoStyle}
      ></iframe>
    </div>
  );
};

export default Video;
