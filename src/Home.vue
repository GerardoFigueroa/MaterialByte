<template>
  <div>
    <div class="jumbotron">
      <div class="row">
        <div class="col-sm12 col-md-9" align="center">
            <img id="banner" class="img-fluid" src="../public/portada-materialbyte.png" width="700"><br><br><br><br>
        </div>
        <div class="col-sm12 col-md-3">
          <div class="container" id="card-precios">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Servicios</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#precios" class="btn btn-outline-danger btn-block btn" role="button" aria-pressed="true">Precios</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <div class="row justify-content-center">
      <div class="col-sm-12 col-xl-3">
        <div class="container">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Sitios Web</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="card-link">Card link</a>
            </div>
          </div>
        </div>
        <br>
      </div>
      <div class="col-sm-12 col-xl-3">
        <div class="container">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Community Manager</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="card-link">Card link</a>
            </div>
          </div>
        </div>
        <br>
      </div>
      <div class="col-sm-12 col-xl-3">
        <div class="container">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Aplicaciones Moviles</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="card-link">Card link</a>
            </div>
          </div>
        </div>
        <br>
      </div>
    </div>
    <section style="background-color: #EA6063;" id="quienes-somos" class="text-white">
      <br>
      <h1 align="center" class="display-4">Quienes somos</h1>
      <div class="row justify-content-center">
        <div class="col-sm-12 col-xl-4">
          <div class="container">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ul class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ul>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row" align="center">
                    <img class="d-block w-100 rounded-circle" src="https://vignette.wikia.nocookie.net/yogscast/images/8/8a/Avatar_Turps_2015.jpg/revision/latest/zoom-crop/width/240/height/240?cb=20150812174310" alt="First slide">
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">
                    <img class="d-block w-100 rounded-circle" src="https://vignette.wikia.nocookie.net/yogscast/images/8/8a/Avatar_Turps_2015.jpg/revision/latest/zoom-crop/width/240/height/240?cb=20150812174310" alt="First slide">
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">
                    <img class="d-block w-100 rounded-circle" src="https://vignette.wikia.nocookie.net/yogscast/images/8/8a/Avatar_Turps_2015.jpg/revision/latest/zoom-crop/width/240/height/240?cb=20150812174310" alt="First slide">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <br>
    </section>
    <section id="contactanos">
      <br>
      <h1 class="display-4" align="center">Contactanos</h1>
      <br>
      <div class="row justify-content-center">
        <div class="col-sm-12 col-xl-4">
          <div class="container">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <div class="col-sm-12 col-xl-4">
          <div class="container">
            <div class="card">
              <div class="card-body">
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Nombre Completo</label>
                    <input type="text" v-model="nombre" class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Telefono</label>
                    <input type="text" v-model="telefono" class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Correo</label>
                    <input type="text" v-model="correo" class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Contenido</label>
                    <textarea class="form-control" v-model="contenido" rows="4"></textarea>
                  </div>
                  <button class="btn btn-block btn-outline-danger" v-on:click="enviar">Enviar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br>
    </section>
    <section style="background-color: #EA6063;" id="precios">
      <br>
      <h1 align="center" class="display-4 text-white">Precios</h1><br><br>
      <div class="row justify-content-center">
        <div class="col-sm-12 col-xl-3">
          <div class="container">
            <div class="card">
              <div class="card-header" align="center">
                <h3 class="display-4">300$</h3>
              </div>
              <div class="card-body">
                <h5 class="card-title">Basico</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button type="button" class="btn btn-outline-danger">Ver</button>
              </div>
            </div>
          </div>
          <br>
        </div>
        <div class="col-sm-12 col-xl-3">
          <div class="container">
            <div class="card">
              <div class="card-header" align="center">
                <h3 class="display-4">350$</h3>
              </div>
              <div class="card-body">
                <h5 class="card-title">Pro</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button type="button" class="btn btn-outline-danger">Ver</button>
              </div>
            </div>
          </div>
          <br>
        </div>
        <div class="col-sm-12 col-xl-3">
          <div class="container">
            <div class="card">
              <div class="card-header" align="center">
                <h3 class="display-4">$?</h3>
              </div>
              <div class="card-body">
                <h5 class="card-title">Customizado</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button type="button" class="btn btn-outline-danger">Ver</button>
              </div>
            </div>
          </div>
          <br>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
  $('.carousel').carousel();
  export default {
    name: 'Home',
    data(){
      return{
        nombre: '',
        telefono: '',
        correo: '',
        contenido: ''
      }
    },
    methods: {
      enviar(){
        axios.post('https://materialbyte-website.firebaseio.com/contactos.json',{
          nombre: this.nombre,
          telefono: this.telefono,
          correo: this.correo,
          contenido: this.contenido
        }).then((response) => {
          this.nombre = '';
          this.correo = '';
          this.telefono = '';
          this.contenido = '';
        })
      }
    }
  }
</script>

<style>
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
#icon-material{
  font-size: 150px;
  color: #EA6063;
}
#nav-icon{
  font-size: 30px;
  color: #EA6063;
}
#banner{
  padding-top: 80px;
}
.form-control:focus {
  border-color: #EA6063;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6);
}
</style>
