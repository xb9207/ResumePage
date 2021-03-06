function display_skills(){

    var pie_chart = echarts.init(document.getElementById('skills_chart'));
    pie_option = {
	        title: {
	        show:true,
	            text: 'Skills',
	            //subtext: '缂備胶铏庨崹浼存儓濮楅幖鐟邦潩椤',
	            x: 'center',
	            y: 'center',
	            textStyle:{
	            	fontSize:'20'
	            }
	        },
		    series: [
		        {
		            type:'pie',
		            radius: ['30%', '90%'],
		            label: {
		                normal: {
		                    show: true,
		                    position: 'inside',
		                    textStyle:{
		                        fontSize:10,
		                    }
		                },
		            },
		            data:[
		                {value:5, name:'Java'},
		                {value:4, name:'JavaScript'},
		                {value:1, name:'Html'},
		                {value:1, name:'Css'},
		                {value:1, name:'R'}
		            ]
		        }
		    ]
	 };
	if(pie_chart!=0){
		pie_chart.clear();
		pie_chart.setOption(pie_option);
	}else{
		
	    pie_chart.setOption(pie_option);
	
	}
}

function display_others(){

    var pie_chart = echarts.init(document.getElementById('others_chart'));
    pie_option = {
	        title: {
	        show:true,
	            text: 'Others',
	            //subtext: '缂備胶铏庨崹浼存儓濮楅幖鐟邦潩椤',
	            x: 'center',
	            y: 'center',
	            textStyle:{
	            	fontSize:'20'
	            }
	        },
		    series: [
		        {
		            type:'pie',
		            radius: ['30%', '90%'],
		            label: {
		                normal: {
		                    show: true,
		                    position: 'inside',
		                    textStyle:{
		                        fontSize:10,
		                    }
		                },
		            },
		            data:[
		                {value:5, name:'Git'},
		                {value:4, name:'Markdown'},
		                {value:1, name:'Svn'},
		                {value:1, name:'PS'},
		                {value:1, name:'硬件'}
		            ]
		        }
		    ]
	 };
	if(pie_chart!=0){
		pie_chart.clear();
		pie_chart.setOption(pie_option);
	}else{
		
	    pie_chart.setOption(pie_option);
	
	}
}