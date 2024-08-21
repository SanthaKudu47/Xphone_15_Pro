function getScrollPosition() {
  const root = document.documentElement;
  const scrollArea = document.getElementById("scrollArea");
  if (!scrollArea) return;
  const scrollTop = root.scrollTop + 400;
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
    root.style.setProperty("--scroll", scrollPercentage.toString());
    root.style.setProperty("--scrollOfElement1", scrollXForElement1.toString()); //--scrollOfElement1
    console.log(scrollPercentage, scrollXForElement1);
  }
}

export { getScrollPosition };
