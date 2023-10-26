export default function sendNotification(type, text) {
  let notificationBox = document.querySelector("#notification");

  const alerts = {
    info: {
      icon: `<svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" width="1.5rem" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`,
      color: "rgba(59,130,246,1)"
    },
    error: {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" height="1.5rem" width="1.5rem" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`,
      color: "rgba(239,68,68,1)"
    },
    warning: {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" height="1.5rem" width="1.5rem" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
</svg>`,
      color: "rgba(245,158,11,1)"
    },
    success: {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" height="1.5rem" width="1.5rem" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`,
      color: "rgba(16,185,129,1)"
    }
  };

  let component = document.createElement("div");

  component.style.display = "flex";
  component.style.maxHeight = "30px";
  component.style.opacity = "0";
  component.style.flexDirection = "row";
  component.style.position = "relative";
  component.style.alignItems = "center";
  component.style.justifyContent = "center";
  component.style.backgroundColor = `${alerts[type].color}`;
  component.style.fontWeight = "700";
  component.style.paddingTop = "0.6rem";
  component.style.paddingBottom = "0.6rem";
  component.style.paddingLeft = "0.5rem";
  component.style.paddingRight = "0.5rem";
  component.style.marginTop = "0.25rem";
  component.style.marginBottom = "0.5rem";
  component.style.borderRadius = "0.5rem";
  component.style.transition = "opacity 1s, height 1.5s"

  component.innerHTML = `${alerts[type].icon}<p>${text}</p>`;

  notificationBox.appendChild(component);

  setTimeout(() => {
    component.style.opacity = 1;
  }, 1000); //1ms For fixing opacity on new element

  setTimeout(() => {
    component.style.opacity = 0;
    //component.classList.add("-translate-y-80"); //it's a little bit buggy when send multiple alerts
    component.style.margin = 0;
    component.style.padding = 0;
  }, 5000);

  setTimeout(() => {
    component.style.setProperty("height", "0", "important");
  }, 3000);

  setTimeout(() => {
    notificationBox.removeChild(component);
  }, 3050);
  //If you can do something more elegant than timeouts, please do, but i can't
}