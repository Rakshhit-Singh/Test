onEvent("signIn", "click", function( ) {
  setScreen("loginScreen");
});
onEvent("signUp", "click", function( ) {
  setScreen("createAnAccount");
});
onEvent("first_name", "input", function( ) {
  onEvent("last_name", "input", function( ) {
    onEvent("username", "input", function( ) {
      onEvent("password", "input", function( ) {
        onEvent("SignUp", "click", function( ) {
          var temp = {};
          temp.First_Name = getText("first_name");
          temp.Last_Name = getText("last_name");
          temp.USERNAME = getText("username");
          temp.PASSWORD = getText("password");
          createRecord('Login_Details', temp);
          setScreen("HomeScreen");
        });
      });
    });
  });
});
onEvent("USERNAME", "input", function( ) {
  onEvent("PASSWORD", "input", function( ) {
    onEvent("SignIn", "click", function( ) {
      if (getText("PASSWORD") == getColumn("Login_Details", "USERNAME") || getText("PASSWORD") == getColumn("Login_Details", "PASSWORD")) {
        setScreen("HomeScreen");
      }
    });
  });
});
