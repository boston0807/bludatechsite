function openTab(tabId, event) {
    document.querySelectorAll('.tabContent').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tabButton').forEach(b => b.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    if (event && event.currentTarget) event.currentTarget.classList.add('active');
}
 
async function handleSubmit(event) {
    if (event) event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const service = document.getElementById('service').value;

    if (!name || !phone) {
        alert('กรุณากรอกชื่อและเบอร์โทรศัพท์');
        return;
    }

    const phonePattern = /^[0-9]{9,10}$/;
    if (!phonePattern.test(phone)) {
        alert('กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง');
        return;
    }

    try {

        const response = await fetch("https://hook.eu1.make.com/wmkv7xt6ed519qplqpdwqt5obxhafr93", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                phone: phone,
                email: email,
                message: message,
                service: service
            })
        });

        if (response.ok) {

            const successMsg = document.getElementById('successMsg');
            successMsg.style.display = 'block';

            document.getElementById('name').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
            document.getElementById('service').value = '';

            setTimeout(() => {
                successMsg.style.display = 'none';
            }, 3000);

        } else {
            alert("ส่งข้อมูลไม่สำเร็จ");
        }

    } catch (error) {
        console.error(error);
        alert("เกิดข้อผิดพลาดในการส่งข้อมูล");
    }
}