$(document).ready(function () {
  $("form#grocery").submit(function(event){
    event.preventDefault();
    const grocList1 =$("#grocery1").val();
    const grocList2 =$("#grocery2").val();
    const grocList3 =$("#grocery3").val();
    const grocList4 =$("#grocery4").val();
    const grocList5 =$("#grocery5").val();
    const grocList6 =$("#grocery6").val();
    const grocList7 =$("#grocery7").val();
    const grocList8 =$("#grocery8").val();

    let grocArray = [grocList1.toUpperCase(), grocList2.toUpperCase(), grocList3.toUpperCase(), grocList4.toUpperCase(), grocList5.toUpperCase(), grocList5.toUpperCase(), grocList6.toUpperCase(), grocList7.toUpperCase(), grocList8.toUpperCase()];

    sortGrocArray = grocArray.sort();

    console.log(sortGrocArray);

    sortGrocArray.forEach(function(groc){
      if (groc != ""){
        let list = document.createElement("li");
        list.innerText = groc;
        document.querySelector("#groceryList").appendChild(list);
      }
    });

    $("#results").show();
    $("#grocery").hide();
  });
});