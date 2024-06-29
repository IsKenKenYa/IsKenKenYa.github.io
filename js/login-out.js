 // Switch logic
  //       let switchCtn = document.querySelector("#switch-cnt");
  //       let switchC1 = document.querySelector("#switch-c1");
  //       let switchC2 = document.querySelector("#switch-c2");
  //       let switchCircle = document.querySelectorAll(".switch_circle");
  //       let switchBtn = document.querySelectorAll(".switch-btn");
  //       let aContainer = document.querySelector("#a-container");
  //       let bContainer = document.querySelector("#b-container");
  //       let allButtons = document.querySelectorAll(".submit");
        
  //       let getButtons = (e) => e.preventDefault()
  //       let changeForm = (e) => {
  //           // 修改类名
  //           switchCtn.classList.add("is-gx");
  //           setTimeout(function () {
  //               switchCtn.classList.remove("is-gx");
  //           }, 1500)
  //           switchCtn.classList.toggle("is-txr");
  //           switchCircle[0].classList.toggle("is-txr");
  //           switchCircle[1].classList.toggle("is-txr");
        
  //           switchC1.classList.toggle("is-hidden");
  //           switchC2.classList.toggle("is-hidden");
  //           aContainer.classList.toggle("is-txl");
  //           bContainer.classList.toggle("is-txl");
  //           bContainer.classList.toggle("is-z");
  //       }
  //       // 点击切换
  //       let shell = (e) => {
  //           for (var i = 0; i < allButtons.length; i++)
  //               allButtons[i].addEventListener("click", getButtons);
  //           for (var i = 0; i < switchBtn.length; i++)
  //               switchBtn[i].addEventListener("click", changeForm)
  //       }
  //       window.addEventListener("load", shell);
		
		
		
		
		
		
		
		
		
		
		
      // Switch logic
      document.addEventListener("DOMContentLoaded", function() {
          const switchCtn = document.querySelector("#switch-cnt");
          const switchC1 = document.querySelector("#switch-c1");
          const switchC2 = document.querySelector("#switch-c2");
          const switchCircle = document.querySelectorAll(".switch_circle");
          const switchBtn = document.querySelectorAll(".switch-btn");
          const aContainer = document.querySelector("#a-container");
          const bContainer = document.querySelector("#b-container");
      
          const changeForm = (e) => {
              e.preventDefault();
              switchCtn.classList.add("is-gx");
              setTimeout(function () {
                  switchCtn.classList.remove("is-gx");
              }, 1500);
              switchCtn.classList.toggle("is-txr");
              switchCircle[0].classList.toggle("is-txr");
              switchCircle[1].classList.toggle("is-txr");
              switchC1.classList.toggle("is-hidden");
              switchC2.classList.toggle("is-hidden");
              aContainer.classList.toggle("is-txl");
              bContainer.classList.toggle("is-txl");
              bContainer.classList.toggle("is-z");
          };
      
          switchBtn.forEach(btn => btn.addEventListener("click", changeForm));
      });
      
      // Form validation and local storage with regex
      document.addEventListener("DOMContentLoaded", function() {
          const signupForm = document.getElementById('signin-and-signup-a-form');
          const signinForm = document.getElementById('signin-and-signup-b-form');
      
          signupForm.addEventListener('submit', function(e) {
              e.preventDefault();
      
              const username = document.getElementById('signup-username').value;
              const email = document.getElementById('signup-email').value;
              const password = document.getElementById('signup-password').value;
              const gender = document.getElementById('signup-gender').value;
              const age = document.getElementById('signup-age').value;
              const skills = document.getElementById('signup-skills').value;
              const phone = document.getElementById('signup-phone').value;
              const address = document.getElementById('signup-address').value;
              const introduction = document.getElementById('signup-introduction').value;
      
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              const phoneRegex = /^\d{10,15}$/;
              const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      
              if (!username || !email || !password || !gender || !age || !skills || !phone || !address || !introduction) {
                  alert('请填写所有字段');
                  return;
              }
      
              if (!emailRegex.test(email)) {
                  alert('请输入有效的电子邮箱');
                  return;
              }
      
              if (!phoneRegex.test(phone)) {
                  alert('请输入有效的电话号码');
                  return;
              }
      
              if (!passwordRegex.test(password)) {
                  alert('密码至少8个字符，且包含字母和数字');
                  return;
              }
      
              const user = {
                  username,
                  email,
                  password,
                  gender,
                  age,
                  skills,
                  phone,
                  address,
                  introduction
              };
      
              localStorage.setItem(email, JSON.stringify(user));
              alert('注册成功');
          });
      
          signinForm.addEventListener('submit', function(e) {
              e.preventDefault();
      
              const email = document.getElementById('signin-email').value;
              const password = document.getElementById('signin-password').value;
      
              if (!email || !password) {
                  alert('请填写所有字段');
                  return;
              }
      
              const user = JSON.parse(localStorage.getItem(email));
      
              if (!user) {
                  alert('用户不存在');
                  return;
              }
      
              if (user.password !== password) {
                  alert('密码错误');
                  return;
              }
      
              alert('登录成功');
              window.location.href = 'index.html'; // 替换为你的目标网页
          });
      });
