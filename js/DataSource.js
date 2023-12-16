// Array of objects representing the items

const jewelleryItems = [
  {
    itemID: 1,
    imageSrc: "image/t6.jpg",
    title: "shailesh kale",
    price: "&#8377;1,50,000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur!",
  },
  {
    itemID: 2,
    imageSrc: "image/t8.jfif",
    title: "Lorem, ipsum.",
    price: "&#8377;1,10,000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur!",
  },
  {
    itemID: 3,
    imageSrc: "image/t9.jpg",
    title: "Lorem, ipsum.",
    price: "&#8377;50,000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur!",
  },
  {
    itemID: 4,
    imageSrc: "image/t10.jfif",
    title: "Lorem, ipsum.",
    price: "&#8377;90,000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur!",
  },
  {
    itemID: 5,
    imageSrc: "image/t11.jpg",
    title: "Lorem, ipsum.",
    price: "&#8377;60,000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur!",
  },
  {
    itemID: 6,
    imageSrc: "image/t12.jpg",
    title: "Lorem, ipsum.",
    price: "&#8377;50,000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur!",
  },
  {
    itemID: 7,
    imageSrc: "image/t13.jfif",
    title: "Lorem, ipsum.",
    price: "&#8377;80,000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur!",
  },
  {
    itemID: 8,
    imageSrc: "image/t14.jpg",
    title: "Lorem, ipsum.",
    price: "&#8377;75,000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur!",
  },
  {
    itemID: 9,
    imageSrc: "image/t15.jpg",
    title: "Lorem, ipsum.",
    price: "&#8377;92,000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur!",
  },
  {
    itemID: 10,
    imageSrc: "image/t16.jpg",
    title: "Lorem, ipsum.",
    price: "&#8377;32,000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur!",
  },
];

// Function to display items on the main page
function displayJewelleryItems() {
  const jewellerySection = document.getElementById(
    "jewellery-section-main-image-box"
  );

  jewelleryItems.forEach((item) => {
    console.log(item)
    const itemBox = document.createElement("div");
    itemBox.classList.add("jewellery-section-image-box");
    itemBox.onclick = BoxClick; // Assuming BoxClick is a defined function

    const itemHTML = `
            <img src="${item.imageSrc}" alt="">
            <div class="jewellery-section-image-box-text">
                <h4>${item.title}</h4>
                <h5>${item.price}</h5>
                <p>${item.description}</p>
            </div>
        `;

    itemBox.innerHTML = itemHTML;
    jewellerySection.appendChild(itemBox);
  });
}

// Call the function to display items when the page loads
displayJewelleryItems();



// Wedding-Collection Data Source

const WeddingCollection = [
    {
      itemID: 1,
      imageSrc: "image/wedding-1.jpg",
      title: "Lorem, ipsum.",
      price: "&#8377;1,50,000",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur!",
    },
    {
      itemID: 2,
      imageSrc: "image/wedding-2.jpg",
      title: "Lorem, ipsum.",
      price: "&#8377;1,10,000",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur!",
    },
    {
      itemID: 3,
      imageSrc: "image/wedding-3.jpg",
      title: "Lorem, ipsum.",
      price: "&#8377;50,000",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur!",
    },
    {
      itemID: 4,
      imageSrc: "image/wedding-4.jpg",
      title: "Lorem, ipsum.",
      price: "&#8377;90,000",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur!",
    },
    {
      itemID: 5,
      imageSrc: "image/wedding-5.jfif",
      title: "Lorem, ipsum.",
      price: "&#8377;60,000",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur!",
    },
    {
      itemID: 6,
      imageSrc: "image/wedding-6.jpg",
      title: "Lorem, ipsum.",
      price: "&#8377;50,000",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur!",
    },
    {
      itemID: 7,
      imageSrc: "image/wedding-7.jpg",
      title: "Lorem, ipsum.",
      price: "&#8377;80,000",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur!",
    },
    {
      itemID: 8,
      imageSrc: "image/wedding-8.jpg",
      title: "Lorem, ipsum.",
      price: "&#8377;75,000",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur!",
    },
    {
      itemID: 9,
      imageSrc: "image/wedding-9.jpg",
      title: "Lorem, ipsum.",
      price: "&#8377;92,000",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur!",
    },
    {
      itemID: 10,
      imageSrc: "image/wedding-10.jpg",
      title: "Lorem, ipsum.",
      price: "&#8377;32,000",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur!",
    },
  ];

  
  


// Function to display items on the main page
function displayWeddingCollection() {
    const jewellerySection = document.getElementById(
      "Wedding-Collection"
    );
  
    WeddingCollection.forEach((item) => {
      console.log(item)
      const itemBox = document.createElement("div");
      itemBox.classList.add("jewellery-section-image-box");
      itemBox.onclick = BoxClick; // Assuming BoxClick is a defined function
  
      const itemHTML = `
              <img src="${item.imageSrc}" alt="">
              <div class="jewellery-section-image-box-text">
                  <h4>${item.title}</h4>
                  <h5>${item.price}</h5>
                  <p>${item.description}</p>
              </div>
          `;
  
      itemBox.innerHTML = itemHTML;
      jewellerySection.appendChild(itemBox);
    });
  }
  
  // Call the function to display items when the page loads
  displayWeddingCollection();



