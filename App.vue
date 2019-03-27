<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
   <br />
	 <br /><br />
		<div>ddd</div>
		<h1>{{obj.name}}</h1>
		<br />
		<ul>
			<li v-for="item in list">
				{{item}}
			</li>
		</ul>
		<ul>
			<li v-for="item in list1">
				{{item.title}}
			</li>
		</ul>
		<ul>
			<li v-for="item in list2">
				{{item.cate}}
				<ol>
					<li v-for="news in item.list">
						{{news.title}}
					</li>
				</ol>
			</li>
		</ul>
		<!-- <img src="assets/logo.png" /> -->
		<img v-bind:src="url" /> <!-- 第一种方法-->
		<img :src="url" />  <!-- 第二种方法-->
		<div v-bind:title="title"></div>
		<div v-html="h">绑定html</div>
		<div v-text="msg"></div>
		<div v-bind:="{'red22':flag,'blue':!flag}">绑定class</div>
		<ul>
			<li v-for="(item,key) in list" :class="{'blue':key==0}">
				{{key}}---{{item}}
			</li>
		</ul>
		<div v-bind:style="{'width':boxwidth+'px','height':boxhight+'px','background':boxground}"></div>
		<div>{{msg}}</div>
		<input type="text" v-model="msg" />
		<button v-on:click="getmsg()">获取点击方法</tton>
		<button v-on:click="setmsg()">设置表单的值</button>
		<br />	<br />	<br />
		<input type="text" ref="user" />
		<div ref="box">改变</div>
		<button v-on:click="getInputValue()">点击改变</button>
		<button @click="getInputValue()">另一种出发事件的方法</button>
		<ul>
			<li v-for="item in listRq">
				{{item}}
			</li>
		</ul>
		<button @click="requestData()">数据请求</button>
		<button @click="dilteData(333)">执行方法传值</button>
		<button data-aid="zdy" @click="eventFn($event)">事件对象</button> <!-- 获取自定义属性值-->
		 <br />
		 <br />
		
		<input type="text" v-model="todu" @keydown="addFn($event)" />	
		<button @click="addText()">点击增加</button>
	
	<br />
	<h2>进行中...</h2>
	<ul>
		<li v-for="(item,key) in listTodu" v-if="!item.checked">
				<input type="checkbox" v-model="item.checked" @change="saveList()"/> {{item.title}} ------<button @click="remvo(key)">删除</button>
		</li>
	</ul>
	<h2>已完成...</h2>
	<ul>
		<li v-for="(item,key) in listTodu" v-if="item.checked">
				<input type="checkbox" v-model="item.checked" @change="saveList()"/> {{item.title}} <button @click="remvo(key)">删除</button>
		</li>
	</ul>
	<hr><br/><br/><br/><br/><br/>
	
	<!-- 组件的使用 -->
	<v-home></v-home>
	
	<h1>生命周期函数：组件挂在，组件更新，组件销毁的时候出发的一系列方法</h1>
	<v-life v-if="flag1"></v-life>
	
	<button @click="flag1=!flag1">挂载卸载组件</button>
	<br /><br />
	<button @click="getData()">请求数据</button>
	
	<hr />
	<br />
	<router-link to="/RouterA">Go to Foo</router-link>
	<router-link to="/RouterB">Go to Bar</router-link>

	
	<!-- 动态路由 -->
	<router-view></router-view>
	<br /><br />
	</div>
	

</template>

<script>
import storage from"./model/storage.js"; //引入js文件
import Home from "./compnents/Home.vue";
import Life from "./compnents/Life.vue";

 //1. 引入组件      2.挂载组件    3.使用组件
 
/*1、不同路由传值：动态路由

    1、配置动态路由

       routes: [
        // 动态路径参数 以冒号开头
        { path: '/user/:id', component: User }
      ]


    2、在对应的页面

      this.$route.params获取动态路由的值


*/ 
 
export default{
	name:"app",
	data (){
		return{
			msg:"to you Vue",
			obj:{
			name:"lili"
			},
			url:"图片路径",
			title:"绑定属性值",
			flag:false,
			flag1:true,
			boxwidth:200,
			boxhight:200,
			boxground:"red",
			h:"<h2>碧昂斯<h2/>",
			list:["aa","bb","cc"],
			list1:[{"title":"111"},
							{"title":"222"},
							{"title":"333"}
					],
			list2:[
							{"cate":"新闻1",
								"list":[{"title":"新闻111"},
												{"title":"xinwei222"}
												]

							},
							{
								"cate":"新闻2",
									"list":[
										{"title":"新闻111a"},
										{"title":"xinwei222b"}
											]
							}
					
			],
			listRq:[],
			
			todu:"",
			listTodu:[
				{"title":"录制ionc",
				checked:false},
				{"title":"录制ionc",
				checked:true}
			]
			
		}
	},methods:{//放方法的地方
		getmsg(){
		/* 	alert("vue方法") */
		alert(this.msg) //获取data里面的数据
		},
		setmsg(){
			this.msg="设置的数据"
		},getInputValue(){
			//获取 ref定义的DOM节点
		console.info(this.$refs.user)	;
		//获取value值
			console.info(this.$refs.user.value);
			this.$refs.box.style.background="red";
		},requestData(){
			for (var i=0;i<5; i++){
				this.listRq.push("第"+i+"条数据")
			};
		},dilteData(ss){
			alert(ss);
		},eventFn(e){
			console.log(e);
			//e.srcElement 表示DOM节点
			e.srcElement.style.background="red";
			console.log(e.srcElement.dataset.aid);
			
		},addText(){
			//获取文本框输入的值，，把值输入给list
		
			this.listTodu.push({"title":this.todu,
													checked:false
			});
			console.log(this.listTodu)
			this.todu="";
			storage.set("list",this.listTodu);
		//	localStorage.setItem("list",JSON.stringify(this.listTodu))
		} ,remvo(key){
			
			this.listTodu.splice(key,1);
			
			localStorage.setItem("list",JSON.stringify(this.listTodu))
		},addFn(e){
			if(e.keyCode==13){
				this.listTodu.push({
					title:this.todu,
					checked:false
				});
				this.todu="";
				localStorage.setItem("list",JSON.stringify(this.listTodu))
			}
			
		},saveList(){
			localStorage.setItem("list",JSON.stringify(this.listTodu))
		},getData(){ //请求数据
		var api="请求地址";
		/* 1.vue-resource方法
		 this.$http.get(api).then(function(response){
			console.log(response)
		},function(err){
			console.log(err)
		}) 
		/
		第二种：箭头函数 this对象寸在问题
		
		this.$http.get(api).then((response)=>{
			this.list=response.body.result
		})
		
		2.axios方法
		Axios.get(api).then((response)=>{
			
		}).catch((err)=>{
			
		})
		
		
		
		*/
		}
		
		
	},mounted(){ //生命周期函数  页面加载请求
		var list= JSON.parse(localStorage.getItem("list"));   
		if(list){
			this.listTodu=list
		};
		
		getData();
		
		
	}, components:{
		"v-home":Home,
		"v-life":Life,
	}

}
</script>

<style lang="scss">

.red22{
	color: red;
}
.blue{
	color: aqua;
	/* background: #00FFFF; */
}
.bg{
	 background: #00FFFF;
}
</style>
