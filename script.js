// document.addEventListener('DOMContentLoaded', () => {
//         const navItems = document.querySelectorAll('.nav-item');

//         navItems.forEach(item => {
//           const dropdown = item.querySelector('.dropdown-list');
//           if (dropdown) {
//             item.addEventListener('click', e => {
//               e.stopPropagation();
              
//               document.querySelectorAll('.dropdown-list').forEach(dl => {
//                 if (dl !== dropdown) dl.classList.remove('show');
//               });
//               dropdown.classList.toggle('show');
//             });
//           }
//         });

//         document.addEventListener('click', () => {
//           document.querySelectorAll('.dropdown-list').forEach(dl => dl.classList.remove('show'));
//         });
//       });
document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach(item => {
    const dropdown = item.querySelector('.dropdown-list');

    if (dropdown) {
      item.addEventListener('click', e => {
        e.stopPropagation();

        // Close all other dropdowns
        document.querySelectorAll('.dropdown-list').forEach(dl => {
          if (dl !== dropdown) {
            dl.classList.remove('show');
          }
        });

        // Toggle this dropdown
        dropdown.classList.toggle('show');
      });
    }
  });

  // When clicking anywhere else, close all
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-list').forEach(dl => dl.classList.remove('show'));
  });

  // Prevent closing dropdown when clicking inside a dropdown-list
  document.querySelectorAll('.dropdown-list').forEach(dl => {
    dl.addEventListener('click', e => {
      e.stopPropagation();
    });
  });
});
