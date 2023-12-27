const firebaseConfig = {
    apiKey: "AIzaSyBOGN2y_n481oaVUmIf9qZnoLami55JwxE",
    authDomain: "formloginsignup-a7fb8.firebaseapp.com",
    databaseURL: "https://formloginsignup-a7fb8-default-rtdb.firebaseio.com",
    projectId: "formloginsignup-a7fb8",
    storageBucket: "formloginsignup-a7fb8.appspot.com",
    messagingSenderId: "277189178497",
    appId: "1:277189178497:web:e96e30e6885f9e55560980"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const database = firebase.database()

function signUp() {
    userName = document.getElementById("usernameS").value
    email = document.getElementById("emailS").value
    password = document.getElementById("passwordS").value
    cPassword = document.getElementById("cpasswordS").value

    // Nếu email hay pass sai -> thì nhập lại
    if (validate_email(email) == false || validate_pwd(password) == false || password !== cPassword) {
        alert("Please check your email or password")
        return // return trả về function hiện tại là signUp() -> nhập lại từ đầu
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            // Khởi tạo biến user
            var user = auth.currentUser

            var database_ref = database.ref()

            var user_data = {
                email: email,
                userName: userName,
                password: password,
                last_login: Date.now()
            }

            // Đẩy vào firebase databse
            database_ref.child('users/' + user.uid).set(user_data)

            alert("Successfully!!!")
        })
        .catch((error) => {
            var error_message = error.message
            alert(error_message)
        })
}

function logIn() {
    email = document.getElementById("emailLogin").value
    password = document.getElementById("passwordLogin").value

    // nhập sai -> không cho đăng nhập
    if (validate_email(email) == false || validate_pwd(password) == false) {
        alert("Please check your email or password")
        return // return trả về function hiện tại là logIn -> nhập lại từ đầu
    }

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            var user = auth.currentUser

            var database_ref = database.ref()

            var user_data = {
                last_login: Date.now()
            }

            database_ref.child('users/' + user.uid).update(user_data) // update ngày đăng nhập gần nhất

            alert("Log in successfull !!!")
            window.location.href = "index.html"
        })
        .catch((error) => {
            var error_message = error.message
            alert(error_message)
        })
}

function validate_email(email) {
    regex = /^[A-Za-z0-9._%+-]+@mindx\.edu\.vn$/ //kiểm tra tính hợp lệ(email)
    if (regex.test(email) == true) {
        return true
    } else {
        return false
    }
}

function validate_pwd(password) {
    regex = /^[A-Za-z]\w{7,14}$/  //kiểm tra tính hợp lệ (pwd)
    if (regex.test(password) == true) {
        return true
    } else {
        return false
    }
}