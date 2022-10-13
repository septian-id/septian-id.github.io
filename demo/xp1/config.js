var config = {
	nama_wifi: "Stars WiFi",
	daftar_harga: [
		{paket: "3H", harga: "Rp 2.000", durasi: "3 JAM"},
		{paket: "5H", harga: "Rp 3.000", durasi: "5 JAM"},
		{paket: "10H", harga: "Rp 5.000", durasi: "10 JAM"},
		{paket: "7D", harga: "Rp 20.000", durasi: "7 HARI"},
		{paket: "1M", harga: "Rp 50.000", durasi: "28 HARI"},
		],
		informasi: "Gunakan akses internet dengan bijak dan jangan lupa sholat 5 waktu"
}















































	function add_item(data){
		result = "<tr>";
		result += "<td>" + data.paket + "</td>";
		result += "<td>" + data.harga + "</td>";
		result += "<td>" + data.durasi + "</td>";
		result += "</tr>";
		return result;
	}
	
	$(document).ready(function(){
		$("#u").focus();
		$("#box_info").html(config.informasi);
		$("#harga").html("");
		config.daftar_harga.forEach(function(data){
			var item = add_item(data);
			$("#harga").append(item);
		});
		$("#nama_wifi").html(config.nama_wifi);
	});
