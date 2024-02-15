'use strict';

function toggleChildren(element) {
  let children = element.querySelector('ul');
  if (children) {
      children.style.display = (children.style.display === 'none' || children.style.display === '') ? 'block' : 'none';
  }
}
