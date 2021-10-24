<template>
  <header>
      <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container">
      <a class="navbar-brand" href="/"><h3><span>Indo</span>XNXX</h3></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          <b-icon-search></b-icon-search></button>
          
        </form>
      </div>
    </div>
  </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
header{
    align-items: center;
    justify-content: center;
    padding: 10px 16px;
    background-color: #2c3d4e;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
}
h3{
  color: white;
  font-size: 28px;
  font-family: 'Montserrat', sans-serif;
}
span{
    color: #42B883;
    font-family: 'Montserrat', sans-serif;
  }
</style>