"use strict";$(".login1").click(function(){$(".login_b").css({display:"none"}),$(".import").css({display:"block"})}),$(".login2").click(function(){$(".import").css({display:"none"}),$(".login_b").css({display:"block"})}),$("#sub").click(function(){$.ajax({method:"post",url:"../js/login.php",data:{username:$("#username").val(),password:$("#userpw").val()},success:function(s){1==s.code?(localStorage.setItem("username",s.data.username),location.href="../pages/Homepage.html"):alert(s.mag)},dataType:"json"})}),$("#sub2").click(function(){$.ajax({method:"post",url:"../js/registered.php",dataType:"json",data:{username:$("#username2").val(),password:$("#userpw2").val()},success:function(s){1==s.code?(alert("注册成功,赶紧登入吧~"),location.href="./login.html"):alert(s.mag)}})});