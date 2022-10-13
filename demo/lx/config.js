var config = {
	nama_wifi: "Stars WiFi",
	daftar_harga: [
		{paket: "3H", harga: "Rp 2.000", durasi: "3 JAM"},
		{paket: "5H", harga: "Rp 3.000", durasi: "5 JAM"},
		{paket: "10H", harga: "Rp 5.000", durasi: "10 JAM"},
		{paket: "7D", harga: "Rp 20.000", durasi: "7 HARI"},
		{paket: "4W", harga: "Rp 50.000", durasi: "28 HARI"},
		],
		info: "Gunakan akses internet secukupnya dan jangan lupa sholat 5 waktu."
}




var title_bar = getID("title_bar");
var listItem = getID("listItem");
var panelInfo = getID("panelInfo");

title_bar.innerHTML = config.nama_wifi;
config.daftar_harga.forEach(function(data){
	var item = add_item(data);
	listItem.innerHTML += item;
});
panelInfo.innerHTML = config.info;

function add_item(data){
		result = "<tr>";
		result += "<td>" + data.paket + "</td>";
		result += "<td>" + data.harga + "</td>";
		result += "<td>" + data.durasi + "</td>";
		result += "</tr>";
		return result;
}

function getID(content_id){
	var obj = document.getElementById(content_id);
	return obj;
}