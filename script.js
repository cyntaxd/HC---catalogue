function goToPage() {
  const page = document.getElementById("nav-select").value;

  if (page) {
    window.location.href = page;
  }
}