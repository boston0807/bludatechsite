function openTab(tabId, event) {
    document.querySelectorAll('.tabContent').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tabButton').forEach(b => b.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    if (event && event.currentTarget) event.currentTarget.classList.add('active');
}
 
function handleSubmit() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    if (!name || !phone) { alert('กรุณากรอกชื่อและเบอร์โทรศัพท์'); return; }
    document.getElementById('successMsg').style.display = 'block';
    ['name','phone','email','message'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('service').value = '';
}