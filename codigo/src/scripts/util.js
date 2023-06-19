function openSideBar() {
    document.getElementById("sideBar").style.display = "block";
  }
  
  function closeSideBar() {
    document.getElementById("sideBar").style.display = "none";
  }

  function openLoginModal(){
      document.getElementById("loginModal").style.display = "flex";
  }

  function closeLoginModal(){
      document.getElementById("loginForm").style.display = "flex";
      document.getElementById("registerForm").style.display = "none";
      document.getElementById("loginModal").style.display = "none";
  }

  function openRegisterForm(){
      document.getElementById("loginForm").style.display = "none";
      document.getElementById("registerForm").style.display = "flex";
  }