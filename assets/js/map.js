document.addEventListener("DOMContentLoaded", (event) => {
  setTimeout(() => {
    document.querySelector(
      "#load-iframe-map"
    ).innerHTML = `                    <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12097.889774401416!2d-73.96631654345444!3d40.70761505833849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bd90dce7f47%3A0xe9726d43f675d362!2sSouth%20Williamsburg%2C%20Brooklyn%2C%20NY%2C%20USA!5e0!3m2!1sen!2sgt!4v1707439534717!5m2!1sen!2sgt" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      `;
  }, 500);
});
