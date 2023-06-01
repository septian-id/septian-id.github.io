class controller{
	constructor(){
		this.hostname = "https://septian-id.github.io";
	}
	load_menu(){
		this.data = [
				{"title":"Home", "link": this.hostname},
				{"title":"About Us", "link": this.hostname + "/about.html"},
				{"title":"Terms & Conditions", "link": this.hostname + "/terms-and-conditions.html"},
				{"title":"Privacy Policy", "link": this.hostname + "/privacy-policy.html"},
				{"title":"Disclaimer", "link": this.hostname + "/disclaimer.html"},
			];
		return this.data;
	}
	load_contents(){
		this.data = [
				{
					"title"				: "Stars Billing - Aplikasi Billing Hotspot Mikrotik Berbasis Web",
					"description"		: "aplikasi berbasis web untuk membantu manajemen Hotspot MikroTik. Khususnya MikroTik yang tidak mendukung User Manager.",
					"thumbnail" 		: this.hostname+"/img/stars-billing-dashboard.jpg",
					"link" 				: this.hostname+"/",
					"date" 				: "2023-06-01 11:01:02"
				},
				{
					"title"				: "Jasa Setting Mikrotik Online Terpercaya",
					"description"		: "Seorang profesional IT dibidang jaringan. Berbekal pengalaman kerja, Saya bisa melakukan konfigurasi mikrotik dan perangkat jaringan lainya untuk mengatasi kendala/masalah yang anda alami saat ini.",
					"thumbnail" 		: this.hostname+"/img/jasa-setting-mikrotik.jpg",
					"link" 				: this.hostname+"/jasa-setting-mikrotik.html",
					"date" 				: "2023-06-01 11:01:02"
				},
				{
					"title"				: "Jasa Design Website Dan Login Page Mikrotik.",
					"description"		: "STARS LAB - Jasa design website dan login page mikrotik profesional, Berkualitas dan Terpercaya.",
					"thumbnail" 		: this.hostname+"/img/jasa-design-website-dan-login-page-mikrotik.jpg",
					"link" 				: this.hostname+"/jasa-design-website-dan-login-page-mikrotik.html",
					"date" 				: "2023-06-01 11:01:02"
				},
			];
		return this.data;
	}
}
