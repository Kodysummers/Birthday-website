"use strict";
const c = window.BIRTHDAY;
const $ = (id) => document.getElementById(id);
const text = (tag, value, className) => { const el = document.createElement(tag); el.textContent = value; if (className) el.className = className; return el; };
document.querySelectorAll('[data-name]').forEach(el => el.textContent = c.name);
document.querySelectorAll('[data-from]').forEach(el => el.textContent = c.from);
document.title = `For ${c.name}, with love`;
$('salutation').textContent = c.salutation;
c.letter.forEach(paragraph => $('letter-body').append(text('p', paragraph)));
$('signoff').textContent = c.signoff;
if (c.letterPhoto?.src) { const img = $('letter-photo'); img.src = c.letterPhoto.src; img.alt = c.letterPhoto.alt; img.hidden = false; img.addEventListener('error', () => { img.hidden = true; }); }
c.loveNotes.forEach((note, index) => {
  const details = document.createElement('details');
  const summary = document.createElement('summary');
  summary.setAttribute('aria-label', `Reveal love note ${index + 1}`);
  summary.append(text('span', String(index + 1).padStart(2, '0'), 'note-number'), text('span', '♡'));
  const plus = text('span', '+', 'note-action'); plus.setAttribute('aria-hidden', 'true'); summary.append(plus);
  details.append(summary, text('p', note.text)); $('love-notes').append(details);
});
function placeholder() {
  const box = document.createElement('div'); box.className = 'photo-placeholder';
  box.append(text('span', '♡'), text('p', 'A place for our memory')); return box;
}
c.memories.forEach(memory => {
  const card = document.createElement('article'); card.className = 'memory';
  if (memory.src) {
    const button = document.createElement('button'); button.className = 'photo-button'; button.setAttribute('aria-label', `View photo: ${memory.title}`);
    const img = document.createElement('img'); img.src = memory.src; img.alt = memory.alt || memory.title; img.loading = 'lazy';
    img.addEventListener('error', () => { button.replaceWith(placeholder()); });
    button.append(img); button.addEventListener('click', () => {
      $('memory-image').src = memory.src; $('memory-image').alt = memory.alt || memory.title;
      $('memory-dialog').showModal();
    }); card.append(button);
  } else card.append(placeholder());
  $('memories').append(card);
});
$('close-dialog').addEventListener('click', () => $('memory-dialog').close());
$('memory-dialog').addEventListener('click', e => { if (e.target === $('memory-dialog')) { const rect = e.target.getBoundingClientRect(); if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) e.target.close(); } });
$('envelope').addEventListener('click', () => {
  $('envelope').disabled = true; $('envelope').classList.add('open');
  setTimeout(() => {
    $('welcome').hidden = true; $('gift').hidden = false;
    window.scrollTo({top: 0, behavior: 'instant'}); $('birthday-heading').focus({preventScroll:true});
  }, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 1100);
});
$('replay').addEventListener('click', () => {
  $('gift').hidden = true; $('welcome').hidden = false;
  $('envelope').classList.remove('open'); $('envelope').disabled = false;
  history.replaceState(null, '', location.pathname + location.search);
  window.scrollTo({top: 0, behavior: 'instant'}); $('envelope').focus({preventScroll:true});
});
