fetch('dishes.json')
  .then(response => response.json())
  .then(dishes => {
    const today = new Date().getDate(); // day of month (1-31)
    const index = today % dishes.length;
    const dish = dishes[index];

    document.getElementById('dish-name').textContent = dish.name;
    document.getElementById('dish-origin').textContent = `From: ${dish.origin}`;
    document.getElementById('dish-story').textContent = dish.story;
    document.getElementById('local-version').textContent = dish.local_version;
    document.getElementById('dish-image').src = `images/${dish.image}`;
    document.getElementById('dish-image').alt = dish.name;
  });
