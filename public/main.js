// NAV VUE COMPONENT
Vue.component('colin-nav', {
    template: `
    <header>
        <div class="inner-head">
            <nav class="navbar navbar-default">
                <div class="navbar-header">
                  <router-link class="navbar-brand" to="/home">
                    <img alt="Brand" src="/brand/white_logo_transparent@2x.png">
                </router-link>
                </div>
                    <ul class="nav nav-pills">
                        <li role="presentation"><router-link to="/portfolio">Portfolio</router-link></li>
                        <li role="presentation"><router-link to="/about">About</router-link></li>
                        <li role="presentation"><router-link to="/contact">Contact</router-link></li>
                   </ul>
            </nav>
        </div>
    </header>
    `
});

//FOOTER COMPONENT
Vue.component('colin-footer', {
    template: `
    <footer>
        <div class="container">
          <div class="row" id="footerRow">
              <div class="col-xs-12">
                    <a href="mailto:colinjohnstell@gmail.com" target="_top"><i class="fa fa-envelope"></i></a>
                    <a href="https://www.linkedin.com/in/colin-stell-526280120/" target="_blank">
                      <i class="fa fa-linkedin-square align"></i>
                    </a>
                    <a href="https://github.com/ColinStellDev96" target="_blank">
                      <i class="fa fa-github align"></i>
                    </a>
                    <a href="https://twitter.com/ColinStell" target="_blank">
                      <i class="fa fa-twitter align"></i>
                    </a>
                    <a href="https://medium.com/@colinjohnstell" target="_blank">
                        <i class="fa fa-medium align"></i>
                    </a>
                    <p class ="footer" id="footer_1">Copywrite &copy; 2017 Colin Stell <i class="fa fa-code"></i> Powered by Coffee &amp; Cigars</p>
                 </div>
            </div>
          </div>
    </footer>
    `
});

// VUE ROUTES
var mainRouter = new VueRouter({
    routes: [
        {
            path: '/home',
            component: function(resolve, reject) {
                $.get('/html/home.html', function(htmlFromServer) {
                    resolve({template: htmlFromServer});
                });
            }
        },
        {
            path:'/portfolio',
            component: function(resolve, reject) {
                $.get('/html/portfolio.html', function(htmlFromServer){
                    resolve({template: htmlFromServer});
                });
            }
        },
        {
            path:'/about',
            component: function(resolve, reject) {
                $.get('/html/about.html', function(htmlFromServer){
                    resolve({template: htmlFromServer});
                });
            }
        },
        {
            path:'/contact',
            component: function(resolve, rejct) {
                $.get('/html/contact.html', function(htmlFromServer){
                    resolve({template: htmlFromServer});
                });
            }
        }
    ]
});

// VUE APP
var mainVm = new Vue({
    el: '#app',
    router: mainRouter,
    created: function() {
        window.location = '#/home';
    }
});
