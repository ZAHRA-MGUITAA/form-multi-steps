function switch_(){
  let toggle = document.querySelector('.toggle-switch');
  let monthly_p = document.querySelector('.monthly-p');
  let yearly_p = document.querySelector('.yearly-p');
  if(toggle.classList.contains('monthly')){
    toggle.classList.toggle('yearly');
    toggle.classList.remove('monthly');
    yearly_p.style.color = "var(--Marine-blue)";
    monthly_p.style.color = "var(--Light-gray)";
  }else if(toggle.classList.contains('yearly')){
    toggle.classList.add('monthly');
    toggle.classList.remove('yearly');
    monthly_p.style.color = "var(--Marine-blue)";
    yearly_p.style.color = "var(--Light-gray)";
  }
}



