function sendMessage(){
    var params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value
    };
     const serviceId="service_m9kjlqf";
     const templateId="template_jz2v4g7";

emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      document.getElementById("name").value="";
      document.getElementById("email").value="";
      document.getElementById("message").value="";
      console.res();
      alert("message send successfully");

    })
    .catech((err) =>console.log(err));
}