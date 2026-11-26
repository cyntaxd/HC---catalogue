function goToPage() {
  const page = document.getElementById("page-select").value;

  if (page) {
    window.location.href = page;
  }
}