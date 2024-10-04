
document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    var user_email = document.getElementById('user_email').value;
    var name = document.getElementById('name').value;
    var content = document.getElementById('content').value;
    var messageElement = document.getElementById('message');

    if (validateEmail(user_email)) {
        // تجهيز البيانات لإرسال البريد
        var templateParams = {
            user_email: user_email,
            name:name,
            content:content,
            message: 'شكراً لتسجيلك! سيتم إرسال المزيد من المعلومات إلى بريدك الإلكتروني قريباً.'
        };

        // استخدام EmailJS لإرسال البريد
        emailjs.send('service_29uqqx3', 'template_vfjrp0c', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                messageElement.innerText = 'تم إرسال البريد الإلكتروني بنجاح!';
            }, function(error) {
                console.log('FAILED...', error);
                messageElement.innerText = 'حدث خطأ أثناء إرسال البريد الإلكتروني.';
            });
    } else {
        messageElement.innerText = 'الرجاء إدخال بريد إلكتروني صالح';
    }
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
