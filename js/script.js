array = new Array("JAN","FEB","MARCH","APR","JUN","JUIL","AUG","SEP","OCT","NOV","DEC");
		d= new Date();
		document.getElementById("year").innerHTML=d.getFullYear();
		document.getElementById("month").innerHTML=array[d.getMonth()];
		document.getElementById("day").innerHTML=d.getDate();
		t=d.getTime();
		document.getElementById("h").innerHTML=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
		// traitement "active"
		$(".main-menu ul li a").on("click",function () {
			$(".main-menu ul li a").removeClass("active");
			$(this).addClass("active");
			$(".home-part-container").removeClass("active");
			$(".home-part-container.slides."+$(this).attr("data-title")).addClass("active");
			history.pushState('data', '', $(this).attr("data-url"));
		});
		//
		$(".home-part-container .head a").on("click",function() {
			$(".home-part-container.slides."+$(this).attr("data-title")).removeClass("active");
			$(".main-menu ul li a").removeClass("active");
			$(".main-menu ul li #home").addClass("active");
			history.pushState('data', '', 'bougrine.html');
		});

		if(window.location.hash){
			var temp=$(".main-menu ul li a[data-url='bougrine.html" +document.location.hash+ "']");
			var temp2=temp.attr("data-title");
			//alert(".main-menu ul li a[data-url='bougrine.html#" +document.location.hash+ "']");
			$(".home-part-container.slides."+temp2).addClass("active");
			//remove active from main menu
			$(".main-menu ul li a").removeClass("active");
			//alert(".main-menu ul li a[data-title='"+temp2+"']");
			$(".main-menu ul li a[data-title='"+temp2+"']").addClass("active");
		}
		//variables
		var fullname;
		var email;
		var message;
		function getContenu() {
			fullname=document.getElementById("fullname");
			email=document.getElementById("email");
		}