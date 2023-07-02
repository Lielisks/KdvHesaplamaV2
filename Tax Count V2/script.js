function kdvdahil1(v1)
{
    return v1 - (v1 * 0.01);
}

function kdvdahil8(v1)
{
    return v1 - (v1 * 0.08);
}

function kdvdahil18(v1)
{
    return v1 - (v1 * 0.18);
}

function kdvharic1(v1)
{
    return v1 * 1.01;
}

function kdvharic8(v1)
{
    return v1 * 1.08;

}

function kdvharic18(v1)
{
    return v1 * 1.18;

}

var btn = document.querySelector(".btnHesap");

btn.onclick = function()
{
    var v1 = Number(document.getElementById("sayi").value);
    var sonuc;

    if(document.getElementById("kdvdahil1").selected)
    {
        sonuc = kdvdahil1(v1);
    }

    if(document.getElementById("kdvdahil8").selected)
    {
        sonuc = kdvdahil8(v1);
    }

    if(document.getElementById("kdvdahil18").selected)
    {
        sonuc = kdvdahil18(v1);
    }

    if(document.getElementById("kdvharic1").selected)
    {
        sonuc = kdvharic1(v1);
    }

    if(document.getElementById("kdvharic8").selected)
    {
        sonuc = kdvharic8(v1);
    }

    if(document.getElementById("kdvharic18").selected)
    {
        sonuc = kdvharic18(v1);
    }

    document.getElementById("sonfiyat").innerHTML = "Son Fiyat: " + sonuc;
}