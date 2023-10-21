document.addEventListener('DOMContentLoaded', function () {
    // Step 1: Get references to HTML elements
    const toastsContainer = document.getElementById('toasts');
    const button = document.getElementById('button');
  
    // Step 2: Add a click event listener to the button
    button.addEventListener('click', () => {
      // Step 3: Create and display toast notifications with different types
      createCustomToast('Welcome to Beautiful Toasts!', 'info', 5000, '#3498db', 'Info');
      createCustomToast('Success notification!', 'success', 3000, 'green');
      createCustomToast('Error toast!', 'error', 4000, 'red');
      createCustomToast('Another information toast.', 'info', 5000, 'dodgerblue');
      createCustomToast('A successful operation!', 'success', 3000, 'seagreen');
      createCustomToast('Critical error!', 'error', 4000, 'crimson');
    });
  
    // Step 4: Create a function to generate toast notifications
    function createToast(message, type) {
      // Step 5: Create a div element for the toast
      const toast = document.createElement('div');
      toast.classList.add('toast', type); // Step 6: Add CSS classes based on type
      toast.innerText = message;
  
      // Step 7: Add a close button to dismiss the toast
      const closeButton = document.createElement('span');
      closeButton.classList.add('close-button');
      closeButton.innerHTML = '&times;';
      closeButton.addEventListener('click', () => {
        toastsContainer.removeChild(toast); // Step 8: Remove the toast when the close button is clicked
      });
  
      // Step 9: Append the close button to the toast
      toast.appendChild(closeButton);
  
      // Step 10: Append the toast to the toasts container
      toastsContainer.appendChild(toast);
  
      // Step 11: Automatically remove the toast after 5 seconds
      setTimeout(() => {
        toastsContainer.removeChild(toast);
      }, 5000);
    }
    
    // Additional Feature 1: Customize the timeout duration for each toast
    function createCustomToast(message, type, timeout) {
      const toast = document.createElement('div');
      toast.classList.add('toast', type);
      toast.innerText = message;
  
      const closeButton = document.createElement('span');
      closeButton.classList.add('close-button');
      closeButton.innerHTML = '&times;';
      closeButton.addEventListener('click', () => {
        toastsContainer.removeChild(toast);
      });
  
      toast.appendChild(closeButton);
      toastsContainer.appendChild(toast);
  
      // Use the provided timeout or default to 5 seconds
      const toastTimeout = timeout || 5000;
      setTimeout(() => {
        toastsContainer.removeChild(toast);
      }, toastTimeout);
    }
  
    // Additional Feature 2: Allow users to create custom toasts with different timeouts
    button.addEventListener('click', () => {
      createCustomToast('Custom toast with a 3-second timeout.', 'info', 3000);
      createCustomToast('Custom toast with a 10-second timeout.', 'success', 10000);
    });
  });
  