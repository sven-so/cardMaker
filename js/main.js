var imgAreaSelect;
var currentSelection;
$(document).ready(function() {
    $("#image3980").attr("xlink:href","http://static3.fjcdn.com/comments/Not+Today+_1bf02d92ef88bec70fac698a594f052c.jpg");
    $(".pick-a-color").pickAColor();
});
$('#myTab a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
    if ($(this).attr("href")=="#image") {
        if (imgAreaSelect){
            imgAreaSelect.setOptions({ show: true, x1: currentSelection.x1, x2: currentSelection.x2,
                y1: currentSelection.y1, y2: currentSelection.y2});
        }
    } else {
        if (imgAreaSelect){
            imgAreaSelect.setOptions({ hide: true });
        }
    }
});

function preview(img, selection){
    if (selection.width >0 && selection.height>0){
        currentSelection = selection;
        var scaleX = 192 / (selection.width || 1);
        var scaleY = 138 / (selection.height || 1);
        var h = scaleY * img.height;
        var w = scaleX * img.width;
        var ml = Math.round(scaleX * selection.x1);
        var mt = Math.round(scaleY * selection.y1);
        $("#image3980").attr("width", w);
        $("#image3980").attr("height", h);
        $("#image3980").attr("x", 171-ml);
        $("#image3980").attr("y", 131-mt);
    }
}

function readURL(input1){
    if (input1.files && input1.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $("#image3980").attr("xlink:href",e.target.result);
            $("#selImage").attr("src", e.target.result);
            imgAreaSelect = $('img#selImage').imgAreaSelect({
                handles: true,
                instance: true,
                aspectRatio: '192:138',
                onSelectChange: preview
            });
        };
        reader.readAsDataURL(input1.files[0]);
    }
}
function setBGColor(input1) {
    $("#rect3967").css("fill", "#"+$(input1).val());
}
function setHeader1(input1) {
    setTextValue(input1, "#svgHeader1");

}
function setHeader2(input1) {
    setTextValue(input1, "#svgHeader2");
}
function setTextValue(input, svgId) {
    var $svgElement = $(svgId);
    var text = $(input).val();
    var oldText = $svgElement.text();
    $svgElement.text(text);
    if ($svgElement.width()>180) {
        $svgElement.text(oldText);
    }
}
function setText(input1) {
    $("#svgText").text($(input1).val());
}