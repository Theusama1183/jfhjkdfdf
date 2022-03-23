function menuOpenHide() {
    var x = document.getElementById("menu-container");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function userOpenHide() {
    var y = document.getElementById("userMetaContainer");
    if (y.style.display === "block") {
      y.style.display = "none";
    } else {
      y.style.display = "block";
    }
  }

  function filterBtn() {
    var y = document.getElementById("filterBtnContainer");
    if (y.style.display === "block") {
      y.style.display = "none";
    } else {
      y.style.display = "block";
    }
  }


  function myRange() {
    var x = document.getElementById("myInput").value;
    document.getElementById("priceRange").innerHTML = "$" + x;
  }