// Men-Collection


const MenCollection = [
  {
    itemID: 1,
    imageSrc: "image/m1.jfif",
    title: "Lorem, ipsum.",
    price: "&#8377;1,50,000",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur!",
  },
  {
    itemID: 2,
    imageSrc: "image/m2.jfif",
    title: "Lorem, ipsum.",
    price: "&#8377;1,10,000",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur!",
  },
  {
    itemID: 3,
    imageSrc: "image/m3.jfif",
    title: "Lorem, ipsum.",
    price: "&#8377;50,000",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur!",
  },
  {
    itemID: 4,
    imageSrc: "image/m4.jpg",
    title: "Lorem, ipsum.",
    price: "&#8377;90,000",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur!",
  },
  {
    itemID: 5,
    imageSrc: "image/m5.jpg",
    title: "Lorem, ipsum.",
    price: "&#8377;60,000",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur!",
  },
  {
    itemID: 6,
    imageSrc: "image/m6.jpg",
    title: "Lorem, ipsum.",
    price: "&#8377;50,000",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur!",
  },
  {
    itemID: 7,
    imageSrc: "image/m7.jfif",
    title: "Lorem, ipsum.",
    price: "&#8377;80,000",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur!",
  },
  {
    itemID: 8,
    imageSrc: "image/m8.jfif",
    title: "Lorem, ipsum.",
    price: "&#8377;75,000",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur!",
  },
  {
    itemID: 9,
    imageSrc: "image/m9.jfif",
    title: "Lorem, ipsum.",
    price: "&#8377;92,000",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur!",
  },
  {
    itemID: 10,
    imageSrc: "image/m10.jfif",
    title: "Lorem, ipsum.",
    price: "&#8377;32,000",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur!",
  },
];






// Function to display items on the main page
function displayMenCollection() {
  const jewellerySection = document.getElementById(
    "Men-Collection"
  );

  MenCollection.forEach((item) => {
    console.log(item)
    const itemBox = document.createElement("div");
    itemBox.classList.add("jewellery-section-image-box");
    itemBox.onclick = BoxClick; // Assuming BoxClick is a defined function

    const itemHTML = `
            <img src="${item.imageSrc}" alt="">
            <div class="jewellery-section-image-box-text">
                <h4>${item.title}</h4>
                <h5>${item.price}</h5>
                <p>${item.description}</p>
            </div>
        `;

    itemBox.innerHTML = itemHTML;
    jewellerySection.appendChild(itemBox);
  });
}

// Call the function to display items when the page loads
displayMenCollection();









// Array of jewellery items (assuming you have this data)


// Function to filter items based on selected criteria
function filterItems() {
    // Get selected price ranges
    const priceFilters = Array.from(document.querySelectorAll('input[name^="price"]:checked')).map(checkbox => checkbox.id);

    // Get selected metals
    const metalFilters = Array.from(document.querySelectorAll('input[name^="metal"]:checked')).map(checkbox => checkbox.id);

    // Get selected styles
    const styleFilters = Array.from(document.querySelectorAll('input[name^="style"]:checked')).map(checkbox => checkbox.id);

    // Get selected genders
    const genderFilters = Array.from(document.querySelectorAll('input[name^="gender"]:checked')).map(checkbox => checkbox.id);

    // Filter items based on selected criteria
    const filteredItems = jewelleryItems.filter(item => {
        const passesPriceFilter = priceFilters.length === 0 || priceFilters.includes('price-' + item.itemID);
        const passesMetalFilter = metalFilters.length === 0 || metalFilters.includes(item.metal.toLowerCase());
        const passesStyleFilter = styleFilters.length === 0 || styleFilters.includes(item.style.toLowerCase());
        const passesGenderFilter = genderFilters.length === 0 || genderFilters.includes(item.gender.toLowerCase());

        return passesPriceFilter && passesMetalFilter && passesStyleFilter && passesGenderFilter;
    });

    // Display filtered items
    displayFilteredItems(filteredItems);
}

// Function to display filtered items (you need to implement this)
function displayFilteredItems(items) {
    // Your code to display filtered items here...
}


// Assuming there's a container in your HTML to display the filtered items
const itemsContainer = document.getElementById('filtered-items-container');

function displayFilteredItems(items) {
    // Clear the existing items in the container
    itemsContainer.innerHTML = '';

    // Loop through filtered items and create HTML for each item
    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('filtered-item');

        // Create HTML for item details (modify this based on your actual item structure)
        const itemHTML = `
            <div class="item-image">
                <img src="${item.imageSrc}" alt="${item.title}">
            </div>
            <div class="item-details">
                <h3>${item.title}</h3>
                <p>${item.price}</p>
                <p>${item.description}</p>
            </div>
        `;

        itemElement.innerHTML = itemHTML;

        // Append each item to the container
        itemsContainer.appendChild(itemElement);
    });
}
