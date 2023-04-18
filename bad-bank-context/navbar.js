function NavBar(){
  return(
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
              <a class="nav-link" href="home.js">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="createaccount.js">Create Account</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="deposit.js">Deposit</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="withdraw.js">Withdraw</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="alldata.js">All Data</a>
      </li>
    </ul>
  </div>
</nav>
    </>
  );
}