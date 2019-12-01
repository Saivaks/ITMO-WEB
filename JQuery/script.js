$(`p.first,a.first`).css(`color`, `red`);
$(`form *`).attr(`disabled`, `disabled`);


$(`a`)
    .prepend(`?`)
    .attr(`target`, `_blank`)
    .attr(`href`, function(index, value) {
        value = value.split(`http`);
        if (value[0] == `` && value[1][0] != `s`) {
            value.splice(0, 1);
            return `https` + value.join(`http`);
        }
        return value.join(`http`);
    });

task2_btn = () => {
    $(`a`)
        .removeAttr(`target`)
        .html(function(index, value) {
            if (value[0] == `?`) {
                return value.slice(0, 0) + value.slice(1);
            }
            return value;
        });
};


$(`.btn-toggle`).click(function() {
    $(`table tr:nth-child(2) td:first-child p`).toggle(1000);
});
$(`.btn-fadeToggle`).click(function() {
    $(`table tr:nth-child(3) td:first-child p`).fadeToggle(1000);
});
$(`.btn-slideToggle`).click(function() {
    $(`table tr:nth-child(4) td:first-child p`).slideToggle(1000);
});
$(`.btn-animate`).click(function() {
    console.log(4);

    $(`table tr:nth-child(5) td:first-child p`).animate({ fontSize: "2em" });
});
$(`.btn-hide`).click(function() {
    $(`table tr:nth-child(6) td:first-child p`).hide(1000);
});