let lastScrollPosition = 0;
let scrollDirection: "up" | "down" = "up";
let scrollStatic = 0;
function getScrollPosition(scrollAreaId = "scrollAreaImage", value = 100) {
  const speed = 5;
  const root = document.documentElement;
  const scrollArea = document.getElementById(scrollAreaId);

  if (!scrollArea) return;

  getScrollDirection(root.scrollTop);

  const scrollTop = root.scrollTop;
  const topOfScrollArea = scrollArea.offsetTop;
  const scrollAreaHeight = scrollArea.clientHeight;
  const fullHeight = topOfScrollArea + scrollAreaHeight;
  if (topOfScrollArea < scrollTop && fullHeight > scrollTop) {
    const scrollPercentage = Math.min(
      Math.round(
        ((scrollTop - topOfScrollArea) / scrollArea.clientHeight) * 100
      ),
      100
    );
    const scrollXForElement1 = Math.min(scrollPercentage, 70);

    if (scrollDirection === "down") {
      if (scrollStatic < value) {
        scrollStatic += speed;
      } else {
        scrollStatic = value;
      }
    } else {
      if (scrollStatic <= 0) {
        scrollStatic = 0;
      } else {
        scrollStatic -= speed;
      }
    }

    root.style.setProperty("--scroll", scrollPercentage.toString());
    root.style.setProperty("--scrollOfElement1", scrollXForElement1.toString());
    root.style.setProperty("--scrollStatic", scrollStatic.toString()); //--scrollOfElement1
    // console.log(scrollPercentage, scrollXForElement1);
  } else {
    if (scrollTop < scrollArea.offsetTop) {
      console.log("before");
      if (scrollStatic !== 0) {
        scrollStatic = 0;
        root.style.setProperty("--scrollStatic", scrollStatic.toString());
      }
    }
    if (scrollAreaHeight + scrollArea.offsetTop < scrollTop) {
      if (scrollStatic !== value) {
        scrollStatic = value;
        root.style.setProperty("--scrollStatic", scrollStatic.toString());
      }
      scrollStatic = value;
    }
    // console.log("scrollAreaTop",scrollArea.offsetTop, "scroll",scrollTop);
  }
}

function getScrollDirection(currentScrollAmount = 0) {
  if (currentScrollAmount > lastScrollPosition) {
    scrollDirection = "down";
  } else {
    scrollDirection = "up";
  }
  lastScrollPosition = currentScrollAmount;
}
export { getScrollPosition };
