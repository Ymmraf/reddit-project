const toggleDisplayComment = (url) => {
  const commentBlock = document.getElementById(url);
  if (commentBlock.className == "block") {
    commentBlock.className = "hidden";
  } else {
    commentBlock.className = "block";
  }
};

export default toggleDisplayComment