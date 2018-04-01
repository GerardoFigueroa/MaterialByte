<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">
        <span id="nav-icon" class="icon-material-byte"></span>
      </a>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <router-link class="nav-link" to="/home">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/portafolio">Portafolio</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
    <section id="footer">
      <br><br>
      <div class="container">
        <div class="row text-center text-xs-center justify-content-center">
          <div class="col-xs-12 col-sm-3 col-md-3">
            <h5>Links</h5>
            <ul class="list-unstyled quick-links">
              <li><router-link to="/home"><i class="fa fa-angle-double-right"></i>Home</router-link></li>
              <li><router-link to="/portafolio"><i class="fa fa-angle-double-right"></i>Portafolio</router-link></li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul class="list-unstyled list-inline social text-center">
              <li class="list-inline-item"><a href="https://www.facebook.com/MaterialByte-143895302958007/" target="_blank"><i class="fa fa-facebook"></i></a></li>
              <li class="list-inline-item"><a href="https://plus.google.com/110779281864182537931?hl=es" target="_blank"><i class="fa fa-google-plus"></i></a></li>
              <li class="list-inline-item"><a href="mailto:materialbyte@gmail.com"><i class="fa fa-envelope"></i></a></li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p class="h6">&copy All right Reserved.<a class="text-green ml-2" href="https://www.materialbyte.com"><span class="icon-material-byte"></span> MaterialByte</a></p>
          </div>
          </hr>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

  export default {
    data () {
      return {

      }
    }
  }
</script>

<style media="screen">
#footer {
    background: #EA6063 !important;
}
#footer h5{
	padding-left: 10px;
    border-left: 3px solid #eeeeee;
    padding-bottom: 6px;
    margin-bottom: 20px;
    color:#ffffff;
}
#footer a {
    color: #ffffff;
    text-decoration: none !important;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}
#footer ul.social li{
	padding: 3px 0;
}
#footer ul.social li a i {
    margin-right: 5px;
	font-size:25px;
	-webkit-transition: .5s all ease;
	-moz-transition: .5s all ease;
	transition: .5s all ease;
}
#footer ul.social li:hover a i {
	font-size:30px;
	margin-top:-10px;
}
#footer ul.social li a,
#footer ul.quick-links li a{
	color:#ffffff;
}
#footer ul.social li a:hover{
	color:#eeeeee;
}
#footer ul.quick-links li{
	padding: 3px 0;
	-webkit-transition: .5s all ease;
	-moz-transition: .5s all ease;
	transition: .5s all ease;
}
#footer ul.quick-links li:hover{
	padding: 3px 0;
	margin-left:5px;
	font-weight:700;
}
#footer ul.quick-links li a i{
	margin-right: 5px;
}
#footer ul.quick-links li:hover a i {
    font-weight: 700;
}

@media (max-width:767px){
	#footer h5 {
    padding-left: 0;
    border-left: transparent;
    padding-bottom: 0px;
    margin-bottom: 10px;
  }
}
</style>
