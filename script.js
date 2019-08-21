function checkPhoneNumber() {
    let number = document.getElementById("phoneNumber").value;
    let regexp = /^(09|03|07|08|05)+([0-9]{8})$/;
    if (number !== "") {
        if (regexp.test(number) == false) {
            document.getElementById("result").innerHTML = "số điện thoại không" +
                " đúng định dạng, mời nhập lại!";
        } else {
            document.getElementById("result").innerHTML = "Số điện thoại của " +
                "bạn hợp lệ. Wellcome chủ thuê bao " + number;
        }
    } else {
        document.getElementById("result").innerHTML = "số điện thoại không hợp lệ!";
    }
}
