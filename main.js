import Vue from 'vue';
import App from './App.vue';

/* 请求数据 第一种vue-resource   Https://github.com                   
 使用vue-resource请求数据 首先在控制台安装vue-resource
npm/cnpm install vue-resource --save  下载 
 import VueResource from 'vue-resource' 引入;
Vue.use(VueResource); 使用
 this.$http.get(api).then() 请求
 
 第二种axios  第三方模块
1. npm/cnpm install axios --sava
2. 那个页面用哪个页面引入
 
 第三种fetch jsonp
 
 */

/* 动态挂在路由 */
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//1.创建路由

import RouterA from "./compnents/RouterA.vue";
import RouterB from "./compnents/RouterB.vue";

import ContentA from "./compnents/ContentA.vue";
import ContentB from "./compnents/ContentB.vue";

//路由的嵌套
//import User from './components/User.vue';

 // import UserAdd from './components/User/UserAdd.vue';
 // import Userlist from './components/User/Userlist.vue';







//2.定义路由

 const routes =[ 
				{ path: '/RouterA', component: RouterA },
				{ path: '/RouterB', component: RouterB },
				
				{ path: '/ContentA', component: ContentA },
				{ path: '/ContentB/:aid', component: ContentB},   /*动态路由*/
				
				{ path: '/RouterA', component: RouterA, name:'RouterA' }
				
				
			/* 	{   
					
					path: '/user',
					
					component: User,
					children:[{ path: 'useradd', component: UserAdd },

										{ path: 'userlist', component: Userlist },
										]

				} */
				
	//			{ path:"*",redirect: '/Home'} //默认跳转路由
				]
//3.实例化VueRouter
		const router=new VueRouter({
			 mode: 'history',   /*hash模式改为history*/
			routes
			})
//4.挂在路由
new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
//5.<router-view></router-view>



/*路由的嵌套

  1.配置路由
   {

      path: '/user',

      component: User,
      children:[
        { path: 'useradd', component: UserAdd },

        { path: 'userlist', component: Userlist }

      ]

    }

  2.父路由里面配置子路由显示的地方   <router-view></router-view>
*/

/* 1.找官网

	2.安装   npm install mint-ui -S         -S表示  --save

	3.引入mint Ui的css 和 插件

		import Mint from 'mint-ui';

		Vue.use(Mint);


		import 'mint-ui/lib/style.css'
		

	4.看文档直接使用。 */




